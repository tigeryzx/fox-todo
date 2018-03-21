<template>
    <el-container>
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">

        </el-aside>

        <el-container>
            <el-main>
                <el-table :data="tableData">
                    <el-table-column prop="date" label="日期" width="140">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="120">
                    </el-table-column>
                    <el-table-column prop="address" label="地址">
                    </el-table-column>
                </el-table>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
    export default {
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: Array(20).fill(item)
            }
        }
    };
</script>
<style>
    .el-header {
        background-color: #545c64;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
</style>