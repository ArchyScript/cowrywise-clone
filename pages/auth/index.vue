<template>
  <div>
    <Login />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Login from './login.vue'

export default Vue.extend({
  name: 'IndexPage',
  layout: 'test',
  components: { Login },
})
</script>
