<template>
  <div class="main">
    <div class="websitelist">
      <div class="website" v-for="(item, index) in boxList" :key="index">
        <div class="title">
          <h2>{{ item.text }}</h2>
        </div>
        <br />
        <div class="content">
          <div class="list" v-for="(items, indexs) in item.list" :key="indexs">
            <a :href="items.href">
              <van-image width="40" height="40" :src="items.src" />
              <p>{{ items.name }}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Image as VanImage } from "vant";
Vue.use(VanImage);
import axios from "axios";
export default {
  data() {
    return {
      value: "",
      boxList: [],
    };
  },
  mounted() {
    //请求数据
    this.getData();
  },
  methods: {
    //获取列表数据
    getData() {
      axios.get("../../static/data.json").then(
        (response) => {
          this.boxList = response.data.boxList;
          console.log(this.boxList);
        },
        (response) => {
          console.log("error");
        }
      );
    },
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast("取消");
    },
  },
};
</script>

<style scoped lang="scss">
.main {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
}
a:link {
  color: rgb(107, 107, 107);
} /* 未被访问的链接 */
a:visited {
  color: rgb(107, 107, 107);
} /* 已被访问的链接 */
a:hover {
  color: rgb(107, 107, 107);
} /* 鼠标指针移动到链接上 */
a:active {
  color: rgb(107, 107, 107);
} /* 正在被点击的链接 */
.website {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
  .title {
    display: flex;
    align-items: flex-start;
    margin-left: 0.5rem;
  }
  .content {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 2%;

    //justify-content: space-between;
    .list {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 16%;

      p {
        line-height: 0;
        font-size: 0.12rem;
        line-height: 0.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>