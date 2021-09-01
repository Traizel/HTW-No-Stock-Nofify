
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios'

function* getUser (action){
    try {
            //console.log('we are about to get Students', action.type);

            const response = yield axios.get(`/api/item/userlist`);

            yield put({
                type: 'SET_USER',
                payload: response.data
            });

        } catch (error) {
            console.log('Error with getting the list of users:', error);
        }

}

function* getitemlist(action) {
  try {
    const response = yield axios.get(`/api/item/itemlist`);
    yield put({
      type: "SET_ITEM",
      payload: response.data,
    });
  } catch (error) {
    console.log("Error with getting the list of items:", error);
  }
}

function* orderDetails(action) {
  try {
    const response = yield axios.post("/api/item/orderdetails", action.payload);
    yield put({
      type: "SET_DETAILS",
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: "STUDENT_REGISTRATION_FAILED" });
  }
}

//this takes all of the Saga functions and dispatches them
function* itemSaga() {
    yield takeLatest('GET_USER', getUser);
    yield takeLatest('GET_ITEM_LIST', getitemlist);
    yield takeLatest('ORDER_DETAILS', orderDetails);
}

export default itemSaga;