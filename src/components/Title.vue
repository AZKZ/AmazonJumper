<template>
  <div id='title'>
    <h1>{{text}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    text: String
  }
}
</script>

<style>
h1 {
  text-align: center;
}
</style>
