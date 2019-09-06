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
    <h2>数据如下: </h2>
    <ul class="tabs">
      <li class="tab" v-for="(item,index) in tabs" :key="index" @click="tabToggle(item.name)" :class="{'active':tabShow === item.name}">
        {{item.name}}
      </li>
    </ul>
    <div class="item users" v-show="tabShow === 'users'" v-for="item in usersList" :key="item.name">
      <span>编号:{{item.id}}</span>
      <p>姓名:{{item.name}}</p>
    </div>
    <div class="item news" v-show="tabShow === 'news'" v-for="item in newsList" :key="item.name">
      <span>编号:{{item.id}}</span>
      <p>内容:{{item.name}}</p>
    </div>
  </div>
</template>

<script>
/*
  1 一进入页面显示前5条数据 共用一个查询模块 下面是tab切换
  2 在tab切换的时候,如果查询条件没变的情况下,不需要重新获取数据(也就是需要缓存数据)
*/
export default {
  components: {},
  props: {},
  data() {
    return {
      start: 0,
      end: 5,
      usersList: [],
      newsList:[],
      tabs:[
        {
          title:'用户',
          name:'users'
        },
        {
          title:'新闻',
          name:'news'
        }
      ],
      tabShow:'users'   // 默认 'users'标签进行显示
    }
  },
  watch: {},
  computed: {},
  methods: {
    getData(){
      this.getUsers()
      this.getNews()
    },
    getUsers() {
      this.$http({
        url: 'http://localhost:3000/users/page',
        method: 'get',
        params: {
          start: this.start,
          end: this.end
        }
      }).then(data => {
        console.log(data)
        this.usersList = data
      })
    },
    getNews(){
      this.$http({
        url:'http://localhost:3000/news/page',
        method:'get',
        params:{
          start:this.start,
          end:this.end
        }
      }).then(data=>{
        console.log(data)
        this.newsList = data
      })
    },
    tabToggle(name){
      this.tabShow = name
    }
  },
  created() {},
  mounted() {
    // 页面进入就执行一次这个方法
    this.getData()
  }
}
</script>
<style scoped>
ul,li{
  list-style-type: none;
  margin:0;
  padding: 0;
}
ul.tabs{
  display: flex;
}
li.tab{
  margin: 10px;
  width: 100px;
  height: 40px;
  line-height:40px;
  text-align:center;
  color:#000;
  border-radius:4px;
  background-color: #ccc;
  cursor: pointer;
  font-weight: bold;
}
li.tab.active{
  background-color: #1acd7e;
  color:#fff;
}
.item{
  border:1px solid #ccc;
  padding:10px;
  margin:10px;
  border-radius:4px;
}
</style>