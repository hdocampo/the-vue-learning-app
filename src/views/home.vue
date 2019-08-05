<template>

    <div>
        <color-selector
            :color-list="colorList" />
    
        <input-changes-model
        :initial-text="message" />
    </div>
  
  
</template>

<script>
    // we can name the module as we want!
    import inputChangesModel from '../components/input-model/input-model.vue';
    import colorSelector from '../components/color-selector/color-selector.vue'

    export default {
      data() {
        return {
          message: 'Hello world!',
          colorList: colorsOfTheApp
        };
      },
      components: {
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