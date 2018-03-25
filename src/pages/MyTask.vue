<template>
    <div>
        <datagrid ref="grid" :tableData="tableData" :isReadOnly="true" @needPageData="needPageData" @openSearch="openSearch">
            <template slot="toolbar">
                <el-button type="primary" icon="el-icon-close">放弃</el-button>
                <el-button type="primary" icon="el-icon-time">开始</el-button>
                <el-button type="primary" icon="el-icon-check">完成</el-button>
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
            <el-table-column prop="planTime" label="计划时间" width="100">
                <template slot-scope="scope">
                    <span>{{scope.row.planTime}}分钟</span>
                </template>
            </el-table-column>
            <el-table-column prop="realTime" label="实际时间" width="100">
                <template slot-scope="scope">
                    <span>{{scope.row.planTime}}分钟</span>
                </template>
            </el-table-column>
            <el-table-column prop="state" label="状态" width="100">
            </el-table-column>
        </datagrid>

        <el-dialog title="查询" :visible.sync="searhFormVisible">
            <el-form :model="searchForm">
                <el-form-item label="项目" prop="project" :label-width="formLabelWidth">
                    <el-input v-model="searchForm.project" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="分组" prop="group" :label-width="formLabelWidth">
                    <el-input v-model="searchForm.group" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="紧急程度" prop="level" :label-width="formLabelWidth">
                    <el-input v-model="searchForm.level" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="难度" prop="difficulty" :label-width="formLabelWidth">
                    <el-input v-model="searchForm.difficulty" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="状态" prop="state" :label-width="formLabelWidth">
                    <el-input v-model="searchForm.state" auto-complete="off"></el-input>
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
                searhFormVisible: false,
                tableData: {
                    list: [],
                    total: 0
                },
                searchForm: {
                    project: '',
                    group: '',
                    level: '',
                    difficulty: '',
                    state: ''
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
                api.getMyTask({ size, page }).then(res => {
                    this.tableData = res.data;
                });
            },
            search() {
                this.$message({ message: '查询成功!' });
                this.searhFormVisible = false;
            }
        }
    };
</script>