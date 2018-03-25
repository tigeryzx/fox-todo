<template>
    <div>
        <datagrid ref="grid" :tableData="tableData" @needPageData="needPageData" @openCreate="openCreate" @openEdit="openEdit" @deletes="deletes"
            @openSearch="openSearch">
            <template slot="toolbar">
                <el-button type="primary" icon="el-icon-check" @click="getTask">领取</el-button>
            </template>
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="任务描述">
                            <span>{{ props.row.description }}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column prop="project" label="项目" width="100">
            </el-table-column>
            <el-table-column prop="group" label="分组" width="100">
            </el-table-column>
            <el-table-column prop="description" label="任务描述">
                <template slot-scope="scope">

                    <el-popover width="400" trigger="hover" placement="top">
                        <span>{{ scope.row.description }}</span>
                        <div slot="reference" class="name-wrapper">
                            <span style="overflow: hidden;
                                        text-overflow:ellipsis;
                                        white-space: nowrap;">{{ scope.row.description }}</span>
                        </div>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column prop="planTime" label="计划时间" width="100">
                <template slot-scope="scope">
                    <span>{{scope.row.planTime}}分钟</span>
                </template>
            </el-table-column>
            <el-table-column prop="level" label="紧急程度" width="100">
                <template slot-scope="scope">
                    <el-tag v-if="scope.row.level === '低'" type="info" close-transition>{{scope.row.level}}</el-tag>
                    <el-tag v-if="scope.row.level === '中等'" close-transition>{{scope.row.level}}</el-tag>
                    <el-tag v-if="scope.row.level === '紧急'" type="danger" close-transition>{{scope.row.level}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="difficulty" label="难度" width="70">
                <template slot-scope="scope">
                    <el-tag v-if="scope.row.difficulty === '普通'" type="info" close-transition>{{scope.row.difficulty}}</el-tag>
                    <el-tag v-if="scope.row.difficulty === '中等'" close-transition>{{scope.row.difficulty}}</el-tag>
                    <el-tag v-if="scope.row.difficulty === '较难'" type="danger" close-transition>{{scope.row.difficulty}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="getMan" label="领取人" width="80">
            </el-table-column>
            <el-table-column prop="getDate" label="领取时间" width="160">
            </el-table-column>
        </datagrid>


        <el-dialog title="任务信息" :visible.sync="contentFormVisible">
            <el-form ref="dataForm" :model="form" :rules="formRules">
                <el-form-item label="项目" prop="project" :label-width="formLabelWidth">
                    <el-input v-model="form.project" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="分组" prop="group" :label-width="formLabelWidth">
                    <el-input v-model="form.group" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="任务描述" prop="description" :label-width="formLabelWidth">
                    <el-input v-model="form.description" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="计划时间" prop="planTime" :label-width="formLabelWidth">
                    <el-input v-model="form.planTime" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="紧急程度" prop="level" :label-width="formLabelWidth">
                    <el-input v-model="form.level" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="难度" prop="difficulty" :label-width="formLabelWidth">
                    <el-input v-model="form.difficulty" auto-complete="off"></el-input>
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
                api.getTask({ size, page }).then(res => {
                    this.tableData = res.data;
                });
            },
            openCreate() {
                this.form = Object.assign(this.form, {
                    id: 0,
                    project: '',
                    group: '',
                    description: '',
                    planTime: '',
                    level: '',
                    difficulty: ''
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
                this.$message({ type: 'success', message: '删除成功!' });
            },
            getTask() {
                var rows = this.$refs.grid.getRows();
                if (rows.length > 0) {
                    this.$message({ type: 'success', message: '领取成功!' });
                }
            },
            search() {
                this.$message({ message: '查询成功!' });
                this.searhFormVisible = false;
            },
            save() {
                // TODO:保存操作
                this.$refs.dataForm.validate((valid) => {
                    if (valid) {
                        this.$refs.grid.reload();
                        this.contentFormVisible = false;
                        this.$message({ message: '保存成功！', type: 'success' });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    };
</script>