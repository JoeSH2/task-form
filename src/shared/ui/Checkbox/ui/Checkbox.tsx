import { FC, memo, InputHTMLAttributes } from 'react';
import style from './Checkbox.module.scss';
import { cls } from 'src/shared/lib/cls.ts';

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'checked' | 'onChange'> {
  checked: boolean;
  onChange: (value: boolean) => void;
  labelName?: string;
  labelClassName?: string;
  checkboxClassName?: string;
}

export const Checkbox: FC<CheckboxProps> = memo((props) => {
  const {
    onChange,
    checked,
    required = false,
    labelName,
    className,
    labelClassName,
    checkboxClassName,
  } = props;

  if (labelName) {
    return (
      <div className={cls(style.wrapper, {}, [className])}>
        <label className={cls(style.text, {}, [labelClassName])}>
          {labelName}
          {required && <span>*</span>}
        </label>

        <input
          required={required}
          type="checkbox"
          checked={checked}
          className={cls(style.Checkbox, {}, [checkboxClassName, className])}
          onChange={() => onChange(!checked)}
        />
      </div>
    );
  }

  return (
    <input
      required={required}
      type="checkbox"
      className={cls(style.Checkbox, {}, [checkboxClassName, className])}
      checked={checked}
      onChange={() => onChange(!checked)}
    />
  );
});
