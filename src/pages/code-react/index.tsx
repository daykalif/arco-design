import React from 'react';
import { Button } from '@arco-design/web-react';
import useLocale from '../../utils/useLocale';
import styles from './style/index.module.less';

function CodeReact() {
  const locale = useLocale();

  return (
    <div className={styles.container}>
      <span>react源码</span>
      <Button key="react" type="primary">
        {locale['menu.code.react']}
      </Button>
    </div>
  );
}

export default CodeReact;
