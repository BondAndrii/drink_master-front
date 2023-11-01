import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   _id: '',
//   name: '',
//   email: '',
//   avatarURL: '',
//   birthDate: '',
//   token: null,
//   isLoggedIn: false,
// };

const initialState = {
  user: { name: null, email: null, avatarURL: '', birthDate: '' },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: {
      reducer(state, action) {
        state = { ...state, ...action.payload.value, isLoggedIn: true };
        console.log('STATE: ', state);
        return state;
      },
      prepare(value) {
        return {
          payload: { value },
        };
      },
    },
    resetUser: {
      reducer(state) {
        state = initialState;
        return state;
      },
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
