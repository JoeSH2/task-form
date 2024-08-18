import { RootState } from 'src/app/store/store.ts';

export const getUserName = (state: RootState) => state.userForm.userName;
export const getUserCity = (state: RootState) => state.userForm.city;
export const getUserPassword = (state: RootState) => state.userForm.password;
export const getUserTruePassword = (state: RootState) =>
  state.userForm.truePassword;
export const getUserEmail = (state: RootState) => state.userForm.email;
export const getUserPhone = (state: RootState) =>
  state.userForm.numberPhone ?? '';
export const getUserAgree = (state: RootState) => state.userForm.agree ?? false;
export const getUserDateForm = (state: RootState) => state.userForm.dateForm;
export const getUserTimeForm = (state: RootState) => state.userForm.timeForm;
