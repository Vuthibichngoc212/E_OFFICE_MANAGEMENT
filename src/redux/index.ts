import { combineReducers } from 'redux';
import auth from '@/redux/slices/auth';
import ui from '@/redux/slices/ui';
import categories from '@/redux/slices/categories';

const rootReducer = combineReducers({
	auth,
	ui,
	categories
});

export default rootReducer;
