export default {
  data() {
    return {
      notification: false
    }
  },
  methods: {
    showNotification(time) {
      this.notification = true;
      setTimeout(()=> {
        this.notification = false
      }, time);
    }
  }
}
