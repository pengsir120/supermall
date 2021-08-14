<template>
  <div class="toast" v-show="isShow">{{ message }}</div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "",
      isShow: false,
      timer: null,
    };
  },
  methods: {
    show(message, duration = 1500) {
      if (this.timer) clearTimeout(this.timer);

      this.message = message;
      this.isShow = true;

      this.timer = setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, duration);
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 10px;
  background-color: rgba(100, 100, 100, 0.75);
  color: #fff;
  border-radius: 5px;
  z-index: 999;
}
</style>