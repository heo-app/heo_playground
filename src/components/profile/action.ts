import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface GetProfileProps {
  successCallback?: EmptyArrowFunction;
}

export const getProfile = createAsyncThunk('profile/getProfile', async (props: GetProfileProps) => {
  const { successCallback } = props;
  const response = await axios.get('https://randomuser.me/api');
  successCallback?.();
  return response?.data?.results?.[0];
});
