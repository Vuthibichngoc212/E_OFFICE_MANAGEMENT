/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { GetLoginListResponse, LoginRequestBody } from '@/pages/auth/types/auth.types';

export interface categoryInitialState {
	loading: boolean;
	isLoggingIn: any;
}

const initialState: categoryInitialState = {
	loading: false,
	isLoggingIn: []
};

const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		fetchLoginRequest(state, _: PayloadAction<LoginRequestBody>) {
			state.loading = true;
		},
		fetchLoginSuccess(state, action: PayloadAction<GetLoginListResponse>) {
			state.isLoggingIn = action.payload.data;
			state.loading = false;
		},
		fetchLoginFailure(state) {
			state.isLoggingIn = [];
			state.loading = false;
		}
	}
});

// Actions
export const loginActions = loginSlice.actions;
// Selectors
export const selectLogin = (state: RootState) => state.auth.isLoggingIn;

// Reducer
const loginReducer = loginSlice.reducer;
export default loginReducer;
