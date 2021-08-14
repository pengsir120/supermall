<template>
  <div class="user-info">
    <div class="login">
      <div class="avatar">
        <img src="~assets/img/profile/avatar.svg" alt="" />
      </div>
      <div class="login-info">
        <div>登录/注册</div>
        <div>
          <img src="~assets/img/profile/phone.svg" alt="" />
          <span>暂无绑定手机号</span>
        </div>
      </div>
      <div class="arrow">
        <img src="~assets/img/common/arrow-left.svg" alt="" />
      </div>
    </div>
    <div class="payload">
      <div class="rest">
        <span><i class="num">0.00</i>元</span>
        <span>我的余额</span>
      </div>
      <div class="discount">
        <span><i class="num">0</i>个</span>
        <span>我的优惠</span>
      </div>
      <div class="integral">
        <span><i class="num">0</i>分</span>
        <span>我的积分</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
};
</script>

<style scoped>
.login {
  display: flex;
  background-color: var(--color-tint);
  padding: 10px;
  height: 100px;
}
.avatar,
.login-info,
.arrow {
  margin: auto 0;
}
.avatar {
  width: 70px;
  margin-right: 10px;
}
.avatar img {
  width: 100%;
}
.login-info {
  flex: 1;
  color: #fff;
}
.login-info div:first-child {
  padding: 10px 0;
  font-size: 18px;
}
.login-info div:nth-child(2) {
  font-size: 14px;
  margin-bottom: 10px;
}
.login-info div:nth-child(2) img {
  width: 16px;
  height: 16px;
  vertical-align: bottom;
  margin-left: -4px;
}
.arrow {
  width: 20px;
}
.arrow img {
  width: 100%;
}
.payload {
  display: flex;
  height: 90px;
  border-bottom: 12px solid #f2f2f2;
  font-size: 14px;
}
.rest,
.discount,
.integral {
  width: 33.33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.discount {
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
}
.num {
  color: orangered;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
}
</style>