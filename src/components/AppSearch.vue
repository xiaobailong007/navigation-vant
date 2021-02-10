<template>
  <div class="search">
    <!-- 搜索logo -->
    <div class="logo" v-model="method_1">
      <van-image width="50%" height="100%" :src="method_1[0].img_src" alt="" />
    </div>
    <van-search v-model="value" placeholder="请输入搜索内容" />
  </div>
</template>

<script>
import Vue from "vue";
import { Search } from "vant";
import { Toast } from "vant";
import { Image as VanImage } from "vant";
Vue.use(Search);
Vue.use(VanImage);

export default {
  data() {
    return {
      value: "",
      method_1: [
        {
          name: "谷歌搜索",
          img_src: "/static/images/google.png",
        },
      ],
    };
  },
  methods: {
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
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}
.search {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly; /* 水平均匀分布 */
  flex-direction: column;
  align-items: center;
}
</style>