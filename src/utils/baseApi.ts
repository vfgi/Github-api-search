import axios from 'axios';

export const baseApi = axios.create({
  headers: {
    Accept: "application/vnd.github+json",
    Authorization: 'Bearer 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'
  },
  baseURL: 'https://api.github.com/',
});

