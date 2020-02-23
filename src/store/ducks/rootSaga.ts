import { all, takeLatest } from 'redux-saga/effects';
import { RepositoriesTypes } from './respositories/types';
import { load } from './respositories/sagas';

export default function* rootSaga() {
  return yield all([takeLatest(RepositoriesTypes.LOAD_REQUEST, load)]);
}
