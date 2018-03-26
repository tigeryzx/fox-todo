<template>

    <el-row>
        <el-col :span="24">
            <el-form label-position="right" label-width="80px" style="text-align:center;width:300px;margin:0 auto 0 auto;">
                <el-form-item label="用户名">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="form.password"></el-input>
                </el-form-item>
                <el-button type="primary" @click="login">登录</el-button>
            </el-form>
        </el-col>
    </el-row>

</template>
<script>
    export default {
        data() {
            return {
                form: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            login() {
                if(this.form.username && this.form.password)
                    this.$router.push('/home/member');
            }
        }
    }
</script>