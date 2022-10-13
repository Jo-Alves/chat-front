<template>
  <div id="app">
    <tp_header/>
    <tp_content/>
  </div>
</template>

<script>
import tp_header from '@/components/templates/tp_header.vue'
import tp_content from "@/components/templates/tp-content.vue"
export default {
  components: {
    tp_header,
    tp_content
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
