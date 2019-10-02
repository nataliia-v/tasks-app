import React from 'react';

import styles from './spinner.module.scss';

const Spinner = () => {
  return (
      <div className={ styles.loader_wrap }>
        <p className={ styles.loading }>Loading...</p>
        <div className={ styles.loader }> </div>
      </div>
  );
};

export default Spinner;