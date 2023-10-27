import Vue from 'vue'

import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)


// 重写push|replace 
// 解决编程式导航路由传参遇到导航控制台报错问题
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (location, resole, reject) {
    if (resole && reject) {
        originPush.call(this, location, resole, reject);
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
}

VueRouter.prototype.replace = function (location, resole, reject) {
    if (resole && reject) {
        originReplace.call(this, location, resole, reject);
    } else {
        originReplace.call(this, location, () => { }, () => { });
    }
}

export default new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        //返回的这个y=0，代表的滚动条在最上方
        return { y: 0 };
    },
})