import * as commandMapperService from '../services/commandMapper';

export default {

    namespace: 'commandmapper',

    state: {
        list: [],
        total: null,
        page: null,
    },

    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                if (pathname === '/commandmapper') {
                    dispatch({ type: 'fetch', payload: query });
                }
            });
        },
    },

    effects: {
        *fetch({ payload: { page = 0 } }, { call, put }) {
            const { data: { content, totalPages } } = yield call(commandMapperService.fetch, { page });
            yield put({
                type: 'save',
                payload: {
                    list: content,
                    total: totalPages,
                    page: parseInt(page, 10),
                },
            });
        },
        *remove({ payload: id }, { call, put, select }) {
            yield call(commandMapperService.remove, id);
            const page = yield select(state => state.commandmapper.page);
            yield put({ type: 'fetch', payload: { page } });
        },
        *put({ payload: values }, { call, put, select }) {
            yield call(commandMapperService.put, values);
            const page = yield select(state => state.commandmapper.page);
            yield put({ type: 'fetch', payload: { page } });
        },
        *create({ payload: values }, { call, put, select }) {
            yield call(commandMapperService.create, values);
            const page = yield select(state => state.commandmapper.page);
            yield put({ type: 'fetch', payload: { page } });
        },
        *createSubmessage({ payload: { id, values } }, { call, put, select }) {
            yield call(commandMapperService.createSubmessage, id, values);
            const page = yield select(state => state.commandmapper.page);
            yield put({ type: 'fetch', payload: { page } });
        },
        *removeSubmessage({payload: id}, {call, put, select}) {
            yield call(commandMapperService.removeSubmessage, id);
            const page = yield select(state => state.commandmapper.page);
            yield put({ type: 'fetch', payload: { page } });
        },
        *createPoint({payload:{id, values}}, {call, put, select}) {
            yield call(commandMapperService.createPoint, id, values);
            const page = yield select(state => state.commandmapper.page);
            yield put({ type: 'fetch', payload: { page } });
        },
        *putSubmessage({payload: values}, {call, put, select}) {
            yield call(commandMapperService.putSubmessage, values);
            const page = yield select(state => state.commandmapper.page);
            yield put({ type: 'fetch', payload: { page } });
        },
        *removePoint({payload: id}, {call, put, select}) {
            yield call(commandMapperService.removePoint, id);
            const page = yield select(state => state.commandmapper.page);
            yield put({ type: 'fetch', payload: { page } });
        },
        *putPoint({payload: values}, {call, put, select}) {
            yield call(commandMapperService.putPoint, values);
            const page = yield select(state => state.commandmapper.page);
            yield put({ type: 'fetch', payload: { page } });
        },
    },

    reducers: {
        save(state, { payload: { list, total, page } }) {
            return { ...state, list, total, page };
        },
    },

};