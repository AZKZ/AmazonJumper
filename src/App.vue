<template>
  <div id='app'>
    <Title text='amazon Jumper' />
    <BarcodeReader />
  </div>
</template>

<script>
import Title from './components/Title.vue'
import BarcodeReader from './components/BarcodeReader.vue'

export default {
  name: 'App',
  components: {
    Title,
    BarcodeReader
  }
}
</script>

<style>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
