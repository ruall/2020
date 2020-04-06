<template>
  <div id="app">
    <h2>______________Vuex modules 部分内容______________</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="uploadName('BB')">修改name</button>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName1}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <button @click="syncUploadName">异步修改name</button>

    <h2>______________Vuex state 部分内容______________</h2>
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>

    <h2>______________Vuex mutations 部分内容______________</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <hello-vuex></hello-vuex>
    <button @click="addStu">添加学生</button>
    <button @click="uploadInfo">修改信息</button>
    <button @click="aUploadInfo">异步修改信息</button>
    <h2>{{$store.state.info}}</h2>

    <h2>______________Vuex getter 部分内容______________</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>{{$store.getters.moreAgestu(30)}}</h2>


  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex"
  import {INCREMENT} from "./store/mutations-types"

  export default {
    name: "App",
    components: {
      HelloVuex
    },
    data() {
      return {
        message: "Hello Vuex"
      }
    },
    methods: {
      addition() {
        this.$store.commit(INCREMENT)
      },
      subtraction() {
        this.$store.commit("decrement")
      },
      addCount(count) {
        // this.$store.commit('incrementCount',count)
        // 特殊的提交方式
        this.$store.commit({
          type: "incrementCount",
          count
        })
      },
      addStu() {
        const stu = {id: 4, age: 50}
        this.$store.commit("addStudent", stu)
      },
      uploadInfo() {
        this.$store.commit("uploadInfo")
      },
      aUploadInfo() {
        // this.$store.dispatch("aUploadInfo", {
        //   message: "传递的参数1",
        //   success: () => {
        //     console.log("里面的处理已经完成")
        //   }
        // })

        this.$store.dispatch('aUploadInfo','传递的参数1').then((res)=>{
          console.log(res)
          console.log("里面的处理已经完成")
        })
      },
      uploadName(name){
        this.$store.commit('uploadName',name);
      },
      syncUploadName(){
        this.$store.dispatch('aUploadName')
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
