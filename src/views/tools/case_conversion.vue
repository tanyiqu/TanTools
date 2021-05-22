<template>
  <div class="case_conversion">
    <el-input
      type="textarea"
      :rows="4"
      placeholder="请输入待转换的文本"
      v-model="src"
    >
    </el-input>

    <div>
      <el-button type="success" @click="toUpper">转换成全大写</el-button>
      <el-button type="success" @click="toLower">转换成全小写</el-button>
    </div>

    <el-input
      type="textarea"
      :rows="4"
      placeholder="转换结果"
      v-model="res"
      readonly
    >
    </el-input>
  </div>
</template>

<script>
import Conversion from '@/tools/case_conversion.js';
export default {
  data() {
    return {
      src: 'I love Tantools.',
      res: ''
    }
  },

  methods: {
    toUpper() {
      this.res = Conversion.toUpper(this.src);
    },

    toLower() {
      this.res = Conversion.toLower(this.src);
    },
  },

}
</script>

<style lang="less" scoped>
.case_conversion {
}
</style>