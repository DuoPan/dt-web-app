import actionTypes from "../constants/action-types";

const initialState = {
  name: 'Melbourne',
  lat: -20.570043246963264,
  lng: 148.65709030303114,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SELECT_REGION: {
      const { name, lat, lng } = action.payload
      return {
        ...state,
        name,
        lat,
        lng,
      };
    }
    default:
      return state;
  }
}
