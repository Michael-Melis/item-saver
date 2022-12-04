import React from 'react';
import { useTranslation } from 'next-i18next';
import { IHeader } from '../../../@types/elements/header';

const H1 = ({ content }: IHeader) => {
  const { t } = useTranslation();
  return <h1>{t(content.toString())}</h1>;
};

export default H1;
