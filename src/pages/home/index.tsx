/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { useSelector } from 'react-redux'
import * as S from './styles'

import { RootState } from "../../redux/rootReducers";

import OctoCat from '../../components/Icons/octocat.png'
import { Input } from "../../components/input";
import { Button } from "../../components/Button";
import { searchUsers, setPage, setSearchName, UserData } from "../../redux/reducers/searchUsers";
import { useAppDispatch } from "../../utils/hooks";
import Pagination from "../../components/Pagination";
import UserCard from "../../components/UserCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const { searchData } = useSelector((state: RootState) => state)
    const [search, setSearch] = useState(searchData.searchName)
    const [currentPage, setCurrentPage] = useState(searchData.page);
    const [maxPageLimit, setMaxPageLimit] = useState(5);
    const [minPageLimit, setMinPageLimit] = useState(0);
    const pageNumberLimit = 5;

    const paginationAttributes = {
        currentPage,
        maxPageLimit,
        minPageLimit,
        response: searchData.pages,
    };

    console.log(searchData)

    const onPageChange= (pageNumber: React.SetStateAction<number>)=>{
        dispatch(setPage(Number(pageNumber)));
        dispatch(searchUsers({name: search, page: Number(pageNumber)}));
        setCurrentPage(pageNumber)
    }

    const onPrevClick = ()=>{
        if((currentPage-1) % pageNumberLimit === 0){
            setMaxPageLimit(maxPageLimit - pageNumberLimit);
            setMinPageLimit(minPageLimit - pageNumberLimit);
        }
        setCurrentPage(prev=> prev-1);
        dispatch(setPage(currentPage - 1));
        dispatch(searchUsers({name: search, page: currentPage - 1}));
    }

    const onNextClick = ()=>{
       if(currentPage+1 > maxPageLimit){
           setMaxPageLimit(maxPageLimit + pageNumberLimit);
           setMinPageLimit(minPageLimit + pageNumberLimit);
       }
       setCurrentPage(prev=>prev+1);
       dispatch(setPage(currentPage + 1));
       dispatch(searchUsers({name: search, page: currentPage + 1 }));
    }

    const SearchNewUser = (num: React.SetStateAction<number>) => {
        dispatch(searchUsers({name: search, page: 1}));
        dispatch(setPage(1));
        dispatch(setSearchName(search));
        setCurrentPage(num);
    }

    return (
       <S.Container>
            <S.Octo>
                <img src={OctoCat} alt="octocat" />
            </S.Octo>
            <S.SearchContainer>
                <Input placeholder="search users from github" onChange={e => setSearch(e.target.value)}/>
                <Button onClick={() => SearchNewUser(1)}> Search</Button>
            </S.SearchContainer>
            <S.CardContainer>
                {searchData ? searchData.data.map(
                    (item: UserData, index) => 
                        <UserCard 
                            image={item.avatar_url} 
                            login={item.login} 
                            onClick={() => navigate(`/profile/${item.login}`)}
                            key={index}
                        />
                ) : ''}
            </S.CardContainer>
            {searchData.pages > 1? <Pagination 
                {...paginationAttributes} 
                onPrevClick={onPrevClick} 
                onNextClick={onNextClick}
                onPageChange={onPageChange}
            /> : ''}
       </S.Container>
    )
}

export default Home