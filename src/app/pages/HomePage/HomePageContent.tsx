import * as React from 'react';
import { Grid } from '@mui/material';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/translations';


export function HomePageContent() {
  const { t, i18n } = useTranslation();

  const LatestNewsBox = styled.div`
    background-color: rgb(174, 7, 33);
  `;

  return (
    <Grid container spacing={2} justifyContent='center'>
      <Grid item xs={8} md={3}>
        <img style={{ maxWidth: '100%' }} src='/images/logo_with_bg.png' alt='Beauvoir Logo' />
      </Grid>
      <Grid item xs={8} sm={3}>
        <p>{t(translations.HomePage.WelcomeText.initial)}</p>
        <p>{t(translations.HomePage.WelcomeText.secondary)}</p>
        <i>{t(translations.HomePage.WelcomeText.quote)}</i>
      </Grid>
      <Grid item xs={8} sm={3}>
        <LatestNewsBox>
          <h3>{t(translations.HomePage.LatestNews.title)}</h3>
        </LatestNewsBox>
      </Grid>
    </Grid>
  );
}
