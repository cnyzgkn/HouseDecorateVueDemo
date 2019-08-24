import {getters} from './getters'
import {actions} from './actions'
import {mutations} from './mutations'
const state = {
  title: 'Dream Room', // App标题
  count: 0, // 方案总数
  curPageSolutionList: {  // 当前页面方案列表
    list: []
  },
  curSolutionId: 0, //当前方案id
  curSolutionSaveFilePath: ''
}

export default {
  state,
  getters,
  actions,
  mutations
}
