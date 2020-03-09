<template>
  <div class="cnt2">
    <img class="banner" :src="imgUrl" alt="">
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: ['imgUrl']
}
</script>

<style lang="css">
  .cnt2{
    width:100%;
  }
  .banner {
    width:100%;
  }

</style>
