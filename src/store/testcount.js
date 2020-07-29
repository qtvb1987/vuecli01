export default {
  namespaced: true,
  state: {
    count: 1
  },
  mutations: {
    add(state, num = 1) {
      state.count += num;
    }
  },
  getters: {
    score(state) {
      return 'score:' + state.count;
    }
  },
  actions: {
    //提交mutations方法
    //复杂业务逻辑，类似于controller
    //比如ajax请求
    asyncAdd({
      commit
    }) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit('add');
          resolve({
            ok: 1
          });
        }, 1000)
      })
    }
  },
}