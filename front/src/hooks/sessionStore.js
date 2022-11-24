import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'recoil-persist'
});

export const isAuthenticatedState = atom({
  key: 'isAuthenticatedState',
  default: null,
  effects_UNSTABLE: [persistAtom]
});

export const lineState = atom({
  key: 'lineState',
  default: null
});
