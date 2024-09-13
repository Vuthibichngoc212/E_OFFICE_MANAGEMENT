import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { DocumentTypeList } from '@/types/categories';
// import { CategoryList } from '@/types/categories';

export interface categoryInitialState {
	loading: boolean;
	document_types: DocumentTypeList[] | null;
}
const initialState: categoryInitialState = {
	loading: false,
	document_types: null
};

const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		fetchGetDocumentType(state) {
			state.loading = true;
		},

		//
		fetchGetDocumentTypeSuccess(state, action) {
			state.document_types = action.payload;
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
