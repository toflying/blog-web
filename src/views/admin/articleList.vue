<template>
  <div class="articleList">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="文章标题" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column label="文章内容" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.body.slice(0, 4) + "..." }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleView(scope.$index, scope.row)">查看</el-button>
          <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 查看弹窗 -->
    <el-dialog title="文章详情" :visible.sync="dialogViewVisible" class="viewDetails">
      <div>
        <h2>{{ viewDetails.title }}</h2>
        <p>{{ viewDetails.body }}</p>
      </div>
    </el-dialog>
    <!-- 修改弹窗 -->
    <el-dialog title="编辑" :visible.sync="dialogEditVisible">
      <el-form :model="form" label-width="80px">
        <el-form-item label="文章标题">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="文章类容">
          <el-input type="textarea" v-model="form.body"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogEditVisible = false">取 消</el-button>
        <el-button type="primary" @click="isEdit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [],
      dialogViewVisible: false,
      viewDetails: {},
      dialogEditVisible: false,
      form: {
        title: "",
        body: ""
      },
    };
  },
  created() {
    this.initData();
  },
  methods: {
    //查看
    handleView(index, row) {
      console.log(index, row);
      this.dialogViewVisible = true;
      //内联
      this.viewDetails = row;

      //接口
      // this.$http.get(`api/articles/${row._id}`).then((res) => {
      //   if (res.status == 200) {
      //     console.log("获取详情", res.data);
      //     this.viewDetails = res.data;
      //   }
      // });
    },
    //编辑 弹框
    handleEdit(index, row) {
      console.log(index, row);
      this.dialogEditVisible = true;
      this.form = row;
    },
    //编辑确认
    isEdit() {
      this.$confirm("此操作将改变原有文章类容, 是否继续？", "提示", {
        type: "warning"
      })
        .then(() => {
          let id = this.form._id;
          this.$http
            .put(`api/articles/${id}`, {
              title: this.form.title,
              body: this.form.body
            })
            .then(res => {
              this.dialogEditVisible = false;
              this.$message({
                message: "恭喜你，文章修改成功！",
                type: "success"
              });
              this.initData();
            });
        })
        .catch(() => {});
    },
    //删除
    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm("此操作将永久删除该文章, 是否继续？", "提示", {
        type: "warning"
      })
        .then(() => {
          let id = row._id;
          this.$http.delete(`api/articles/${id}`).then(res => {
            this.$message({
              message: "恭喜你，文章已删除成功！",
              type: "success"
            });
            this.initData();
          });
        })
        .catch(() => {});
    },
    //初始化数据
    initData() {
      this.$http.get("api/articles", { data: 22 }).then(res => {
        if (res.status == 200) {
          this.tableData = res.data;
          this.total = this.tableData.length;
          console.log("创建的数据--", res);
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.viewDetails {
  h2 {
    text-align: center;
    margin-bottom: 10px;
  }
  p {
    text-align: justify;
    text-indent: 40px;
    line-height: 40px;
    letter-spacing: 2px;
  }
}
</style>