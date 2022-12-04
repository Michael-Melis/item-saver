import React from 'react';
import { useTranslation } from 'next-i18next';
import { IHeader } from '../../../@types/elements/header';

const H2 = ({ content }: IHeader) => {
  const { t } = useTranslation();
  return <h2>{t(content.toString())}</h2>;
};

export default H2;
