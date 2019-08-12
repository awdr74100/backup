var app = new Vue({
    el: '#app',
    data: {
        text: "",
        outText: "",
    },
    methods: {
        output: function (val) {
            const vm = this;
            vm.outText = vm.text;
            console.log(val);
            console.log(event);

        }
    },
    computed: {

    },
})