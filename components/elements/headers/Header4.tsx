import React from 'react';
import { useTranslation } from 'next-i18next';
import { IHeader } from '../../../@types/elements/header';

const H4 = ({ content }: IHeader) => {
  const { t } = useTranslation();
  return <h4>{t(content.toString())}</h4>;
};

export default H4;
