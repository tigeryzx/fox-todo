<template>
    <div>
        <datagrid ref="grid" :tableData="tableData" @needPageData="needPageData" @openCreate="openCreate" @openEdit="openEdit" @deletes="deletes"
            @openSearch="openSearch">
            <el-table-column type="selection">
            </el-table-column>
            <el-table-column prop="username" label="账号" width="140">
            </el-table-column>
            <el-table-column prop="realName" label="姓名" width="140">
            </el-table-column>
            <el-table-column prop="color" label="颜色">
                <template slot-scope="scope">
                    <div :style="'width:20px;height:20px;background:'+scope.row.color+';'">
                    </div>
                </template>
            </el-table-column>
        </datagrid>


        <el-dialog title="成员信息" :visible.sync="contentFormVisible">
            <el-form ref="dataForm" :model="form" :rules="formRules">
                <el-form-item label="账号" prop="username" :label-width="formLabelWidth">
                    <el-input v-model="form.username" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="姓名" prop="realName" :label-width="formLabelWidth">
                    <el-input v-model="form.realName" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="颜色" :label-width="formLabelWidth">
                    <el-color-picker v-model="form.color"></el-color-picker>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="contentFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="save">确 定</el-button>
            </div>
        </el-dialog>

        <el-dialog title="查询" :visible.sync="searhFormVisible">
            <el-form :model="searchForm">
                <el-form-item label="账号" :label-width="formLabelWidth">
                    <el-input v-model="searchForm.username" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="姓名" :label-width="formLabelWidth">
                    <el-input v-model="searchForm.realName" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="searhFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="search">查 询</el-button>
            </div>
        </el-dialog>

    </div>
</template>
<script>
    import Datagrid from '../components/Datagrid'
    import api from '../api'
    export default {
        components: {
            Datagrid
        },
        data() {
            return {
                contentFormVisible: false,
                searhFormVisible: false,
                tableData: {
                    list: [],
                    total: 0
                },
                form: {
                },
                searchForm: {
                    username: '',
                    realName: '',
                },
                formRules: {
                    username: [{
                        required: true, message: '用户名不能为空', trigger: 'blur'
                    }],
                    realName: [{
                        required: true, message: '姓名不能为空', trigger: 'blur'
                    }]
                },
                currentRow: null,
                formLabelWidth: '120px'
            }
        },
        methods: {
            openSearch() {
                this.searhFormVisible = true;
            },
            needPageData(size, page) {
                api.getMember({ size, page }).then(res => {
                    this.tableData = res.data;
                });
            },
            openCreate() {
                this.form = Object.assign(this.form, {
                    id: 0,
                    username: '',
                    realName: '',
                    color: '#409EFF'
                });
                this.contentFormVisible = true;
            },
            openEdit({ row }) {
                console.log(row);
                api.getMemberInfo(row.id).then(res => {
                    this.form = res.data;
                    this.contentFormVisible = true;
                });
            },
            deletes({ rows }) {
                console.log(rows);
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            },
            search() {
                this.$message({
                    message: '查询成功!'
                });
                this.searhFormVisible = false;
            },
            save() {
                // TODO:保存操作
                this.$refs.dataForm.validate((valid) => {
                    if (valid) {
                        this.$refs.grid.reload();
                        this.contentFormVisible = false;
                        this.$message({
                            message: '保存成功！',
                            type: 'success'
                        });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    };
</script>