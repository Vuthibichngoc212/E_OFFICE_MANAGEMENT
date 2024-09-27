/* eslint-disable no-unused-vars */
import { enqueueSnackbar } from 'notistack';

interface useDispatchActionProps {
	dispatch: any;
	action: any;
	data?: any;
	nextAction?: any;
	notificationData?: any;
}

export const HandleDispatchAction = ({
	dispatch,
	action,
	nextAction,
	data
}: useDispatchActionProps) => {
	const actionPayload: any = {
		meta: {
			onSuccess: () => {
				enqueueSnackbar('Thành công', { variant: 'success' });

				if (nextAction) {
					nextAction();
				}
			},
			onError: () => {
				enqueueSnackbar('Thất bại', { variant: 'error' });
			}
		}
	};
	if (data) {
		actionPayload.data = data;
	}
	dispatch(action(actionPayload));
};
