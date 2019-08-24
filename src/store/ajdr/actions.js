import {Utils} from '../../../src/common/util'

let utils = new Utils()
export const actions = {
  /**
   * 获取方案接口
   * @param commit
   */
  queryByCondition ({commit, state}) {
    console.log('action.js queryByCondition')
    utils.post('/solution/queryByCondition').then(res => {
      commit('COUNT', {count: res.data.count})
      commit('CURPAGESOLUTIONLIST', {curPageSolutionList: res.data})
      console.log('action.js queryByCondition curPageSolutionList: ')
      console.log(res.data)
    })
  },
  querySolutionDetailById ({commit, state}) {
    let solutionIdJson = '{\n  "id": ' + state.curSolutionId + '\n}'
    console.log('action.js querySolutionDetailById solutionIdJson: ')
    console.log(solutionIdJson)
    utils.post('/solution/querySolutionDetailById', solutionIdJson).then(res => {
      commit('CURSOLUTIONSAVEFILEPATH', {curSolutionSaveFilePath: res.data.saveFileUrl})
      console.log('action.js querySolutionDetailById curSolutionSaveFilePath: ')
      console.log(res.data.saveFileUrl)
    })
  }
}
