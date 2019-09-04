<template>
  <v-card class="my-2">
    <v-card-text >
      <div class="headline mb-2">{{book.volumeInfo.title}}</div>
      <span
        v-for="author in book.volumeInfo.authors"
        class="subtitle-5">
        {{author}}
      </span>
      <p
        v-if="book.volumeInfo.publishedDate"
        class="subtitle-3">
        <strong>published: </strong>
        {{book.volumeInfo.publishedDate | formatDate}}
      </p>
    </v-card-text>
    <v-list-item-avatar
      tile
      width="150"
      height="auto"
      class="ml-2"
    >
      <v-img :src="book.volumeInfo.imageLinks.smallThumbnail"></v-img>
    </v-list-item-avatar>
    <v-card-actions>
      <v-btn
        @click="handleClick"
        large
        color="primary">
          Order
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    props: ['book', 'id'],
    filters: {
      formatDate(date) {
        const newDate = new Date(date);
        return newDate.toLocaleString('ru', {day: 'numeric', month: 'numeric', year: 'numeric'});
      }
    },
    methods: {
      ...mapActions({
        addToCart: 'cart/addToCart'
      }),
      handleClick() {
        this.$store.state.user.isAuthorized ?
          this.addToCart(this.book) :
          this.$router.push('/login');
      }
    }
  }
</script>


