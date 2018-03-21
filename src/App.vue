<template>
  <div id="app">
    <el-container>

      <el-header>
        <el-row>
          <el-col :span="22">
            <el-menu :default-active="activeIndex" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
              @select="handleSelect">
              <el-menu-item index="1">成员管理</el-menu-item>
              <el-menu-item index="2">所有任务</el-menu-item>
              <el-menu-item index="3">我的任务</el-menu-item>
              <el-menu-item index="4">任务分析</el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="2">
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


      </el-header>

      <router-view/>

    </el-container>

  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        activeIndex: '1'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  #app {
    color: #2c3e50;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    height: 100%;
  }
</style>