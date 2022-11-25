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

export const redirect_path = atom({
  key: 'redirect_path',
  default: '/',
  effects_UNSTABLE: [persistAtom]
});
