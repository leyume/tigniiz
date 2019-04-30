<template>
  <div class="login">
    <div class="message">You are awesome!</div>
    <h3 class="title">Please Login</h3>
    <div>
      <form action method="post" class="form-login" autocomplete="none" @submit.prevent="loginx">
        <div>
          <div class="el el-hide">
            <input type="password">
          </div>
          <div class="el">
            <input type="text" placeholder="Email Address">
          </div>
          <div class="el">
            <input type="password" placeholder="Your Password">
          </div>
          <div class="el el-btn">
            <button>Login</button>
          </div>
        </div>
      </form>
      <div class="mini_msg">
        Forgot your password?
        <router-link to="/">Reset It</router-link>
      </div>
      <div class="mini_msg">
        Don't have an account?
        <router-link to="/">Sign Up</router-link>
      </div>
      <div class="termx">
        By clicking on Log In, you agree to our
        <router-link to="/">terms &amp; conditions</router-link>&nbsp;and
        <router-link to="/">privacy policy</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.login {
  text-align: center;
  .title {
    font-weight: 300;
    margin-bottom: 10px;
  }
  .message {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 30px;
  }
  .mini_msg {
    font-size: 0.8rem;
    margin-bottom: 15px;
  }
  .termx {
    font-size: 0.75rem;
    margin-top: 40px;
    border-top: 1px solid #eee;
    padding: 10px 0 0;
  }
}
</style>


<script>
// @ is an alias to /src
// import HelloWo√rld from "@/components/HelloWorld.vue";

export default {
  name: "login",
  components: {
    // HelloWorld
  },
  methods: {
    loginx() {
      this.$parent.loggedIn = true;
      this.$router.push("/");
    }
  }
};
</script>
