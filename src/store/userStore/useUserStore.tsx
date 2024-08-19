import { create } from 'zustand';

interface User {
  name: string;
  email: string;
  mobile: string;
  city: string;
  workStatus: string;
  userLogged: boolean;
}

interface UserState {
  userInfo: User | null;
  setUserInfo: (userInfo: User) => void;
  logout: () => void;
}

const useUserStore = create<UserState>((set) => ({
  userInfo: null,
  setUserInfo: (userInfo: User) => set(() => ({
    userInfo: userInfo,
  })),
  logout: () => set(() => ({
    userInfo: {
      name: '',
      email: '',
      mobile: '',
      city: '',
      workStatus: '',
      userLogged: false,
    },
  })),
}));

export default useUserStore;
