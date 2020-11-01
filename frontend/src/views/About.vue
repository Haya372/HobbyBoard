<template>
  <div class="about">
    <h1>This is an gather page</h1>
    <Gathers/>
  </div>
</template>

<script>
import Gathers from '@/components/top/Gathers.vue'
export default {
  name: 'About',
  components: {
    Gathers,
  }
}
</script>