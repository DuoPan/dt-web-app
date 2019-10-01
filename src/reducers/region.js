import actionTypes from "../constants/action-types";

const initialState = {
  name: 'Melbourne',
  lat: -37.817252,
  lng: 144.947494,
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
