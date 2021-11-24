const CountModule = {
    state: () => ({
        count: 0
    }),
    mutations: { 
        incCount(state) {
            state.count++;
        },
        decCount(state) {
            state.count--;
        }
    },
    getters: {}
}

export default CountModule;
  