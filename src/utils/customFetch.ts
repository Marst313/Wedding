import axios from 'axios';

export const customFetch = axios.create({
  baseURL: import.meta.env.VITE_APP_AIRTABLE_BASE,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_APP_AIRTABLE_API_KEY}`,
    'Content-Type': 'application/json',
  },
});
