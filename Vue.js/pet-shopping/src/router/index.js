// 官方組件
import Vue from 'vue';
import Router from 'vue-router';
// 自定義組件
import Home from '@/components/pages/home';
import Login from '@/components/pages/login';
import Backend from '@/components/pages/backend';
// 後端組件
import adminProductList from '@/components/adminProductList';
import adminOrderList from '@/components/adminOrderList';
// 載入bootstrap.js
import 'bootstrap';
// 啟動組件
Vue.use(Router);



export default new Router({
  routes: [{
      path: '*',
      redirect: '/',
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    }, {
      path: '/login',
      name: 'Login',
      component: Login,
    }, {
      path: '/admin',
      name: 'Backend',
      component: Backend,
      children: [{
        path: 'productList',
        name: 'productList',
        component: adminProductList,
        meta: {
          requiresAuth: true
        }
      }, {
        path: 'orderList',
        name: 'orderList',
        component: adminOrderList,
        meta: {
          requiresAuth: true
        }
      }]

    }
  ]
})
