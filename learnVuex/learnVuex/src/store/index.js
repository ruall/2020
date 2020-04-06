import Vue from "vue"
import Vuex from "vuex"
import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"
import moduleA from "./modules/moduleA"

//1、安装插件
Vue.use(Vuex)

const state = {
  counter: 1000,
  students: [
    {
      id: 0,
      age: 10,
    },
    {
      id: 1,
      age: 20,
    },
    {
      id: 2,
      age: 30,
    },
    {
      id: 3,
      age: 40,
    }
  ],
  info: {
    name: "张三",
    age: 10
  }
}
//2、创建对象
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA
  }
})


// 3、到处store独享
export default store
