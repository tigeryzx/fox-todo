<template>
    <div>
       

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
                tableData: {
                    list: [],
                    total: 0
                },
                currentRow: null
            }
        },
        methods: {
            handleRowChange(val) {
                this.currentRow = val;
            },
            handlePageChange(size, page) {
                console.log('外' + size + "|" + page);
                api.getMember({size, page}).then(res => {
                    var data = res.data;
                    this.tableData = data;
                });
            }
        }
    };
</script>