import React from 'react';
import { useTranslation } from 'next-i18next';
import { IHeader } from '../../../@types/elements/header';

const H6 = ({ content, styles }: IHeader) => {
  const { t } = useTranslation();
  return (
    <h6 className={`text-sm text-gray-dark dark:text-gray-light ${styles}`}>
      {t(content.toString())}
    </h6>
  );
};

export default H6;
