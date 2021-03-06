import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import cookies from 'js-cookie'
import VueLazyload from 'vue-lazyload'
import gv from './assets/js/globalVar'
import gm from './assets/js/globalFun'
import qs from 'qs'
import vueFilter from './filter/filter'
import globalComponent from './commom/globalComponent'
// 过滤器
// for (let key in vueFilter) {
//   Vue.filter(key, vueFilter[key])
// }
Object.keys(vueFilter).forEach(key => {
  Vue.filter(key, vueFilter[key])
})
// 全局组件
// for (let key in globalComponent) {
//   Vue.component(key, globalComponent[key])
// }
Object.keys(globalComponent).forEach(key => {
  Vue.component(key, globalComponent[key])
})
// js-cookie
Vue.prototype.cookies = cookies
// axios发送对象，使用this.qs.stringify(obj)
Vue.prototype.qs = qs
// 非父子组件传值bus，绑定接收：this.bus.$on('handleMsg', function (data) {
//   console.log(data)
// })
// 触发、传值 this.bus.$emit('handleMsg', '我是b传给a的值')
Vue.prototype.bus = new Vue()
// 全局变量，使用this.gv.变量名,ex:this.gv.globalAA
Vue.prototype.gv = gv
// 页面 title
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
//
Vue.use(ElementUI)
// 全局方法，使用this.方法名，ex:this.exMethod
Vue.use(gm)
// img懒加载,使用：img src='....'换成v-lazy='....'
// element ui el-image可添加懒加载属性
Vue.use(VueLazyload)
// 配置
// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   error: '....png',//加载错误显示的图片
//   loading: '../loading.gif',//loading动图
//   attempt: 1
//   })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
