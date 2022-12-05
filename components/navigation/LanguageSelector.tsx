import { FormControl, MenuItem, Select } from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ReactCountryFlag from 'react-country-flag';
import { getFullLocaleName } from '../../helpers';
import H6 from '../elements/headers/Header6';

const LanguageSelector = () => {
  const router = useRouter();

  return (
    <FormControl>
      <Select className='dark:text-gray-light' defaultValue={'en'} size='small'>
        {router?.locales?.map((language, i) => (
          <MenuItem key={i} value={language}>
            <Link href='/' locale={language} className='flex items-center'>
              <ReactCountryFlag
                countryCode={language === 'en' ? 'gb' : language}
                svg
                className='mr-2'
              />
              <H6 content={getFullLocaleName(language)} />
            </Link>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageSelector;
