import { commonStore } from '@/types/store.types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCommonStore = create<commonStore>()(
	persist(
		(set): commonStore => ({
			isOpenSidebar: false,
			expanded: false,
			setIsOpenSidebar: (isOpenSidebar: boolean) =>
				set(() => ({
					isOpenSidebar
				})),
			clearIsOpenSidebar: () => set({ isOpenSidebar: false }),
			setExpanded: (expanded: any) =>
				set(() => ({
					expanded
				})),
			clearExpanded: () => set({ expanded: false })
		}),
		{
			name: 'common-storage',
			getStorage: () => localStorage
		}
	)
);

export default useCommonStore;
