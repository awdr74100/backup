 // API 來源
 // https://opendata.epa.gov.tw/Data/Contents/AQI/

 var app = new Vue({
     el: '#app',
     data: {
         data: [],
         location: [],
         stared: [],
         filter: '',
     },
     // 請在此撰寫 JavaScript
     methods: {
         getData() {
             const vm = this;
             const api = 'http://opendata2.epa.gov.tw/AQI.json';

             // 使用 jQuery ajax
             $.get(api).then(function (response) {
                 vm.data = response;
                 console.log(response)
             });
         },
     }
 });