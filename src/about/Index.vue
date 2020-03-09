<template>
  <div class="cnt">
  about
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import Header from '../common/Header.vue'
// import Footer from '../common/Footer.vue'

export default Vue.extend({
  name: 'List',
  components: {
    // Header,
    // Footer
  },
  created() {
    window.addEventListener('wxload', (query) => console.log('page about wxload', query))
    window.addEventListener('wxshow', () => console.log('page about wxshow'))
    window.addEventListener('wxready', () => console.log('page about wxready'))
    window.addEventListener('wxhide', () => console.log('page about wxhide'))
    window.addEventListener('wxunload', () => console.log('page about wxunload'))
  },
  methods: {
    onClickJump() {
      window.location.href = '/home'
    },
  },
})
</script>

<style lang="less">
.cnt {
  /*margin-top: 20px;*/
}

a, button {
  display: block;
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 20px;
  border: 1px solid #ddd;
}
</style>
