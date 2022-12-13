/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createSlice } from '@reduxjs/toolkit';

export enum ETheme {
  light = 'light',
  dark = 'dark',
}

export interface ITheme {
  skin: string;
}
const initialState: ITheme = {
  skin: 'light',
};

export const theme = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeToLightTheme: (state) => {
      state.skin = 'light';
    },
    changeToDarkTheme: (state) => {
      state.skin = 'dark';
    },
  },
});

export const { changeToLightTheme, changeToDarkTheme } = theme.actions;
export default theme.reducer;
