<template>
  <div id="app">
    <Head :class="loggedIn ? 'in' : ''"/>
    <Navi v-if="loggedIn"/>
    <section :class="loggedIn ? 'in' : ''">
      <router-view/>
    </section>
    <Foot v-if="loggedIn"/>
  </div>
</template>

<script>
import Head from "@/components/Head.vue";
import Navi from "@/components/Navi.vue";
import Foot from "@/components/Foot.vue";

export default {
  name: "app",
  components: {
    Head,
    Navi,
    Foot
  },
  data() {
    return {
      loggedIn: false,
      msg: false
    };
  },

  created() {
    // console.log(this.loggedIn);
    if (!this.loggedIn) {
      this.$router.push("/login");
    }
  },

  methods: {
    sMeth() {
      // this.msg = true;
    }
  }
  // watch: {
  //   $route: {
  //     handler: function(to, from) {
  //       // console.log(99);
  //     },
  //     immediate: true
  //   }
  // }
};
</script>