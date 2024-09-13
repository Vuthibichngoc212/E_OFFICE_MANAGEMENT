/* eslint-disable no-unused-vars */
import { AxiosRequestConfig, AxiosInstance } from 'axios';

export interface AxiosConfigRequest<T = undefined, Q = undefined> {
	url: string;
	method: string;
	headers: any;
	data?: T;
	params?: Q;
}

interface ApiResponseErrors {
	errorCode: string;
	field?: string;
	extraData?: any;
}

interface ApiResponseType {
	success: boolean;
	message?: string;
	errors?: ApiResponseErrors;
}

interface AnyResponseData {
	[key: string]: any;
}

interface ExtendedAxiosInstance {
	get<T = AnyResponseData>(
		url: string,
		config?: AxiosRequestConfig
	): Promise<ApiResponseErrors & T>;
	delete<T = AnyResponseData>(
		url: string,
		config?: AxiosRequestConfig
	): Promise<ApiResponseType & T>;
	post<T = AnyResponseData>(
		url: string,
		data?: any,
		config?: AxiosRequestConfig
	): Promise<ApiResponseType & T>;
	put<T = AnyResponseData>(
		url: string,
		data?: any,
		config?: AxiosRequestConfig
	): Promise<ApiResponseType & T>;
}
interface ExtendedAxiosInstanceBase extends Omit<AxiosInstance, keyof ExtendedAxiosInstance> {}
export interface AxiosInstanceExtended extends ExtendedAxiosInstanceBase, ExtendedAxiosInstance {}
