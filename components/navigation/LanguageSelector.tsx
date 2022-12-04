import { FormControl, MenuItem, Select } from '@mui/material';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import ReactCountryFlag from 'react-country-flag';
import { getFullLocaleName } from '../../helpers';

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const router = useRouter();
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage, i18n]);

  return (
    <FormControl className='w-1/12 '>
      <Select className='dark:text-gray-light' defaultValue={'en'} size='small'>
        {router?.locales?.map((language, i) => (
          <MenuItem
            key={i}
            value={language}
            onClick={() => setSelectedLanguage(language)}>
            <ReactCountryFlag
              countryCode={language === 'en' ? 'gb' : language}
              svg
              className='mr-2'
            />
            {getFullLocaleName(language)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageSelector;
