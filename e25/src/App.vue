<template>
  <div id="app">
    <h1>Hard Coded Text</h1>
    <h1>{{variable}}</h1>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      variable: 'Variable Text'
    }
  }
}
</script>

<style>

</style>
