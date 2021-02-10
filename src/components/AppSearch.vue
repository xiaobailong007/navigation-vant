<template>
  <div class="search">
    <van-image
      width="100"
      height="100"
      src="https://img01.yzcdn.cn/vant/cat.jpeg"
    />
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
.search {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly; /* 水平均匀分布 */
  flex-direction: column;
  align-items: center;
}
</style>