import React, { FC, ReactNode } from 'react';

import s from './Card.module.css';

type Props = {
  children: ReactNode;
};

const Card: FC<Props> = props => {
  return <div className={s.card}>{props.children}</div>;
};

export default Card;
