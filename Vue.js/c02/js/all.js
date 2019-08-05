var app = new Vue({
    el: '#app',
    data: {
        data: [{
                name: '巧呼呼蘇打水',
                price: 30,
                expiryDate: 90
            },
            {
                name: '心驚膽跳羊肉飯',
                price: 65,
                expiryDate: 2
            },
            {
                name: '郭師傅武功麵包',
                price: 32,
                expiryDate: 1
            },
            {
                name: '不太會過期的新鮮牛奶',
                price: 75,
                expiryDate: 600
            },
            {
                name: '金殺 巧粒粒',
                price: 120,
                expiryDate: 200
            }
        ],
        isReverse: true,
        sortMode: '',
    },
    methods: {

    },
    computed: {
        filterData: function () {
            const vm = this;
            return vm.data.sort(function (a, b) {
                if (vm.sortMode == '') {
                    return vm.data;
                } else if (vm.isReverse == false) {
                    return a[vm.sortMode] > b[vm.sortMode] ? 1 : -1;
                } else if (vm.isReverse == true) {
                    return a[vm.sortMode] < b[vm.sortMode] ? 1 : -1;
                }
            })
        }
    },
})