export default {
  aUploadInfo(context, payload) {
    // setTimeout(()=>{
    //   context.commit('uploadInfo')
    //   console.log(payload.message)
    //   payload.success();
    // },1000)
    return new Promise(((resolve, reject) => {
      setTimeout(() => {
        context.commit("uploadInfo")
        console.log(payload)
        resolve("111")
      }, 1000)
    }))
  }
}
