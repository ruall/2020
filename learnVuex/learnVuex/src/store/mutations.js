import {INCREMENT} from "./mutations-types"

export default {
  [INCREMENT](state) {
    state.counter++
  },
  decrement(state) {
    state.counter--
  },
  incrementCount(state, payload) {
    console.log(payload)
    state.counter = state.counter + payload.count
  },
  addStudent(state, stu) {
    state.students.push(stu)
  },
  uploadInfo(state) {
    state.info.name = "李四"
    state.info["address"] = "湖北"
    delete state.info.age
  }
}
