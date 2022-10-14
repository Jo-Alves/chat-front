<template>
  <div id="app">
    <cp_header/>
    <cp_content/>
  </div>
</template>

<script>
import cp_header from '@/components/cp_header.vue'
import cp_content from "@/components/cp-content.vue"
export default {
  components: {
    cp_header,
    cp_content
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
