<template>
    <div>
        <el-row>
            <el-col :span="24">
                <slot name="toolbar"></slot>
            </el-col>
        </el-row>
        <el-table :data="tableData.list" stripe highlight-current-row @current-change="handleCurrentChange">
            <slot />
        </el-table>
        <div style="text-align:right;">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentPageChange" :current-page.sync="currentPage"
                :page-size="pageSize" layout="total, prev, pager, next" :total="tableData.total">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            tableData: {
                type: Object,
                default: {
                    list: [],
                    total: 0
                }
            },
            pageSize: {
                type: Number,
                default: 20
            }
        },
        data() {
            return {
                currentRow: null,
                currentPage: 1
            }
        },
        methods: {
            handleCurrentChange(val) {
                this.currentRow = val;
                this.$emit('row-change',val);
            },
            handleSizeChange(val) {
                this.$emit('page-size-change',val);
                console.log(`每页 ${val} 条`);
            },
            handleCurrentPageChange(val) {
                this.$emit('page-change',val);
                console.log(`当前页: ${val}`);
            }
        }
    }
</script>