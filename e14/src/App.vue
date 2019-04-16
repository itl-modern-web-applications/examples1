<template>
  <div>
    <app-toolbar />
    <app-drawer />
    <app-content />
  </div>
</template>

<script>
import AppToolbar from '@/components/App/AppToolbar'
import AppDrawer from '@/components/App/AppDrawer'
import AppContent from '@/components/App/AppContent'

export default {
  name: 'app',
  components: {
    AppToolbar,
    AppDrawer,
    AppContent
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
