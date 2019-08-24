<template>
  <div class="solutionsList">
    <div class="solution-container">
      <div class="solutionTag" v-for="(subject,index) in curPageSolutionList.list" :subject="subject" :key="index" v-if="index < curPageSolutionList.maxResults">
        <ul>
          <li class="solution-pic">
            <a @click="openSolution(subject.id)">
              <img class="solutionImg"  :src="getUrlImg(subject.previewUrl)" alt="">
            </a>
          </li>
          <li class="solution-status">
            {{getSolutionStatus(subject.status)}}
          </li><br>
          <ul>
            <li class="solution_cmd" v-for="cmd in cmdList" @click="choiceCmd(cmd.cmdName)">
              {{cmd.cmdName}}
            </li>
          </ul><br>
          <span>{{subject.id}}</span><br>
          <span>{{subject.name}}</span><br>
          <span>{{subject.buildingName}}</span><br>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import {QWebChannel} from './qwebchannel.js'

import {Utils} from '../../../src/common/util'
let utils = new Utils()

export default{
  props: {
    data: Object
  },
  data () {
    return {
      cmdList: [
        {
          cmdName: '复制'
        },
        {
          cmdName: '删除'
        },
        {
          cmdName: '信息'
        }
      ]
    }
  },
  watch: {
    data () {
      console.log('solutionsTag.vue watch')
    }
  },
  methods: {
    choiceCmd (cmdName) {
      console.log('solutionsTag.vue click ' + cmdName)
    },
    openSolution (id) {
      /*
      console.log('solutionsTag.vue openSolution id: ')
      console.log(id)
      this.$store.commit('CURSOLUTIONID', {curSolutionId : id})
      this.$store.dispatch('querySolutionDetailById')

      //split save file url
      let saveFileFullUrl = this.$store.getters.curSolutionSaveFilePath
      
      console.log('solutionsTag.vue openSolution saveFileFullUrl: ')
      console.log(this.$store.getters.curSolutionSaveFilePath)
      let fileName = saveFileFullUrl.substring(saveFileFullUrl.lastIndexOf('/')+1);
      console.log('solutionsTag.vue openSolution fileName: ')
      console.log(fileName)

      //utils.downloadFile(fileName)
      */
      new QWebChannel(qt.webChannelTransport, function (channel) {
        console.log('solutionsTag.vue openSolution new QWebChannel')
        let qtui = channel.objects.qtCanvas;
        qtui.onOpenSolution(id);
      })
      
    },
    getSolutionStatus (statusEnum) {
      if (statusEnum === 0) {
        return '未提交'
      } else if (statusEnum === 1) {
        return '待审核'
      } else if (statusEnum === 2) {
        return '审核通过'
      } else if (statusEnum === 3) {
        return '审核不通过'
      } else if (statusEnum === 4) {
        return '已上线'
      }
    },
    getUrlImg (url) {
      return url + '!original'
    }
  },
  computed: {
    curPageSolutionList () {
      return this.$store.getters.curPageSolutionList
    },
    curSolutionId () {
        return this.$store.getters.curSolutionId
    },
    curSolutionSaveFilePath () {
        return this.$store.getters.curSolutionSaveFilePath
    }
  }
}
</script>
<style rel="stylesheet/less" lang="less">
@import "../../../style/color";
@import "../../../style/base";
.solutionsList{
  width: 1600px;
  margin: 10px auto 0;
  min-height: 500px;
  .solution-container{
    width: 1600px;
    border-top: 1px dashed #ccc;
    margin-top: -10px;
    .solutionTag{
      padding-top: 20px;
      width: 350px;
      height: 400px;
      overflow: hidden;
      font-size: 12px;
      text-align: center;
      display: inline-block;
      margin: 0 20px 20px 0;
      ul{
        margin: 0 auto;
        padding: 0;
        li{
          list-style: none;
        }
      }
      a{
        cursor: pointer;
        text-decoration: none;
      }
      .solution-pic{
        height: 180px;
        margin-bottom: 12px;
        overflow: hidden;
        background: center;
      }
      .solution-name{
        font-size: 14px;
        white-space: nowrap;
        height: 22px;
        overflow: hidden;
        a{
          display: inline-block;
          word-spacing: normal;
          height: 24px;
          line-height: 24px;
          text-decoration: none;
          color: black;
        }
      }
      .solution_cmd{
        li{
          list-style: none;
          float: right;
          line-height: 20px;
          cursor: pointer;
          a{
            display: inline-block;
            padding: 8px;
            font-size: 12px;
            color: #aaa;
            text-decoration: none;
          }
        }
      }
      .solution-status{
        display: inline-block;
        margin: 4px auto 2px;
        height: 19px;
      }
      .solution-button{
        span{
          display: block;
          margin:0 auto;
          text-align: center;
          width: 90px;
          height: 24px;
          line-height: 24px;
          background-color:#268dcd;
          border-radius: 2px;
          a{
            color: #fff;
          }
        }

      }
    }
    .load-more{
      cursor: pointer;
      width: 530px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      background: #eee;
      color: @ajdrColor;
    }
  }

}
</style>
