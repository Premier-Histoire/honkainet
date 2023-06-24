<template>
  <div class="header">
    <div class="header__inner">
      <div class="header__navgroup">
        <div class="header__navitem">
          <a href="https://twitter.com/Premier_XIV" target="_blank">Twitter</a>
        </div>
      </div>
    </div>
  </div>
  <div class="content">
    <div class="fontblack title TextTyping">StarConnection</div>
    <div class="wrapper">
      <div class="flex justify-center mt-4">
        <form action="#" class="search-form-001">
          <label>
            <input type="text" v-model="link" placeholder="UID" />
          </label>
          <router-link
            :to="formattedLink"
            class="btn btn--orange"
          ></router-link>
        </form>
      </div>
      <p class="flex justify-center mt-4 fontblack">Powered by mihomo.me</p>
    </div>
  </div>
  <footer class="footer">
    <div class="footer-container">
      <p class="text-center fontblack">Copyright © 2023 - Created by Premier</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      link: "", // Holds the entered link
    };
  },
  computed: {
    formattedLink() {
      return "/u/" + this.link;
    },
  },
  methods: {
    navigateToLink() {
      this.$router.push(this.formattedLink);
    },
  },
};
</script>
<style></style>
