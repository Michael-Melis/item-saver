import React from 'react';
import { useTranslation } from 'next-i18next';
import { IHeader } from '../../../@types/elements/header';

const H5 = ({ content }: IHeader) => {
  const { t } = useTranslation();
  return <h5>{t(content.toString())}</h5>;
};

export default H5;
