/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ActionPayload } from '@/types/index.types';
import {
	DeleteDepartmentsRequest,
	DeleteDocumentTypeRequest,
	DeleteIssuersRequest,
	DeleteProjectsRequest
} from '@/types/categories';

export interface categoryInitialState {
	loading: boolean;
	document_types: any;
	departments: any;
	issuers: any;
	projects: any;
	pagination: {
		limit: number;
		page: number;
		total_count: number;
		current_page: number;
	};
}
const initialState: categoryInitialState = {
	loading: false,
	document_types: [],
	departments: [],
	issuers: [],
	projects: [],
	pagination: {
		limit: 0,
		page: 0,
		total_count: 0,
		current_page: 0
	}
};

const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		fetchGetProjects(state, action: PayloadAction<{ page: number; pageSize: number }>) {
			state.loading = true;
		},
		fetchGetDocumentType(state, action: PayloadAction<{ page: number; pageSize: number }>) {
			state.loading = true;
		},
		fetchGetIssuers(state) {
			state.loading = true;
		},
		fetchGetDepartments(state) {
			state.loading = true;
		},

		fetchCreateProjects(state, _: PayloadAction<ActionPayload<any>>) {},
		fetchCreateDocumentType(state, _: PayloadAction<ActionPayload<any>>) {},
		fetchCreateIssuers(state, _: PayloadAction<ActionPayload<any>>) {},
		fetchCreateDepartments(state, _: PayloadAction<ActionPayload<any>>) {},

		fetchUpdateProjects(state, _: PayloadAction<ActionPayload<any>>) {
			state.loading = true;
		},
		fetchUpdateDocumentType(state, _: PayloadAction<ActionPayload<any>>) {
			state.loading = true;
		},
		fetchUpdateIssuers(state, _: PayloadAction<ActionPayload<any>>) {
			state.loading = true;
		},
		fetchUpdateDepartments(state, _: PayloadAction<ActionPayload<any>>) {
			state.loading = true;
		},

		fetchDeleteProjects(state, _: PayloadAction<ActionPayload<DeleteProjectsRequest>>) {
			state.loading = true;
		},
		fetchDeleteDocumentType(state, _: PayloadAction<ActionPayload<DeleteDocumentTypeRequest>>) {
			state.loading = true;
		},
		fetchDeleteIssuers(state, _: PayloadAction<ActionPayload<DeleteIssuersRequest>>) {
			state.loading = true;
		},
		fetchDeleteDepartments(state, _: PayloadAction<ActionPayload<DeleteDepartmentsRequest>>) {
			state.loading = true;
		},

		//
		fetchGetProjectsSuccess(state, action: PayloadAction<any>) {
			state.projects = action.payload.data;
			state.pagination.limit = action.payload.limit;
			state.pagination.total_count = action.payload.total_count;
			state.pagination.current_page = action.payload.current_page;
			state.pagination.page = action.payload.page;
			state.loading = false;
		},
		fetchGetDocumentTypeSuccess(state, action: PayloadAction<any>) {
			state.document_types = action.payload.data;
			state.pagination.limit = action.payload.limit;
			state.pagination.total_count = action.payload.total_count;
			state.pagination.current_page = action.payload.current_page;
			state.pagination.page = action.payload.page;
			state.loading = false;
		},
		fetchGetIssuersSuccess(state, action: PayloadAction<any>) {
			state.issuers = action.payload.data;
			state.loading = false;
		},
		fetchGetDepartmentsSuccess(state, action: PayloadAction<any>) {
			state.departments = action.payload.data;
			state.loading = false;
		},

		//
		fetchGetProjectsError(state) {
			state.projects = [];
			state.loading = false;
		},
		fetchGetDocumentTypeError(state) {
			state.document_types = [];
			state.loading = false;
		},
		fetchGetIssuersError(state) {
			state.issuers = [];
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
export const selectPagination = (state: RootState) => state.categories.pagination;
export const selectProjects = (state: RootState) => state.categories.projects;
export const selectIssuers = (state: RootState) => state.categories.issuers;
export const selectDepartmenst = (state: RootState) => state.categories.departments;

// Reducer
const categoriesReducer = categoriesSlice.reducer;
export default categoriesReducer;
