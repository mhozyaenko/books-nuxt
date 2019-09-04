<template>
  <v-container>
    <v-alert type="success" v-if="notification">
      Your order in the amount of {{$store.state.order.total}} UAH is placed!
    </v-alert>
    <BookCard
      v-for="(elem, i) in books"
      :key="i"
      :book="elem"
      :id="i">
    </BookCard>
  </v-container>
</template>

<script>

import BookCard from "@/components/BookCard";
import notify from '@/mixins/notify.js'
import { mapMutations } from 'vuex'

export default {
  components: {
    BookCard
  },
  asyncData({ app }) {
    return app.$axios.$get(`javascript`)
      .then(res => {
        return {books: res.items};
      });
  },
  mixins: [notify],
  methods: {
    ...mapMutations({
      clearOrder: 'order/clearOrder'
    })
  },
  created() {
    if (this.$store.state.order.success) {
      this.showNotification(15000);
      this.clearOrder();
   }
  }
}
</script>
