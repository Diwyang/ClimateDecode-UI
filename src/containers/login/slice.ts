import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface InitialState {
  loading: boolean;
  user: User | null;
  token: string | null;

  error: any;
  success: boolean;
}

const initialState: InitialState = {
  loading: false,
  user: null,
  token: null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.token;
