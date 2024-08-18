import { FC, memo, SelectHTMLAttributes } from 'react';
import style from './Select.module.scss';
import { cls } from 'src/shared/lib/cls.ts';
import { Cities } from 'src/shared/types/cities.ts';

interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange'> {
  arrayValue?: Cities[];
  labelName?: string;
  labelClassName?: string;
  selectClassName?: string;
  value: string;
  onChange: (value: string) => void;
}

export const Select: FC<SelectProps> = memo((props) => {
  const {
    arrayValue,
    labelName,
    required,
    className,
    labelClassName,
    selectClassName,
    value,
    onChange,
  } = props;

  if (labelName) {
    return (
      <div className={cls(style.wrapper, {}, [className])}>
        <label className={cls(style.text, {}, [labelClassName])}>
          {labelName}
          {required && <span>*</span>}
        </label>

        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cls(style.Select, {}, [selectClassName])}
          id="cities"
          name="cities"
        >
          {arrayValue?.map(({ city }, i) => (
            <option key={`${city}${i}`} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={cls(style.Select, {}, [selectClassName])}
      id="cities"
      name="cities"
    >
      <option value="" selected disabled hidden>
        123
      </option>
      {arrayValue?.map(({ city }, i) => (
        <option key={`${city}${i}`} value={city}>
          {city}
        </option>
      ))}
    </select>
  );
});
