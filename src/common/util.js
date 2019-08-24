import Vue from 'vue'
import $http from 'vue-resource'
Vue.use($http)

let vm = new Vue()

const configPath = '/api'
window.configPath = configPath

const aliyunconfigPath = '/aliyun'

export class Utils {
  get (url, data = {}) {
    url = configPath + url
    console.log("utli.js get url: ")
    console.log(url)
    console.log("utli.js get data: ")
    console.log(data)
    return new Promise((resolve, reject) => {
      vm.$http.get(url, {params: data, credentials: true}).then((response) => {
        resolve(response.body)
      }, function () {
        console.log('接口异常')
      })
    })
  }

  post (url, body = {}, data = {}) {
    url = configPath + url
    console.log("utli.js get url: ")
    console.log(url)
    console.log("utli.js post data: ")
    console.log(data)
    return new Promise((resolve, reject) => {
      vm.$http.post(url, body, {params: data}, {credentials: true}, {emulateJSON:true}).then((response) => {
        resolve(response.body)
        console.log('utli.js post result: ')
        console.log(response.body)
      }, function () {
        console.log('接口异常')
      })
    })
  }

  downloadFile(fileName) {
    let url = aliyunconfigPath + '/' + fileName
    console.log("utli.js downloadFile url: ")
    console.log(url)
    let data = {}
    return new Promise((resolve, reject) => {
      vm.$http.get(url, {params: data, credentials: true}).then((response) => {
        let blob = new Blob([response.data], {type:response.headers.get('content-type')});
        let link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
      })
    })
  }


  // 获取滚动条当前的位置
  getScrollTop () {
    let scrollTop = 0
    if (document.documentElement && document.documentElement.scrollTop) {
      scrollTop = document.documentElement.scrollTop
    } else if (document.body) {
      scrollTop = document.body.scrollTop
    }
    return scrollTop
  }

  // 获取当前可是范围的高度
  getClientHeight () {
    let clientHeight = 0
    if (document.body.clientHeight && document.documentElement.clientHeight) {
      clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight)
    } else {
      clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight)
    }
    return clientHeight
  }

  // 获取文档完整的高度
  getScrollHeight () {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
  }
}
