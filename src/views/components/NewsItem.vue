<template>
  <div class="news">
    <div
      class="item"
      v-for="item in news.newsList"
      :key="item.name"
    >
      <span>编号:{{item.id}}</span>
      <p>姓名:{{item.name}}</p>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  components: {},
  props: {
      start:{
          type:Number
      },
      end:{
          type:Number
      }
  },
  data() {
    return {}
  },
  watch: {},
  computed: {
      ...mapState(['news'])
  },
  methods: {
    initData() {
      this.$store.dispatch({
        type: 'getNews',
        start: this.start,
        end: this.end
      })
    }
  },
  created() {},
  mounted() {}
}
</script>
<style scoped>
.item {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
}
</style>