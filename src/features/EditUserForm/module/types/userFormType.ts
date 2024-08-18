import { Nullable } from 'primereact/ts-helpers';

export interface UserFormType {
  userName: string;
  city: string;
  password: string;
  numberPhone?: Nullable<string>;
  email: string;
  agree?: boolean;
  dateForm: string;
  timeForm: string;
}
