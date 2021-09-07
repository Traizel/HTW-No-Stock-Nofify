
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios'

function* getitemlist(action) {
  try {
    const response = yield axios.get(`/api/item/items`);
    yield put({
      type: "SET_ITEM",
      payload: response.data,
    });
  } catch (error) {
    console.log("Error with getting the list of items:", error);
  }
}

function* updateItems(action) {
  try {
    yield axios.get(`/api/item/items`);
  } catch (error) {
    console.log("Error with getting the list of items:", error);
  }
}

//this takes all of the Saga functions and dispatches them
function* itemSaga() {
    yield takeLatest('GET_ITEM_LIST', getitemlist);
    yield takeLatest('UPDATE_ITEMS', updateItems);
}

export default itemSaga;