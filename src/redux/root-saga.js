import { all, call } from "redux-saga/effects";

import { userSaga } from "./user/user.saga";
import { cartSaga } from "./cart/cart.saga";
import { shopSaga } from "./shop/shop.saga";

export default function* rootSaga() {
  yield all([
    call(userSaga),
    call(cartSaga),
    call(shopSaga)
  ]);
}
