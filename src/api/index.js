import Res from './resources'

export default {
    getMember(payload) {
        return Res.get('/member', payload);
    },
    getMemberInfo(payload) {
        return Res.get('/member/1', payload);
    },
    saveMemberInfo(payload) {
        return Res.post('/member', payload);
    },

    getTask(payload) {
        return Res.get('/task', payload);
    },
    getMyTask(payload) {
        return Res.get('/myTask', payload);
    },
}