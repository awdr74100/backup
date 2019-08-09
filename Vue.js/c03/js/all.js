// API 來源
// https://opendata.epa.gov.tw/Data/Contents/AQI/

Vue.component("card-component", {
    // 元件：資料、狀態
    props: ['carditem', 'status'],
    template: "#cardData",
    methods: {
        callTrack: function () {
            this.$emit('trackevent', this.carditem);
            // 使用$root的方式
            // this.$root.xxx();
        }
    },
    computed: {
        // 判斷卡片顏色
        cardColor: function () {
            const vm = this;
            let cardColor;
            switch (vm.carditem.Status) {
                case "良好":
                    cardColor = ""
                    break;
                case "普通":
                    cardColor = "status-aqi2"
                    break;
                case "對敏感族群不健康":
                    cardColor = "status-aqi3"
                    break;
                case "對所有族群不健康":
                    cardColor = "status-aqi4"
                    break;
                case "非常不健康":
                    cardColor = "status-aqi5"
                    break;
                case "危害":
                    cardColor = "status-aqi6"
                    break;
                default:
                    cardColor = ""
                    break;
            }
            return cardColor;
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        // 全部資料
        data: [],
        // 全部城市的列表
        location: [],
        // 關注城市的列表
        stared: [],
        // 選擇觀看的城市
        filter: '',
    },
    // 請在此撰寫 JavaScript
    methods: {
        getData() {
            const vm = this;
            const cors = 'https://cors-anywhere.herokuapp.com/';
            const api = 'http://opendata2.epa.gov.tw/AQI.json';
            // 使用 jQuery ajax
            $.get(cors + api).then(function (response) {
                vm.data = response;
                vm.caeateAreaList();
            });
        },
        // 創建可選城市列表
        caeateAreaList: function () {
            const vm = this;
            vm.data.forEach(function (item) {
                if (vm.location.indexOf(item.County) == -1) {
                    vm.location.push(item.County);
                }
            })
        },
        // 指定項目增加追蹤
        addTrack: function (item) {
            const vm = this;
            let thisItem = item.SiteId;
            vm.stared.push(thisItem);
            vm.uploadLocalStorge();
        },
        // 指定項目移除追蹤
        removeTrack: function (index) {
            const vm = this;
            let thisIndex = index;
            vm.stared.splice(thisIndex, 1);
            vm.uploadLocalStorge();
        },
        // 上傳 Local Storge
        uploadLocalStorge: function () {
            const vm = this;
            localStorage.setItem('trackList', JSON.stringify(vm.stared));
        },
        // 下載 Local Sotrge
        downloadLocalStorge: function () {
            const vm = this;
            // 當Local Storge無資料時，給予空陣列
            vm.stared = JSON.parse(localStorage.getItem('trackList')) || [];
        }
    },
    computed: {
        // 過濾以追蹤城市項目
        filterData: function () {
            const vm = this;
            return vm.data.filter(function (item) {
                return !vm.stared.includes(item.SiteId);
            })
        },
        // 創建追蹤城市項目列表
        trackData: function () {
            const vm = this;
            return vm.data.filter(function (item) {
                return vm.stared.includes(item.SiteId);
            })
        }
    },
    created: function () {
        // 遠端獲取資料
        this.getData();
        // 撈取Local Storge資料
        this.downloadLocalStorge();
    },
});