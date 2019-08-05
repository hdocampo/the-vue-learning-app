<template>
  <div id="app">
    <header>
      <header-app />
      <color-selector
        :color-list="colorList" />
    </header>
    <input-changes-model
      :initial-text="message" />
    <footer-app></footer-app>
  </div>
</template>

<script>
    // we can name the module as we want!
    import inputChangesModel from './components/input-model/input-model.vue';
    import headerApp from './components/header/header.vue';
    import footerApp from './components/footer/footer.vue';
    import colorSelector from './components/color-selector/color-selector.vue'

    export default {
      data() {
        return {
          message: 'Hello world!',
          colorList: colorsOfTheApp
        };
      },
      components: {
        headerApp,
        footerApp,
        inputChangesModel,
        colorSelector
      }
    };

    const colorsOfTheApp = [
      { 
        name: 'white',
        value: '#ffffff'
      }, 
      { 
        name: 'red',
        value: '#EA4335'
      },
      { 
        name: 'blue',
        value: '#4285F4'
      }
    ]
</script>