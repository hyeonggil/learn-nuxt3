<template>
  <q-page padding>
    <div class="q-py-xl text-center">
      <div class="text-h4">{{ $route.path }}</div>
      <p class="q-mt-sm text-grey-8">Prefetching 1</p>
    </div>
  </q-page>
</template>

<script lang="ts">
console.log('prefetching-1');
</script>
<script setup lang="ts">
console.log('prefetching-1 setup');
</script>

<style lang="scss" scoped></style>
