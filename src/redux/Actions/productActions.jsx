export const APPROVE_PRODUCT = "APPROVE_PRODUCT";
export const MARK_AS_MISSING = "MARK_AS_MISSING";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const COMPLETE_ORDER = "COMPLETE_ORDER";

export const SET_URGENT_PRODUCT = "SET_URGENT_PRODUCT";

export const setUrgentProduct = (productId) => ({
  type: SET_URGENT_PRODUCT,
  payload: productId,
});

export const approveProduct = (productId) => ({
  type: APPROVE_PRODUCT,
  payload: productId,
});

export const markAsMissing = (productId, urgency) => ({
  type: MARK_AS_MISSING,
  payload: { productId, urgency },
});

export const editProduct = (productId, newData) => ({
  type: EDIT_PRODUCT,
  payload: { productId, newData },
});

export const completeOrder = (orderId) => ({
  type: COMPLETE_ORDER,
  payload: orderId,
});
