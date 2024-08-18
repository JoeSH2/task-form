import { FC, FormEvent, useCallback, useEffect, useState } from 'react';
import style from './EditUserForm.module.scss';
import { cls } from 'src/shared/lib/cls.ts';
import { Input, InputPhone } from 'src/shared/ui/Input';
import { SelectCity } from '../../SelectCity';
import { Checkbox } from 'src/shared/ui/Checkbox';
import { Button } from 'src/shared/ui/Button';
import { useAppDispatch, useAppSelector } from 'src/shared/hooks/storeHooks.ts';
import {
  getUserAgree,
  getUserCity,
  getUserEmail,
  getUserName,
  getUserPassword,
  getUserPhone,
  getUserTruePassword,
} from '../module/selectors/userFormSelectors';
import { userFormAction } from '../module/slice/userFormSlice';
import { onValidateText } from 'src/shared/lib/onValidateText.ts';
import { Validates } from 'src/shared/consts/validates.ts';
import { Nullable } from 'primereact/ts-helpers';

interface EditUserFormProps {
  date?: string;
  time?: string;
}

type ErrorsForm = {
  name?: boolean;
  password?: boolean;
  email?: boolean;
  city?: boolean;
};

export const EditUserForm: FC<EditUserFormProps> = (props) => {
  const { time, date } = props;
  const [errors, setErrors] = useState<ErrorsForm>();
  const dispatch = useAppDispatch();

  const [isValid, setIsValid] = useState(true);

  const name = useAppSelector(getUserName);
  const password = useAppSelector(getUserPassword);
  const city = useAppSelector(getUserCity);
  const truePassword = useAppSelector(getUserTruePassword);
  const numberTel = useAppSelector(getUserPhone);
  const email = useAppSelector(getUserEmail);
  const agree = useAppSelector(getUserAgree);

  const onChangeName = useCallback(
    (name: string) => {
      dispatch(userFormAction.changeUserName(name));
    },
    [dispatch]
  );
  const onChangePassword = useCallback(
    (password: string) => {
      dispatch(userFormAction.changePassword(password));
    },
    [dispatch]
  );
  const onChangeTruePassword = useCallback(
    (truePassword: string) => {
      dispatch(userFormAction.changeTruePassword(truePassword));
    },
    [dispatch]
  );
  const onChangePhone = useCallback(
    (phone: Nullable<string>) => {
      dispatch(userFormAction.changeNumberPhone(phone));
    },
    [dispatch]
  );
  const onChangeEmail = useCallback(
    (email: string) => {
      dispatch(userFormAction.changeEmail(email));
    },
    [dispatch]
  );
  const onChangeAgree = useCallback(
    (arg: boolean) => {
      dispatch(userFormAction.changeAgree(arg));
    },
    [dispatch]
  );

  const validateForm = () => {
    const errorsForm: ErrorsForm = {};
    errorsForm.name = onValidateText(name, Validates.NAME);
    errorsForm.password = onValidateText(
      password,
      Validates.PASSWORD,
      truePassword
    );
    errorsForm.email = onValidateText(email, Validates.EMAIL);

    setIsValid(Object.values(errorsForm).some((value) => !value));

    return errorsForm;
  };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors(validateForm());
    if (!isValid) {
      dispatch(
        userFormAction.initUserForm({
          userName: name,
          timeForm: new Date().toLocaleTimeString(),
          dateForm: new Date().toLocaleDateString(),
          email: email,
          city: city,
          numberPhone: numberTel,
          agree: agree,
        })
      );
    }
  };

  useEffect(() => {
    validateForm();
  }, [name, password, truePassword, email]);

  return (
    <form onSubmit={submitForm} className={style.EditUserForm}>
      <div className={cls(style.infoBlock, {}, [style.bottomLine])}>
        <Input
          labelClassName={style.label}
          inputClassName={style.input}
          className={style.inputBlock}
          required
          isValid={errors?.name}
          error={'Введите имя, используя кириллицу'}
          labelName={'Имя'}
          placeholder={'Введите Имя'}
          value={name}
          onChange={onChangeName}
        />
        <SelectCity
          value={city}
          labelClassName={style.label}
          selectClassName={style.input}
          className={style.inputBlock}
        />
      </div>
      <div className={cls(style.infoBlock, {}, [style.bottomLine])}>
        <Input
          labelClassName={style.label}
          inputClassName={style.input}
          className={style.inputBlock}
          required
          isValid={errors?.password}
          error={
            'Пароли должны совпадать и содержать больше 6 символов латиницы'
          }
          type={'password'}
          labelName={'Пароль'}
          placeholder={'Введите пароль'}
          value={password}
          onChange={onChangePassword}
        />
        <Input
          labelClassName={style.label}
          inputClassName={style.input}
          className={style.inputBlock}
          required
          isValid={errors?.password}
          error={
            'Пароли должны совпадать и содержать больше 6 символов латиницы'
          }
          type={'password'}
          labelName={'Пароль еще раз'}
          placeholder={'Повторите пароль'}
          value={truePassword}
          onChange={onChangeTruePassword}
        />
      </div>
      <div className={cls(style.infoBlock, {}, [])}>
        <InputPhone
          type={'tel'}
          labelName={'Номер телефона'}
          value={numberTel}
          onChange={onChangePhone}
          labelClassName={style.label}
          inputClassName={style.input}
          className={style.inputBlock}
        />
        <Input
          type={'text'}
          labelName={'Электронная почта'}
          placeholder={''}
          required
          isValid={errors?.email}
          value={email}
          error={'Укажите актуальный email'}
          onChange={onChangeEmail}
          labelClassName={style.label}
          inputClassName={style.input}
          className={style.inputBlock}
        />
        <div className={style.wrapperCheckbox}>
          <label className={style.label}>Я согласен</label>
          <div className={style.rowCheckbox}>
            <Checkbox
              checkboxClassName={style.input}
              className={style.inputBlock}
              checked={agree}
              onChange={onChangeAgree}
            />
            <span>принимать актуальную информацию на email</span>
          </div>
        </div>
      </div>
      <div className={style.blockSubmit}>
        <span className={style.label}></span>
        <div className={style.blockSubmit}>
          <Button type={'submit'}>Изменить</Button>
          <p className={style.infoSubmit}>
            {date && time
              ? `последние изменения ${date} в ${time}`
              : 'изменений еще не было'}
          </p>
        </div>
      </div>
    </form>
  );
};
