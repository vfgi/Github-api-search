import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { baseApi } from "../../utils/baseApi";

export interface UserData {
  avatar_url: string
  login: string
}

export interface ItemsProps {
  data: UserData[]
}

export interface Request {
  name: string
  page: number
}

const initialState = {
  data: [],
  status: '',
  pages: 0,
  page: 1,
  searchName: ''
};

export const searchUsers = createAsyncThunk(
    'usersData/fetchUsersData',
    async (data: Request) => {
      const { name, page } = data 
      const response = await baseApi.get(
        `search/users?q=${name}&page=${page}&per_page=8`,
      );
      return response.data;
    },
  );

export const searchUsersSlice = createSlice({
    name: 'usersSearch',
    initialState,
    reducers: {
        setSearchName: (state, action) => {
            state.searchName = action.payload
        },
        setPage: (state, action) => {
          state.page = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
          .addCase(searchUsers.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(searchUsers.fulfilled, (state, action) => {
            state.status = 'success';
            state.data = action.payload.items;
            state.pages = action.payload.total_count /8
          })
          .addCase(searchUsers.rejected, (state) => {
            state.status = 'failed';
          });
      },
})

export const { setSearchName, setPage } = searchUsersSlice.actions

export default searchUsersSlice.reducer
