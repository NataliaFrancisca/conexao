import { setCookie, parseCookies } from 'nookies';
const USER_LANGUAGE_LAST_PREFERENCE = 'USER_LANGUAGE_LAST_PREFERENCE';

export const setUserLanguageLastPreference = (language: string) => {
  setCookie(null, USER_LANGUAGE_LAST_PREFERENCE, language);
};

export const getUserLanguageLastPreference = () => {
  const values = parseCookies();
  return values[USER_LANGUAGE_LAST_PREFERENCE];
};
