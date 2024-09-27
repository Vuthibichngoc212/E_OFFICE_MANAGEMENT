/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ActionPayload } from '@/types/index.types';
import { DeleteDepartmentsRequest, DeleteDocumentTypeRequest } from '@/types/categories';

export interface categoryInitialState {
	loading: boolean;
	document_types: any;
	departments: any;
}
const initialState: categoryInitialState = {
	loading: false,
	document_types: [],
	departments: []
};

const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		fetchGetDocumentType(state) {
			state.loading = true;
		},
		fetchGetDepartments(state) {
			state.loading = true;
		},

		fetchCreateDocumentType(state, _: PayloadAction<ActionPayload<any>>) {},
		fetchCreateDepartments(state, _: PayloadAction<ActionPayload<any>>) {},

		fetchUpdateDocumentType(state, _: PayloadAction<ActionPayload<any>>) {
			state.loading = true;
		},
		fetchUpdateDepartments(state, _: PayloadAction<ActionPayload<any>>) {
			state.loading = true;
		},

		fetchDeleteDocumentType(state, _: PayloadAction<ActionPayload<DeleteDocumentTypeRequest>>) {
			state.loading = true;
		},
		fetchDeleteDepartments(state, _: PayloadAction<ActionPayload<DeleteDepartmentsRequest>>) {
			state.loading = true;
		},

		//
		fetchGetDocumentTypeSuccess(state, action: PayloadAction<any>) {
			state.document_types = action.payload.data;
			state.loading = false;
		},
		fetchGetDepartmentsSuccess(state, action: PayloadAction<any>) {
			state.departments = action.payload.data;
			state.loading = false;
		},

		//
		fetchGetDocumentTypeError(state) {
			state.document_types = [];
			state.loading = false;
		},
		fetchGetDepartmentsError(state) {
			state.departments = [];
			state.loading = false;
		}
	}
});

// Actions
export const categoriesActions = categoriesSlice.actions;
// Selectors
export const selectDocumentType = (state: RootState) => state.categories.document_types;
export const selectCategoríesloading = (state: RootState) => state.categories.loading;
export const selectDepartmenst = (state: RootState) => state.categories.departments;

// Reducer
const categoriesReducer = categoriesSlice.reducer;
export default categoriesReducer;
