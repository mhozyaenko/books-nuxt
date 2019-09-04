<template>
  <v-container col-md-12 justify-content-center align-content-center>
    <v-card style="max-width: 500px" >
      <v-toolbar dark color="accent" flat>
        Sign Up
      </v-toolbar>
      <form class="px-5 py-5 my-5" style="padding: 15px">
        <v-text-field
          label="email"
          v-model="email"
          outlined
          color="accent"
        >
        </v-text-field>
        <v-text-field
          label="password"
          v-model="password"
          outlined
          color="primary"
        >
        </v-text-field>
        <v-btn
          @click="signup"
          large
          light
          color="primary">
          Sign Up
        </v-btn>
      </form>
    </v-card>
    <v-alert class="alert" type="error" v-if="notification">
      {{error}}
    </v-alert>
  </v-container>
</template>

<script>
  import {firebaseApp} from '@/plugins/firebase.js'
  import {mapActions} from 'vuex'
  import notify from '@/mixins/notify.js'

  export default {
    name: "signup",
    layout: "login",
    mixins: [notify],
    data() {
      return {
        email: "",
        password: "",
        error: ""
      }
    },
    methods: {
      signup() {
        firebaseApp.auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(response => {
            this.setUser(response);
            this.$router.replace('/')
          })
          .catch(error => {
            this.error = error.message;
            this.showNotification(1000);
          });
      },
      ...mapActions({
        setUser: 'user/login'
      })
    }
  }
</script>
