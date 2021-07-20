<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="2" :offset="22">
        <input
      type="file"
      class="upFile"
      ref="fileExcel"
      accept=".xlsx, .xls"
      @change="uploadFile"
    />
    <el-button type="primary" @click="handleClick">导入</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import XLSX from 'xlsx'
export default {
  data() {
    return {
    }
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    handleClick(){
      this.$refs.fileExcel.click()
    },
    uploadFile(){

    }
  }
}

</script>
<style  scoped>
.upFile {
  display: none;
}
</style>