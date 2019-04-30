<template>
  <header class>
    <div>
      <div class="logo">
        <img src="@/assets/img/ziingname.png" alt>
      </div>
      <div v-if="$parent.loggedIn" class="usr">
        <a href>Jephtath S.</a>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
header {
  .logo {
    padding: 30px 0 10px;
    text-align: center;
    float: none;
    img {
      max-height: 40px;
    }
  }
  &.in {
    background-color: #fff;
    color: #fff;
    .logo {
      padding: 10px 0;
      text-align: left;
      float: left;
      img {
        max-height: 40px;
      }
    }
  }
  .usr {
    float: right;
    padding: 20px 0 0;
    font-weight: 500;
  }
}
</style>


<script>
export default {
  name: "Head",
  props: {
    msg: String
  }
};
</script>