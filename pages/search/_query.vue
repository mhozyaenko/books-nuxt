<template>
  <v-container>
    <BookCard
      v-for="(elem, i) in books"
      :key="i"
      :book="elem"
      :id="i">
    </BookCard>
  </v-container>
</template>

<script>
  import BookCard from '@/components/BookCard.vue';
  export default {
    name: "query",
    components: {
      BookCard
    },
    validate({params}) {
      return /.+/.test(params.query)
    },
    asyncData({ app, params }) {
      return app.$axios.$get(params.query)
        .then(res => {
          return {books: res.items};
        });
    },
  }
</script>
