import React, { FC } from 'react';
import s from './Loading.module.css';

const LoadingSpinner: FC<{ content: string }> = props => {
  return (
    <div className={s['spinner-container']}>
      <div className={s['loading-spinner']}></div>
      <span className={s['loading-text']}>{props.content}</span>
    </div>
  );
};

export default LoadingSpinner;
