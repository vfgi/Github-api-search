import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { baseApi } from "../../utils/baseApi";

export interface UserData {
  avatar_url: string
  login: string
  bio: string
  twitter_username: string
  followers: number
  following: number
  public_repos: number
  location: string
  company: string
}

export interface Request {
  name: string
  page: number
}

const initialState = {
  data: {
    avatar_url: '',
    login: '',
    bio: '',
    twitter_username: '',
    followers: 0,
    following: 0,
    public_repos: 0,
    location: '',
    company: '',
  },
  status: '',
  pages: 0
};

export const searchUserProfile = createAsyncThunk(
    'userProfile/fetchUserProfile',
    async (name: string | undefined) => {
      const response = await baseApi.get(
        `users/${name}`,
      );
      return response.data;
    },
  );

export const searchUserProfileSlice = createSlice({
    name: 'profileSearch',
    initialState,
    reducers: {
        setProfileData: (state) => {
            state.data = {
              avatar_url: '',
              login: '',
              bio: '',
              twitter_username: '',
              followers: 0,
              following: 0,
              public_repos: 0,
              location: '',
              company: '',
            }
        },
    },
    extraReducers: (builder) => {
        builder
          .addCase(searchUserProfile.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(searchUserProfile.fulfilled, (state, action) => {
            state.status = 'success';
            state.data = action.payload;
          })
          .addCase(searchUserProfile.rejected, (state) => {
            state.status = 'failed';
          });
      },
})

export const { setProfileData } = searchUserProfileSlice.actions

export default searchUserProfileSlice.reducer
