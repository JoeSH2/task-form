import { FC, InputHTMLAttributes, memo } from 'react';
import style from './Input.module.scss';
import { cls } from 'src/shared/lib/cls.ts';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  value: string;
  onChange: (value: string) => void;
  labelName?: string;
  labelClassName?: string;
  inputClassName?: string;
  error?: string;
  isValid?: boolean;
}

export const Input: FC<InputProps> = memo((props) => {
  const {
    onChange,
    value,
    placeholder,
    type = 'text',
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
          <input
            required={required}
            type={type}
            placeholder={placeholder}
            className={cls(style.Input, { [style.errorInput]: !isValid }, [
              inputClassName,
            ])}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
          {!isValid && <span className={style.error}>{error}</span>}
        </div>
      </div>
    );
  }

  return (
    <div className={style.row}>
      <input
        required={required}
        type={type}
        placeholder={placeholder}
        className={cls(style.Input, { [style.errorInput]: !isValid }, [
          inputClassName,
        ])}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {isValid && <span className={style.error}>{error}</span>}
    </div>
  );
});
