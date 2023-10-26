import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

// 重写push|replace 
// 解决编程式导航路由传参遇到导航控制台报错问题
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function(location,resole,reject) {
    if (resole && reject) {
        originPush.call(this,location,resole,reject);
    }else{
        originPush.call(this,location,()=>{},()=>{});
    }
}

VueRouter.prototype.replace = function(location,resole,reject) {
    if (resole && reject) {
        originReplace.call(this,location,resole,reject);
    }else{
        originReplace.call(this,location,()=>{},()=>{});
    }
}

export default new VueRouter ({
    routes: [
        {
            path:'/home',
            component: Home,
            meta: {
                show:true
            }
        },
        {
            path:'/search/:keyword?',
            name:'search',
            component: Search,
            meta: {
                show:true
            },
        },
        {
            path:'/login',
            component: Login,
            meta: {
                show:false
            }
        }, 
        {
            path:'/register',
            component: Register,
            meta: {
                show:false
            }
        },
        {
            path:'*',
            redirect: '/home',
        }
    ]
})