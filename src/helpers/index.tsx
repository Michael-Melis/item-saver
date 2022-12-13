// eslint-disable-next-line import/prefer-default-export
export const getFullLocaleName = (code: string) => {
  switch (code) {
    case 'en':
      return 'language.english';
    case 'sk':
      return 'language.slovak';

    default:
      return '';
  }
};
