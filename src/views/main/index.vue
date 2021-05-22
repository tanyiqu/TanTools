<template>
  <div class="index">
    <!-- <ToolItem />
    <ToolItem />
    <ToolItem /> -->

    <case-conversion />

  </div>
</template>

<script>
import ToolItem from '@/components/ToolItem.vue';
import CaseConversion from '../tools/case_conversion.vue';


export default {
  components: {
    ToolItem,
    CaseConversion
  }
}
</script>


<style lang="less" scoped>
.index {
  width: 100%;
  height: 100%;
}
</style>

