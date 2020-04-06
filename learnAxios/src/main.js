import Vue from "vue"
import App from "./App"
import router from "./router"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: h => h(App)
})

// axios({
//   url:'http://123.207.32.32:8000/home/multidata',
// }).then((res)=>{
//   console.log(res)
// })

// axios({
//   url:'http://123.207.32.32:8000/home/data',
//   params:{
//     type: 'pop',
//     page: 1
//   }
// }).then((res)=>{
//   console.log(res)
// })
// axios({
//   url:'',
//   data:{},
// }).then((res)=>{
//   console.log(res)
// })
//
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000
//
// axios.all([axios({
//   url: "/home/multidata",
// }), axios({
//   url: "/home/data",
//   params: {
//     type: "pop",
//     page: 1
//   }
// })])
//   // .then((results) => {
//   //   console.log(results)
//   // })
//   .then(axios.spread((res1, res2) => {
//     console.log(res1)
//     console.log(res2)
//   }))

import {request} from "./network/request"
// request({
//   url:'/home/multidata'
// },res=>{
//   console.log(res)
// },err=>{
//   console.log(err)
// })


request({
  url: "/home/multidata"
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

