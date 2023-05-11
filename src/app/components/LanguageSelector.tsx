import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';


export function LanguageSelector() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng).then();
  };

  return (
    <>
      <Button onClick={() => changeLanguage('nl')}>
        <span role='img' aria-label='NL Flag'>
          🇳🇱
        </span>
      </Button>
      <Button onClick={() => changeLanguage('en')}>
        <span role='img' aria-label='UK Flag'>
          🇬🇧
        </span>
      </Button>
    </>
  );
}
