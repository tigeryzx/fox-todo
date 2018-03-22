<template>
    <div>
        <el-row>
            <el-col :span="24">
                <el-button type="primary" icon="el-icon-edit"></el-button>
                <el-button type="primary" icon="el-icon-share"></el-button>
                <el-button type="primary" icon="el-icon-delete"></el-button>
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
                <el-button type="primary">上传
                    <i class="el-icon-upload el-icon--right"></i>
                </el-button>
            </el-col>
        </el-row>
        <el-table :data="tableData" stripe highlight-current-row @current-change="handleCurrentChange">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
        </el-table>
        <div style="text-align:right;">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="100"
                layout="total, prev, pager, next" :total="1000">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    export default {
        data() {

            var tableSource = [];
            for (var i = 0; i < 15; i++) {
                tableSource.push({
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                });
            }

            return {
                tableData: tableSource,
                currentRow: null,
                currentPage1: 5
            }
        },
        methods: {
            handleCurrentChange(val) {
                this.currentRow = val;
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }
    };
</script>