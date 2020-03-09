<template>
  <div class="list-container">
    <img class="list-img" :src="insure.imgUrl" alt="">
    <h2 class="list-title">{{insure.title}}</h2>
    <p class="list-content">{{insure.content}}</p>
  </div>
</template>

<script>
export default {
  name: 'InsureItem',
  props: {
    insure: Object,
  }
}
</script>

<style lang="css">
  .list-container{
    width:98%;
    margin: 0 auto;
  }
  .list-img {
    width: 100%;
  }
  .list-title{
    font-size: 1rem;
    font-weight: bold;
  }

  .list-content{
    font-size: .7rem;
    color:#707070;
  }
</style>
