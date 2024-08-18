import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import style from './Button.module.scss';
import { cls } from 'src/shared/lib/cls.ts';

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  children: ReactNode;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = (props) => {
  const { children, className, onClick } = props;
  return (
    <button onClick={onClick} className={cls(style.Button, {}, [className])}>
      {children}
    </button>
  );
};
