<template>
  <div id="app">

    <el-row class="header">
      <el-col :span="22">
        <el-menu :default-active="activeIndex" router mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <el-menu-item index="/member">成员管理</el-menu-item>
          <el-menu-item index="/task">所有任务</el-menu-item>
          <el-menu-item index="/myTask">我的任务</el-menu-item>
          <el-menu-item index="/analyze">任务分析</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="2" style="border-bottom:solid 1px #e6e6e6;">
        <el-dropdown>
          <span style="color:white;">
            黄小明
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <i class="el-icon-edit"></i> 修改密码
            </el-dropdown-item>
            <el-dropdown-item>
              <i class="el-icon-d-arrow-right"></i> 退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>

    <el-row class="main">
      <el-col :span="24" class="content-container">
        <router-view></router-view>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        activeIndex: '1'
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
  }

  html,
  body {
    padding: 0;
    margin: 0px auto;
    height: 100%;
  }

  .header {
    background-color: #545c64;
    color: #333;
    line-height: 60px;
  }

  .main {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    position: absolute;
    top: 60px;
    bottom: 0px;
    overflow: hidden;
    width: 100%;
  }

  .content-container {
    background: #fff;
    flex: 1;
    overflow-y: auto;
    padding: 10px;
    padding-bottom: 1px;

  }
</style>