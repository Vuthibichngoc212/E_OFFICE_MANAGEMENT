import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import rootReducer from '@/redux'; // root reducer từ project của bạn
import rootSaga from '@/sagas'; // root saga từ project của bạn
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // default to localStorage for web

// Cấu hình redux-persist
const persistConfig = {
	key: 'root', // key dùng để lưu vào storage
	storage // sử dụng localStorage, bạn có thể thay đổi storage nếu cần
};

// Tạo saga middleware
const sagaMiddleware = createSagaMiddleware();

// Tạo logger middleware để dễ dàng debug
const logger = createLogger({
	collapsed: true,
	colors: {
		title: () => '#139BFE',
		prevState: () => '#1C5FAF',
		action: () => '#149945',
		nextState: () => '#A47104',
		error: () => '#ff0005'
	},
	titleFormatter: (action: { type: string }) => `REDUX: ${action?.type}`
});

// Áp dụng redux-persist vào root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Tạo Redux store với middleware bao gồm saga và logger
const store = configureStore({
	reducer: persistedReducer, // reducer đã được áp dụng persist
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				// Bỏ qua kiểm tra tuần tự hóa cho các action/type cụ thể
				ignoredActions: ['persist/PERSIST', 'your/action/type'],
				// Bỏ qua kiểm tra các đường dẫn không tuần tự hóa trong actions
				ignoredActionPaths: ['meta.arg', 'payload.timestamp', 'payload.data', 'payload.meta'],
				// Bỏ qua các đường dẫn không tuần tự hóa trong state
				ignoredPaths: ['items.dates']
			}
		})
			.concat(sagaMiddleware) // Kết nối Saga middleware
			.concat(logger) // Kết nối logger middleware
});

// Chạy rootSaga
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
