Vue.component('card', {
    template: '#cardData',
    data() {
        return {
            count: '',
        }
    },
    methods: {
        callAdd() {
            // this.$emit('calladdcount', Number(this.count));
            this.$root.addCount(Number(this.count));
        }
    },

})

var app = new Vue({
    el: '#app',
    data: {
        count: 0,
    },
    methods: {
        addCount(num) {
            this.count += num;
        }
    },
})