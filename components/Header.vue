<template>
  <v-app-bar
    align-center
    fixed
    app
    dark
    color="primary"
  >
    <v-form width="200px">
      <v-text-field outlined
                    height="40"
                    rows="1"
                    color="white"
                    dark
                    single-line
                    hide-details
                    type="search"
                    append-icon="search"
                    @click:append="search"
                    v-model="searchQuery"
                    label="Search">
      </v-text-field>
    </v-form>
    <div class="flex-grow-1"></div>
    <v-btn light
           style="margin-right: 25px"
    @click="loginBtn">
      {{$store.state.user.isAuthorized ? 'LogOut' : 'LogIn'}}
    </v-btn>
    <nuxt-link to="/cart" >

      <v-badge
        overlap
        color="warning"
      >
        <template v-slot:badge>
              <span dark>
                {{ $store.state.cart.items.length }}
              </span>
        </template>
        <v-icon x-large color="white"
                class="material-icons" >
                shopping_cart
        </v-icon>
      </v-badge>
    </nuxt-link>
    <span
      v-if="$store.state.cart.items.length > 0"
      class="success"
      dark>
      {{$store.state.cart.total.toFixed(2)}} UAH
    </span>
  </v-app-bar>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    name: "Header",
    data() {
      return {
        searchQuery: '',
      }
    },
    methods: {
      search() {
        this.$router.push(`/search/${this.searchQuery}`);
      },
      loginBtn() {
        this.$store.state.user.isAuthorized ? this.logout() : this.login()
      },
      login() {
        this.$router.push('/login')
      },
      ...mapActions({
        logout: 'user/logout'
      })
    }
  }
</script>

