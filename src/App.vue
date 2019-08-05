<template>
  <div id="app">
    <header>
      <header-app />
    </header>
    <router-view></router-view>
    <footer-app></footer-app>
  </div>
</template>

<script>
    // we can name the module as we want!
    import headerApp from './components/header/header.vue';
    import footerApp from './components/footer/footer.vue';

    export default {
      data() {
        return {
        };
      },
      components: {
        headerApp,
        footerApp
      }
    };
</script>