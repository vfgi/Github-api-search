import { combineReducers } from '@reduxjs/toolkit'
import searchUsers from './reducers/searchUsers'
import searchUserProfile from './reducers/searchSingleUser'
import switchTheme from './reducers/themeChanger'
import searchRepos from './reducers/searchRepos'

const rootReducer = combineReducers({
    searchData: searchUsers,
    searchProfile: searchUserProfile,
    repos: searchRepos,
    switchTheme: switchTheme
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer