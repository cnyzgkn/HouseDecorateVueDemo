import * as types from './types'
export const mutations = {
  [types.COUNT] (state, {count}) {
    state.count = count
  },
  [types.CURPAGESOLUTIONLIST] (state, {curPageSolutionList}) {
    state.curPageSolutionList = curPageSolutionList
  },
  [types.CURSOLUTIONID] (state, {curSolutionId}) {
    state.curSolutionId = curSolutionId
  },
  [types.CURSOLUTIONSAVEFILEPATH] (state, {curSolutionSaveFilePath}) {
    state.curSolutionSaveFilePath = curSolutionSaveFilePath
  },
}
