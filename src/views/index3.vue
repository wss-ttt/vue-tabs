<template>
  <div class="wrapper">
    开始位置的索引值:(从0开始)
    <br />
    <input type="number" v-model="start" />
    <br />结束位置的索引值:
    <br />
    <input type="number" v-model="end" />
    <br />
    <button type="button" @click="getData">获取数据</button>
    <h2>数据如下:</h2>
    <ul class="tabs">
      <li
        class="tab"
        v-for="(item,index) in tabs"
        :key="index"
        @click="tabToggle(item.name)"
        :class="{'active':tabShow === item.name}"
      >{{item.name}}</li>
    </ul>
    <div class="content">
        <users-item v-show="tabShow === 'users'" ref="users" :start="start" :end="end"></users-item>
        <news-item v-show="tabShow === 'news'" ref="news" :start="start" :end="end"></news-item>
    </div>
  </div>
</template>

<script>
/*
  1 一进入页面显示前5条数据 共用一个查询模块 下面是tab切换
  2 在tab切换的时候,如果查询条件没变的情况下,不需要重新获取数据(也就是需要缓存数据)
*/
import { mapState, mapActions } from 'vuex'
import UsersItem from './components/UsersItem'
import NewsItem from './components/NewsItem'
export default {
  components: {UsersItem,NewsItem},
  props: {},
  data() {
    return {
      start: 0,
      end: 5,
      userList: [],
      newsList: [],
      tabs: [
        {
          title: '用户',
          name: 'users'
        },
        {
          title: '新闻',
          name: 'news'
        }
      ],
      tabShow: 'users' // 默认 'users'标签进行显示
    }
  },
  watch: {},
  computed: {
    ...mapState(['users', 'news'])
  },
  methods: {
    getData() {
      /* this.$store.dispatch({
        type: 'getUsers',
        start: this.start,
        end: this.end
      })
      this.$store.dispatch({
        type: 'getNews',
        start: this.start,
        end: this.end
      }) */

      this.$nextTick(()=>{
          this.$refs['users'].initData()
          this.$refs['news'].initData()
      })
    },
    tabToggle(name) {
      this.tabShow = name
    }
  },
  created() {},
  mounted() {
      this.getData()
  }
}
</script>
<style scoped>
ul,
li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
ul.tabs {
  display: flex;
}
li.tab {
  margin: 10px;
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #000;
  border-radius: 4px;
  background-color: #ccc;
  cursor: pointer;
  font-weight: bold;
}
li.tab.active {
  background-color: #1acd7e;
  color: #fff;
}
</style>