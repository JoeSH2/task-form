import { FC, ReactNode } from 'react';
import style from './Block.module.scss';

interface BlockProps {
  children: ReactNode;
}

export const Block: FC<BlockProps> = (props) => {
  const { children } = props;
  return <div className={style.Block}>{children}</div>;
};
