import { FC, memo } from 'react';
import style from '../Input.module.scss';
import { InputProps } from 'src/shared/ui/Input/ui/Input.tsx';
import { cls } from 'src/shared/lib/cls.ts';
import { InputMask } from 'primereact/inputmask';
import { Nullable } from 'primereact/ts-helpers';

interface InputPhoneProps extends Omit<InputProps, 'onChange'> {
  onChange: (value: Nullable<string>) => void;
}

export const InputPhone: FC<InputPhoneProps> = memo((props) => {
  const {
    onChange,
    value,
    required = false,
    labelName,
    className,
    labelClassName,
    inputClassName,
    isValid = true,
    error = 'Заполните поле',
  } = props;

  if (labelName) {
    return (
      <div className={cls(style.wrapper, {}, [className])}>
        <label className={cls(style.text, {}, [labelClassName])}>
          {labelName}
          {required && <span>*</span>}
        </label>
        <div className={style.row}>
          <InputMask
            required={required}
            type={'tel'}
            className={cls(style.Input, { [style.errorInput]: !isValid }, [
              inputClassName,
            ])}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            mask="+ 7 (***) ***-**-**"
            placeholder="+ 7 (***) ***-**-**"
          />
          {!isValid && <span className={style.error}>{error}</span>}
        </div>
      </div>
    );
  }

  return (
    <div className={style.row}>
      <InputMask
        required={required}
        type="number"
        className={cls(style.Input, { [style.errorInput]: !isValid }, [
          inputClassName,
        ])}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        mask="+ 7 (***) ***-**-**"
        placeholder="+ 7 (900) 999-00-00"
      />
      {isValid && <span className={style.error}>{error}</span>}
    </div>
  );
});
