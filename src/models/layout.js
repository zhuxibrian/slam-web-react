
export default {

    namespace: 'layout',

    state: {
        collapsed: false,
    },

    subscriptions: {
        setup({ dispatch, history }) {
        },
    },

    effects: {
        *switch({ payload: collapsed }, { call, put }) {
            yield put({ 
                type: 'switchCollapsed', 
                payload: !collapsed,

        });
        },
    },

    reducers: {
        switchCollapsed(state, {payload: collapsed}) {
            return { ...state, collapsed };
        },
    },

};
