import {
  COMPLETE_ORDER,
  APPROVE_PRODUCT,
  MARK_AS_MISSING,
  EDIT_PRODUCT,
  SET_URGENT_PRODUCT,
} from "../Actions/productActions";
import dummyData from "../../Assets/Data/dummyData.json";
// import { COMPLETE_ORDER } from "../Actions/productActions";

const initialState = {
  products: [...dummyData],
  urgentProductId: null, // Initialize with your dummy data or an empty array
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMPLETE_ORDER:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? { ...product, isCompleted: true }
            : product
        ),
      };

    case APPROVE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? { ...product, isApproved: true }
            : product
        ),
      };

    case MARK_AS_MISSING:
      const { productId, urgency } = action.payload;
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === productId
            ? { ...product, isMissing: true, urgency }
            : product
        ),
      };

    case EDIT_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.productId
            ? { ...product, ...action.payload.newData }
            : product
        ),
      };

      case SET_URGENT_PRODUCT:
        return {
          ...state,
          urgentProductId: action.payload,
        };
  

    default:
      return state;
  }
};


export default productReducer;
