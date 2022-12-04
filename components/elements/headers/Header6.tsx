import React from 'react';
import { useTranslation } from 'next-i18next';
import { IHeader } from '../../../@types/elements/header';

const H6 = ({ content }: IHeader) => {
  const { t } = useTranslation();
  return <h6>{t(content.toString())}</h6>;
};

export default H6;
