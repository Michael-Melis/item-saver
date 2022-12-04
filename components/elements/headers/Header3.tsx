import React from 'react';
import { useTranslation } from 'next-i18next';
import { IHeader } from '../../../@types/elements/header';

const H3 = ({ content }: IHeader) => {
  const { t } = useTranslation();
  return <h3>{t(content.toString())}</h3>;
};

export default H3;
