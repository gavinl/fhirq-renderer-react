import { ASYNC_START, ASYNC_END } from './actions/asyncActions';

const promiseMiddleware = store => next => action => {
  if (isPromise(action.payload)) {
    store.dispatch({ type: ASYNC_START, subtype: action.type });

    action.payload.then(
      res => {
        store.dispatch({ type: ASYNC_END });
        action.payload = res;
        store.dispatch(action);
      },
      error => {
        store.dispatch({ type: ASYNC_END });
        action.error = true;
        action.payload = error.response;
        store.dispatch(action);
      }
    );
    return;
  }

  next(action);
};

function isPromise(v) {
  return v && typeof v.then === "function";
}

export {
  promiseMiddleware
};
