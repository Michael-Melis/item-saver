import React from 'react';
import { useTranslation } from 'next-i18next';
import { IHeader } from '../../../@types/elements/header';

const H4 = ({ content, styles }: IHeader) => {
  const { t } = useTranslation();
  return (
    <h4 className={`text-lg text-gray-dark dark:text-gray-light ${styles}`}>
      {t(content.toString())}
    </h4>
  );
};

export default H4;
