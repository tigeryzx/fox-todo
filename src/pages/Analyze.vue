<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="12">
                <el-card>
                    <div slot="header">
                        <span>成员完成任务统计</span>
                    </div>
                    <div>
                        <el-table :data="tableData" style="width: 100%">
                            <el-table-column prop="date" label="日期">
                            </el-table-column>
                            <el-table-column prop="name" label="姓名">
                            </el-table-column>
                            <el-table-column prop="address" label="地址">
                            </el-table-column>
                        </el-table>
                    </div>
                </el-card>

            </el-col>
            <el-col :span="12">
                <el-card>
                    <div slot="header">
                        <span>成员完成任务统计</span>
                    </div>
                    <div>
                        <el-table :data="tableData" style="width: 100%">
                            <el-table-column prop="date" label="日期">
                            </el-table-column>
                            <el-table-column prop="name" label="姓名">
                            </el-table-column>
                            <el-table-column prop="address" label="地址">
                            </el-table-column>
                        </el-table>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="12">
                <el-card>
                    <div slot="header">
                        <span>成员完成任务统计</span>
                    </div>
                    <div>
                        <el-table :data="tableData" style="width: 100%">
                            <el-table-column prop="date" label="日期">
                            </el-table-column>
                            <el-table-column prop="name" label="姓名">
                            </el-table-column>
                            <el-table-column prop="address" label="地址">
                            </el-table-column>
                        </el-table>
                    </div>
                </el-card>

            </el-col>
            <el-col :span="12">
                <el-card>
                    <div slot="header">
                        <span>成员完成任务统计</span>
                    </div>
                    <div>
                        <el-table :data="tableData" style="width: 100%">
                            <el-table-column prop="date" label="日期">
                            </el-table-column>
                            <el-table-column prop="name" label="姓名">
                            </el-table-column>
                            <el-table-column prop="address" label="地址">
                            </el-table-column>
                        </el-table>
                    </div>
                </el-card>
            </el-col>
        </el-row>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: ' 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: ' 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: ' 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: ' 1516 弄'
                }]
            }
        }
    }
</script>
<style>
    .el-row {
        margin-bottom: 20px;
    }
</style>