import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { baseApi } from "../../utils/baseApi";


export interface Request {
  name: string
  page: number
}

const initialState = {
  data: [],
  status: '',
  pages: 0
};

export const searchRepositories = createAsyncThunk(
    'repoData/fetchRepoData',
    async (name: string | undefined) => {
      const response = await baseApi.get(
        `users/${name}/repos`,
      );
      return response.data;
    },
  );

export const searchRepositoriesSlice = createSlice({
    name: 'repoSearch',
    initialState,
    reducers: {
        setRepoData: (state) => {
            state.data = []
        },
    },
    extraReducers: (builder) => {
        builder
          .addCase(searchRepositories.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(searchRepositories.fulfilled, (state, action) => {
            state.status = 'success';
            state.data = action.payload;
          })
          .addCase(searchRepositories.rejected, (state) => {
            state.status = 'failed';
          });
      },
})

export const { setRepoData } = searchRepositoriesSlice.actions

export default searchRepositoriesSlice.reducer
