import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { UserFormType } from '../types/userFormType.ts';
import { Nullable } from 'primereact/ts-helpers';

type InitForm = Omit<UserFormType, 'password' | 'truePassword'>;

interface userFormState extends UserFormType {
  truePassword: string;
  initUserForm?: InitForm;
}

const initialState: userFormState = {
  userName: '',
  city: '',
  password: '',
  truePassword: '',
  numberPhone: '',
  email: '',
  agree: false,
  dateForm: '',
  timeForm: '',
  initUserForm: undefined,
};

export const userFormSlice = createSlice({
  name: 'userForm',
  initialState,
  reducers: {
    changeUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    changePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    changeTruePassword: (state, action: PayloadAction<string>) => {
      state.truePassword = action.payload;
    },
    changeNumberPhone: (state, action: PayloadAction<Nullable<string>>) => {
      state.numberPhone = action.payload;
    },
    changeEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    changeDateForm: (state, action: PayloadAction<string>) => {
      state.dateForm = action.payload;
    },
    changeTimeForm: (state, action: PayloadAction<string>) => {
      state.timeForm = action.payload;
    },
    changeAgree: (state, action: PayloadAction<boolean>) => {
      state.agree = action.payload;
    },
    initUserForm: (state, action: PayloadAction<InitForm>) => {
      state.initUserForm = action.payload;
      state.userName = '';
      state.password = '';
      state.truePassword = '';
      state.email = '';
      state.numberPhone = '';
      state.timeForm = '';
      state.dateForm = '';
      state.agree = false;
    },
  },
});

export const { actions: userFormAction, reducer: userFormReducer } =
  userFormSlice;
