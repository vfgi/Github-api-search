import axios from 'axios';

export const baseApi = axios.create({
  headers: {
    Accept: "application/vnd.github+json",
    Authorization: 'Bearer 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'
  },
  baseURL: 'https://api.github.com/',
});

