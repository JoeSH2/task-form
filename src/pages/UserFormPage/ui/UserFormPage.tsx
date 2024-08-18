import { FC } from 'react';
import style from './UserFormPage.module.scss';
import { useAppSelector } from 'src/shared/hooks/storeHooks.ts';

import { EditUserForm } from 'src/features/EditUserForm';

const UserFormPage: FC = () => {
  const initForm = useAppSelector((state) => state.userForm.initUserForm);

  const date = new Date().toLocaleDateString();

  console.log(date);
  return (
    <div className={style.UserFormPage}>
      <h1 className={style.title}>
        Здравствуйте, {initForm ? initForm.userName : 'Человек'}
      </h1>
      <EditUserForm date={initForm?.dateForm} time={initForm?.timeForm} />
    </div>
  );
};

export default UserFormPage;
