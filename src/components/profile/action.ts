import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { writeToLocalStorage } from 'src/chore/helpers';
import { CASHED_USER } from 'src/chore/constants';

interface GetProfileProps {
  successCallback?: EmptyArrowFunction;
}

export const getProfile = createAsyncThunk('profile/getProfile', async (props: GetProfileProps) => {
  const { successCallback } = props;
  const response = await axios.get('https://randomuser.me/api');
  writeToLocalStorage(CASHED_USER, response);
  successCallback?.();
  return response?.data?.results?.[0];
});
