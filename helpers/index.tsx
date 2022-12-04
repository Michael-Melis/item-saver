// eslint-disable-next-line import/prefer-default-export
export const getFullLocaleName = (code: string) => {
  switch (code) {
    case 'en':
      return 'English';
    case 'sk':
      return 'Slovak';

    default:
      return '';
  }
};
