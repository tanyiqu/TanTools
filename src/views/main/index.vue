<template>
  <div class="index">
    <ToolItem />
    <ToolItem />
    <ToolItem />
  </div>
</template>

<script>
import ToolItem from '@/components/ToolItem.vue';


export default {
  components: {
    ToolItem
  }
}
</script>


<style lang="less" scoped>
.index {
  width: 100%;
  height: 100%;
}
</style>

