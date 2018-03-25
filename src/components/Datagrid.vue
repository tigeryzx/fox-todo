<template>
    <div>
        <el-row>
            <el-col :span="24">
                <el-button type="primary" v-if="allowAdd && !isReadOnly" icon="el-icon-plus" @click="openCreate"></el-button>
                <el-button type="primary" v-if="allowEdit && !isReadOnly" icon="el-icon-edit" @click="openEdit"></el-button>
                <el-button type="primary" v-if="allowEdit && !isReadOnly" icon="el-icon-delete" @click="deletes"></el-button>
                <el-button type="primary" v-if="allowSearch" icon="el-icon-search" @click="openSearch"></el-button>
                <slot name="toolbar"></slot>
            </el-col>
        </el-row>
        <el-table :data="tableData.list" stripe highlight-current-row @selection-change="handleSelectionChange" @current-change="handleCurrentChange">
            <slot/>
        </el-table>
        <div style="text-align:right;">
            <i class="el-icon-refresh pageIcon" @click="reload"></i>
            <el-pagination style="display:inline-block;" background @size-change="handleSizeChange" @current-change="handleCurrentPageChange"
                :current-page.sync="currentPage" :page-size="pageSize" layout="sizes, total, prev, pager, next" :total="tableData.total">
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
                default: 10
            },
            allowAdd: {
                type: Boolean,
                default: true
            },
            allowEdit: {
                type: Boolean,
                default: true
            },
            allowDelete: {
                type: Boolean,
                default: true
            },
            allowSearch: {
                type: Boolean,
                default: true
            },
            isReadOnly: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                currentRow: null,
                currentPage: 1,
                checkedRows: []
            }
        },
        mounted() {
            this.handleCurrentPageChange(1);
        },
        methods: {
            openSearch() {
                this.$emit('openSearch');
            },
            openCreate() {
                this.$emit('openCreate', { row: this.currentRow });
            },
            openEdit() {
                if (this.currentRow == null) {
                    this.$message('请点[选中]要编辑的行!');
                    return;
                }
                this.$emit('openEdit', { row: this.currentRow });
            },
            deletes() {
                var rows = this.getRows();
                if (rows.length <= 0)
                    return;
                this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
                    type: 'warning'
                }).then(() => {
                    this.$emit('deletes', { rows });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            handleCurrentChange(val) {
                this.currentRow = val;
                this.$emit('rowchange', val);
            },
            handleSizeChange(val) {
                this.$emit('needPageData', this.pageSize, this.currentPage);
            },
            handleCurrentPageChange(val) {
                this.$emit('needPageData', this.pageSize, this.currentPage);
            },
            reload() {
                this.handleCurrentPageChange(this.pageSize);
            },
            handleSelectionChange(val) {
                this.checkedRows = val;
            },
            getRows() {
                var rows = [];
                if (this.checkedRows.length > 0)
                    rows = this.checkedRows;
                else if (this.currentRow != null)
                    rows = [this.currentRow];

                if (rows.length <= 0) {
                    this.$message('请点[选中]或[勾选]要删除的行!');
                }
                return rows;
            }
        }
    }
</script>
<style scoped>
    .pageIcon {
        display: inline-block;
        font-size: 14px;
        height: 30px;
        line-height: 30px;
        vertical-align: top;
        box-sizing: border-box;
        cursor: pointer;
        font-weight: 700;
    }
</style>