<template>
  <el-container>
    <el-aside :width="isCollapse ? '64px' : '200px'">
      <el-menu
        default-active="2-1"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isCollapse"
        :collapse-transition="false"
      >
        <el-menu-item index="1" @click="menuJump(0)">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>文章管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1" @click="menuJump(1)">
              <i class="el-icon-setting"></i>
              <span slot="title">文章创建</span>
            </el-menu-item>
            <el-menu-item index="2-2" @click="menuJump(2)">
              <i class="el-icon-setting"></i>
              <span slot="title">文章列表</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <div class="fold" @click="foldclick">
          <i class="el-icon-s-fold"></i>
        </div>
      </el-menu>
    </el-aside>

    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  created() {},
  methods: {
    //菜单跳转
    menuJump(val) {
      if (val == 0) {
        this.$router.push("index");
      } else if (val == 1) {
        this.$router.push("articleCreate");
      } else if (val == 2) {
        this.$router.push("articleList");
      }
    },
    //折叠
    foldclick() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>

<style lang="less" scoped>
.el-container {
  height: 100vh;

  .el-aside {
    height: 100%;
    > ul {
      li {
        text-align: left;
      }
    }
    .el-menu {
      height: 100%;
      position: relative;
      .fold {
        position: absolute;
        border-top: 1px solid gray;
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: 0px;
        left: 0;
      }
    }
  }

  .el-main {
    height: 100%;
  }
}
</style>