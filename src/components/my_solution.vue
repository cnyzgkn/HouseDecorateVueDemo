<template>
  <div class="my_solution_tab">
    <div class="my_solution">
      <h1>我的产品方案</h1>
      <h1>方案状态</h1>
      <ul >
          <li v-for="bar in barList" @click="choiceUrl(bar.title)">
            <router-link :to="bar.url" :class="title===bar.title? 'active':''">{{bar.title}}</router-link>
          </li>
      </ul>
    </div>
    <!--.
    <div class="extra">
      <p>方案总数：{{count}}</p>
      <p>本页项目id为</p>
      <ul>
          <li v-for="(subject,index) in curPageSolutionList.list" :subject="subject" :key="index">
            {{ '    第' + index + '个项目 : id = ' + subject.id + '  ' }}
          </li>
      </ul>
    </div>
    .-->
    <SolutionsTag :data="curPageSolutionList" class="solutionTag"></SolutionsTag>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        content: '',
        title: '全部',
        barList: [{
          title: '全部',
          url: '/my_solution/all'
        }, {
          title: '待审核',
          url: '/my_solution/need_approve'
        }, {
          title: '审核通过',
          url: '/my_solution/approved'
        }, {
          title: '审核不通过',
          url: '/my_solution/not_approved'
        }, {
          title: '未提交',
          url: '/my_solution/not_submitted'
        }, {
          title: '已上线',
          url: '/my_solution/already_online'
        }]
      }
    },
    mounted () {
      console.log('my_solution.vue mounted')
      this.$store.dispatch('queryByCondition')
    },
    methods: {
      choiceUrl (title) {
        this.title = title
      }
    },
    components: {
      'SolutionsTag': (resolve) => {
        require(['./common/solutionsTag.vue'], resolve)
      }
    },
    computed: {
      count () {
        return this.$store.getters.count
      },
      curPageSolutionList () {
        console.log('my_solution.vue curPageSolutionList')
        console.log(this.$store.getters.curPageSolutionList)
        return this.$store.getters.curPageSolutionList
      },
      curSolutionId () {
        return this.$store.getters.curSolutionId
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/less" lang="less">
  @import "../../style/color";
  .my_solution_tab {
    margin-bottom: 20px;
    p {
      color: red;
    }
    .my_solution{
      width: 950px;
      margin: 0 auto;
      height: 100px;
      h1 {
        display: inline-block;
        width: 126px;
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
  }
</style>
