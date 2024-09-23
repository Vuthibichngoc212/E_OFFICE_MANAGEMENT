/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ActionPayload } from '@/types/index.types';
// import { DocumentTypeList } from '@/types/categories';
// import { CategoryList } from '@/types/categories';

export interface categoryInitialState {
	loading: boolean;
	// document_types: DocumentTypeList[] | null;
	document_types: any;
}
const initialState: categoryInitialState = {
	loading: false,
	document_types: []
};

const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		fetchGetDocumentType(state) {
			state.loading = true;
		},

		fetchCreateDocumentType(state, _: PayloadAction<ActionPayload<FormData>>) {},

		//
		fetchGetDocumentTypeSuccess(state, action: PayloadAction<any>) {
			state.document_types = action.payload.data;
			state.loading = false;
		},

		//
		fetchGetDocumentTypeError(state) {
			state.document_types = [];
			state.loading = false;
		}
	}
});

// Actions
export const categoriesActions = categoriesSlice.actions;
// Selectors
export const selectCompanies = (state: RootState) => state.categories.document_types;

// Reducer
const categoriesReducer = categoriesSlice.reducer;
export default categoriesReducer;
