<template>
    <div>
        <datagrid :tableData="tableData" @page-change="handlePageChange" @row-change="handleRowChange">
            <div slot="toolbar">
                <el-button type="primary" icon="el-icon-edit"></el-button>
                <el-button type="primary" icon="el-icon-share"></el-button>
                <el-button type="primary" icon="el-icon-delete"></el-button>
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
                <el-button type="primary">上传
                    <i class="el-icon-upload el-icon--right"></i>
                </el-button>
            </div>
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column prop="no" label="编号" width="140">
            </el-table-column>
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
        </datagrid>


    </div>
</template>
<script>
    import Datagrid from '../components/Datagrid'
    export default {
        components: {
            Datagrid
        },
        data() {
            return {
                tableData: {
                    list: [],
                    total: 0
                },
                currentRow: null
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.fillData(1);
            });
        },
        methods: {
            handleRowChange(val) {
                this.currentRow = val;
            },
            handlePageChange(val) {
                this.fillData(val);
            },
            fillData(page) {
                var list = [];
                var startIndex = (page - 1) * 20;
                var endIndex = page * 20;
                for (var i = startIndex; i < endIndex; i++) {
                    list.push({
                        no: i + 1,
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    });
                }
                this.tableData = {
                    list: list,
                    total: 100
                };
            }
        }
    };
</script>