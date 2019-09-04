<template>
    <v-container>
      <v-card style="max-width: 500px" >
        <v-toolbar dark color="accent" flat>
          Send Order
        </v-toolbar>
        <form class="px-5 py-5 my-5" style="padding: 15px">

          <v-text-field
            :rules="nameRules"
            label="name"
            v-model="name"
            outlined
            color="accent"
          >
          </v-text-field>
          <v-text-field
            label="email"
            v-model="email"
            :rules="emailRules"
            outlined
            color="accent"
          >
          </v-text-field>
            <v-text-field
              label="phone"
              v-model="phone"
              :rules="phoneRules"
              outlined
              color="accent"
            >
            </v-text-field>
          <v-btn
            @click="sendOrder"
            large
            derk
            color="primary">
            Send order
          </v-btn>
        </form>
      </v-card>
    </v-container>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    name: "checkout",
    data() {
      return {
        name: "",
        email: this.$store.state.user.user.email,
        phone: "",
        nameRules: [
          v => !!v || 'Name is required',
          v => v.length >= 2 || 'Name must contain at least 2 chars'
        ],
        emailRules: [
          v => !!v || 'Email is required',
          v => /([\w-_\.]+)(@\w+)(\.\w{2,7})/i.test(v) || 'Incorrect email'
        ],
        phoneRules: [
          v => !!v || 'Phone is required',
          v => /\+380[0-9]{9}$/.test(v) || 'Required phone format: +380XXXXXXXXX'
        ]
      }
    },
    methods: {
      sendOrder() {
        this.setTotalOrder(this.$store.state.cart.total);
        this.clearCart();
        this.$router.replace('/');
      },
      ...mapMutations({
        setTotalOrder: 'order/setTotalOrder',
        clearCart: 'cart/clearCart'
      })
    }
  }
</script>
