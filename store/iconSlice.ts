/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

enum IconsEnum {
  moon = 'moon',
  sun = 'sun',
}

interface IIcon {
  icon: IconsEnum;
}
const initialState: IIcon = {
  icon: IconsEnum.moon,
};

const iconSlice = createSlice({
  name: 'icon',
  initialState,
  reducers: {
    iconMoon: (state) => {
      state.icon = IconsEnum.moon;
    },
    iconSun: (state) => {
      state.icon = IconsEnum.sun;
    },
  },
});
export const iconAction = iconSlice.actions;

export default iconSlice;
