import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProfile = createAsyncThunk('profile/getProfile', async () => {
  const response = await axios.get('https://randomuser.me/api');
  console.log('response: ', response);
  return response.data;
});
