<template>
  <div id="table">
    <el-divider content-position="left">表格导出--</el-divider>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    <div style="height:10px"></div>
    <el-button type="primary" @click="exportXlsx">导出xlsx</el-button>
    <el-divider content-position="left">表格导入--</el-divider>
    <xlsx-import :beforeu-upload="beforeUpload" :on-success="handleSuccess"></xlsx-import>
  </div>
</template>
<script>
//引入导出组件
import xlsxImport from "@/components/excelImport";
export default {
  components: {
    xlsxImport
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  computed: {},
  created() {},
  methods: {
    //导出
    exportXlsx() {
      import("@/excel/Export2Excel.js").then(excel => {
        const tHeader = ["日期", "姓名", "地址"]; //表头
        const filterVal = ["date", "name", "address"]; //对应字段
        const list = this.tableData;
        const data = this.formatJson(filterVal, list);
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: "excel-list", //非必填
          autoWidth: true, //非必填
          bookType: "xlsx" //非必填
        });
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v =>
        filterVal.map(j => {
          if (j === "timestamp") {
            return parseTime(v[j]);
          } else {
            return v[j];
          }
        })
      );
    },
    //导入
    beforeUpload(file) {
      console.log(1111);
      console.log(file, "file");
      const isLt1M = file.size / 1024 / 1024 < 1;
      if (isLt1M) {
        return true;
      }
      this.$message({
        message: "Please do not upload files larger than 1m in size.",
        type: "warning"
      });
      return false;
    },
    handleSuccess({ results, header }) {
      console.log("success");
      console.log(results);
      console.log(header);
    }
  }
};
</script>
<style lang="less" scoped>
</style>