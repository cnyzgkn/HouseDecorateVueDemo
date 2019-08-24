export const getters = {
  title: state => {
    return state.title
  },
  count: state => {
    return state.count
  },
  curPageSolutionList: state => {
    for (let subject of state.curPageSolutionList.list) {
      subject.id = subject.id
    }
    return state.curPageSolutionList
  },
  curSolutionId: state => {
    return state.curSolutionId
  },
  curSolutionSaveFilePath: state => {
    return state.curSolutionSaveFilePath
  }
}
