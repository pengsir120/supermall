<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="header">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="user-info">
      <img :src="commentInfo.user.avatar" alt="" />
      <span>{{ commentInfo.user.uname }}</span>
    </div>
    <div class="user-comment">
      {{ commentInfo.content }}
    </div>
    <div class="user-other">
      <span>{{ showDate }}</span>
      <span>{{ commentInfo.style }}</span>
    </div>
    <div class="user-cimage" v-if="commentInfo.images">
      <img v-for="item in commentInfo.images" :key="item" :src="item" alt="" />
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils";

export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    showDate() {
      const date = new Date(this.commentInfo.created * 1000);
      return formatDate(date, "yyyy-MM-dd");
    },
  },
};
</script>

<style scoped>
.comment-info {
  padding: 5px 12px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
}
.header {
  padding: 20px 5px;
  line-height: 0.3;
  border-bottom: 3px solid #f2f5f8;
}
.header span:first-child {
  float: left;
}
.header span:last-child {
  float: right;
  font-size: 14px;
}
.user-info {
  margin-top: 10px;
}
.user-info img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 25px;
  vertical-align: middle;
}
.user-comment {
  font-size: 14px;
  color: rgba(100, 100, 100, 0.93);
  padding: 8px;
}
.user-other {
  font-size: 12px;
  color: rgba(100, 100, 100, 0.7);
  padding: 3px 8px;
}
.user-other span {
  margin-right: 8px;
}
.user-cimage {
  padding: 8px;
}
.user-cimage img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>