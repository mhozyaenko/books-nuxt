<template>
  <v-container col-md-12 justify-content-center align-content-center>
    <v-card style="max-width: 500px" >
      <v-toolbar dark color="accent" flat>
        Login
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
          type="password"
          outlined
          color="primary"
        >

        </v-text-field>
        <v-btn
          @click="login"
          large
          derk
          color="primary">
          Login
        </v-btn>


      </form>

        <nuxt-link to="/signup">
          Sign Up
        </nuxt-link>

    </v-card>
    <v-alert light type="error" v-if="notification">
      {{error}}
    </v-alert>
  </v-container>
</template>

<script>
  import {firebaseApp} from '@/plugins/firebase.js'
  import { mapActions } from 'vuex'
  import notify from '@/mixins/notify.js'

  export default {
    name: "login",
    layout: "login",
    mixins: [notify],
    theme: 'light',
    data() {
      return{
        email: "",
        password: "",
        error: ""
      }
    },
    methods: {
      login() {
        firebaseApp.auth()
          .signInWithEmailAndPassword(this.email, this.password)
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
