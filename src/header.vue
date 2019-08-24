<template>
  <div class="ajdr-header">
    <div class="ajdr-header-container">
      <div class="ajdr-bar">
        <h1>Dream Room</h1>
        <ul>
          <li v-for="bar in barList" @click="choiceUrl(bar.title)">
            <router-link :to="bar.url" :class="title===bar.title? 'active':''">{{bar.title}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        content: '',
        title: '首页',
        barList: [{
          title: '首页',
          url: '/'
        }, {
          title: '我的任务',
          url: '/my_task'
        }, {
          title: '我的方案',
          url: '/my_solution'
        }, {
          title: '精品DNA',
          url: '/excellent_DNA'
        }, {
          title: '项目户型',
          url: '/house_type'
        }]
      }
    },
    methods: {
      choiceUrl (title) {
        this.title = title
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  @import "../style/color";
  .ajdr-header{
    background: @mainColor;
    width: 100%;
    height: 114px;
    .ajdr-bar{
      width: 950px;
      margin: 0 auto;
      height: 100px;
      h1 {
        display: inline-block;
        width: 200px;
        height: 40px;
        font-size: 20px;
        color: #000;
      }
      ul{
        li{
          list-style: none;
          float: left;
          line-height: 20px;
          cursor: pointer;
          a{
            display: inline-block;
            padding: 8px;
            font-size: 12px;
            color: #aaa;
            text-decoration: none;
          }
          a.active{
            color: @ajdrColor;
          }
        }
      }
    }
    .ajdr-header-container{
      width: 100%;
      margin: 0 auto;
      border-bottom: 1px solid @line;
    }
  }
</style>
