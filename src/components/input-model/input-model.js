export default {
  data() {
    return {
      message: this.initialText,
      country: 'uruguay'
    }
  },
  props: {
    'initialText': String
  },
  methods: {
      showMeTheMoney: () => {
          alert('pepe');
      }
  },
  computed: {
      greetingMessage() {
          return `${this.message} from ${this.country}`
      }
  }
};