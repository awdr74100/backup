<template>
  <div>
    <div class="message-alert">
      <div v-for="(item, i) in messages" :key="i" class="alert" :class="'alert--' + item.status">
        <span v-if="item.status == 'success' "><i class="fas fa-check-circle"></i></span>
        <span v-if="item.status == 'warning' "><i class="fas fa-exclamation-triangle"></i></span>
        <span v-if="item.status == 'danger' "><i class="fas fa-times-circle"></i></span>   
        <p>{{item.message}}</p>
        <button @click="removeMessage(i)">&times;</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        messages: [
        //   {
        //   message: '訊息內容',
        //   status: 'success',
        //   timestamp: '123',
        // },{
        //   message: '訊息內容',
        //   status: 'warning',
        //   timestamp: '123',
        // },{
        //   message: '訊息內容',
        //   status: 'danger',
        //   timestamp: '123',
        // },
        ],
      };
    },
    methods: {
      updateMessage(message, status) {
        if(this.messages = []){

        }else if(this.messages[1].message == '請先登入'){
          this.messages.splice(1,1);
        }
        const timestamp = Math.floor(new Date() / 1000);
        this.messages.push({
          message,
          status,
          timestamp,
        });
        this.removeMessageWithTiming(timestamp);
      },
      removeMessage(num) {
        this.messages.splice(num, 1);
      },
      removeMessageWithTiming(timestamp) {
        const vm = this;
        setTimeout(() => {
          vm.messages.forEach((item, i) => {
            if (item.timestamp === timestamp) {
              vm.messages.splice(i, 1);
            }
          });
        }, 5000);
      },
    },
    created() {
      const vm = this;
      // 自定義名稱 'messsage:push'
      // message: 傳入參數
      // status: 樣式，預設值為 danger
      vm.$bus.$on('message:push', (message, status = 'danger') => {
        vm.updateMessage(message, status);
      });
    },
  };

</script>
