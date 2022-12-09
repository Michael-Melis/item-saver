import React from 'react';
import { useTranslation } from 'next-i18next';

import { IHeader } from '../../../@types/elements/header';

const H1 = ({ content, styles }: IHeader) => {
  const { t } = useTranslation();
  return (
    <h1 className={`text-3xl text-gray-dark dark:text-gray-light ${styles}`}>
      {t(content.toString())}
    </h1>
  );
};

export default H1;
