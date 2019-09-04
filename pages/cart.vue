<template>
  <v-container col-md-12>
    <v-card v-for="book in $store.state.cart.items" key="book.id" class="my-2">
      <v-card-text >
        <div class="headline mb-2">{{book.volumeInfo.title}}</div>
        <span
          v-for="author in book.authors"
          class="subtitle-5">
        {{author}}
      </span>
        <p class="subtitle-3">
          {{book.volumeInfo.description}}
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
     <h2 class="success" v-if="book.saleInfo.saleability === 'FOR_SALE' ">
       Price: {{book.saleInfo.listPrice.amount || book.saleInfo.retailPrice.amount }}
     </h2>
      <h2 class="warning" v-if="book.saleInfo.saleability !== 'FOR_SALE' ">
        This book is not for sale
      </h2>
    </v-card>
    <v-alert type="info">
      Total sum: {{$store.state.cart.total.toFixed(2)}} UAH
    </v-alert>
    <nuxt-link to="/checkout">
      <v-btn
        large
        color="primary">
        Confirm Order
      </v-btn>
    </nuxt-link>
  </v-container>
</template>

<script>
  export default {

  }
</script>
