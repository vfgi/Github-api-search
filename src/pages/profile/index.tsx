/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import * as S from './styles'

import { RootState } from "../../redux/rootReducers";

import { useAppDispatch } from "../../utils/hooks";
import Pagination from "../../components/Pagination";
import { useNavigate, useParams } from "react-router-dom";
import { searchUserProfile } from "../../redux/reducers/searchSingleUser";
import UserIcon from "../../components/Icons/user";
import { DefaultTheme, withTheme } from "styled-components";
import LocationIcon from "../../components/Icons/location";
import TwitterIcon from "../../components/Icons/twitter";
import CompanyIcon from "../../components/Icons/company";
import BiograhyIcon from "../../components/Icons/bio";

import followerIcon from '../../components/Icons/follower.png'
import followingIcon from '../../components/Icons/following.png'
import repoIcon from '../../components/Icons/repoicon.png'
import { searchRepositories } from "../../redux/reducers/searchRepos";
import { Button } from "../../components/Button";

interface Theme {
    theme: DefaultTheme
}

export interface RepoData {
    language: string
    name: string
    description: string
    url: string
}

const Profile = ({theme}: Theme) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();


    const { name } = useParams();
    const { searchProfile, repos } = useSelector((state: RootState) => state)

    const size = 10; 
    let reposArray: never[][] = [];
    for (var i=0; i<repos.data.length; i+=size) {
        reposArray.push(repos.data.slice(i,i+size));
    }

    const [currentPage, setCurrentPage] = useState(1);
    const [maxPageLimit, setMaxPageLimit] = useState(5);
    const [minPageLimit, setMinPageLimit] = useState(0);
    const pageNumberLimit = 5;

    useEffect(() => {
        dispatch(searchUserProfile(name))
        dispatch(searchRepositories(name))
    }, [name])



    const paginationAttributes = {
        currentPage,
        maxPageLimit,
        minPageLimit,
        response: reposArray.length + 1,
    };

    const onPageChange= (pageNumber: React.SetStateAction<number>)=>{
        setCurrentPage(pageNumber)
    }

    const onPrevClick = ()=>{
        if((currentPage-1) % pageNumberLimit === 0){
            setMaxPageLimit(maxPageLimit - pageNumberLimit);
            setMinPageLimit(minPageLimit - pageNumberLimit);
        }
        setCurrentPage(prev=> prev-1)
    }

    const onNextClick = ()=>{
       if(currentPage+1 > maxPageLimit){
           setMaxPageLimit(maxPageLimit + pageNumberLimit);
           setMinPageLimit(minPageLimit + pageNumberLimit);
       }
       setCurrentPage(prev=>prev+1);
    }

    return (
       <S.Container>
        <S.ButtonContainer>
            <Button onClick={() => navigate(`/`)}>Back to listing</Button>
        </S.ButtonContainer>
        <S.ProfileInfoContainer>
            <img src={searchProfile.data.avatar_url} alt="" />
            <S.InfoContainer>
                <S.ProfileInfo>
                    <UserIcon color={theme.colors.icons}/>
                    <S.CardTitle>{searchProfile.data.login || 'not-informed'}</S.CardTitle>
                </S.ProfileInfo>
                <S.ProfileInfo>
                    <TwitterIcon color={theme.colors.icons}/>
                    <S.CardTitle>{searchProfile.data.twitter_username || 'not-informed'}</S.CardTitle>
                </S.ProfileInfo>
                <S.ProfileInfo>
                    <LocationIcon color={theme.colors.icons}/>
                    <S.CardTitle>{searchProfile.data.location || 'not-informed'}</S.CardTitle>
                </S.ProfileInfo>
                <S.ProfileInfo>
                    <CompanyIcon color={theme.colors.icons}/>
                    <S.CardTitle>{searchProfile.data.company || 'not-informed'}</S.CardTitle>
                </S.ProfileInfo>
                <S.ProfileInfo>
                    <BiograhyIcon color={theme.colors.icons}/>
                    <S.CardTitle>{searchProfile.data.bio || 'not-informed'}</S.CardTitle>
                </S.ProfileInfo>
            </S.InfoContainer>
        </S.ProfileInfoContainer>
        <S.CardInfoContainer>
            <S.Card>
                <S.CardInfo>
                    <S.CardTitle>{searchProfile.data.followers}</S.CardTitle>
                    <S.CardLabel>Followers</S.CardLabel>
                </S.CardInfo>
                <img src={followerIcon} alt="follower" />
            </S.Card>
            <S.Card>
                <S.CardInfo>
                    <S.CardTitle>{searchProfile.data.following}</S.CardTitle>
                    <S.CardLabel>Following</S.CardLabel>
                </S.CardInfo>
                <img src={followingIcon} alt="following" />
            </S.Card>
            <S.Card>
                <S.CardInfo>
                    <S.CardTitle>{searchProfile.data.public_repos}</S.CardTitle>
                    <S.CardLabel>Repos</S.CardLabel>
                </S.CardInfo>
                <img src={repoIcon} alt="repo" />
            </S.Card>
        </S.CardInfoContainer>
        <S.RepoCardContainer>
            {reposArray[currentPage - 1]?.map((repo: RepoData, index) => (
                <S.RepoCard key={index}>
                    <S.CardLabel>Language: {repo.language || 'unknown'}</S.CardLabel>
                    <S.CardLabel>Repository name: {repo.name || 'unknown'}</S.CardLabel>
                    <S.CardLabel>Description: {repo.description || 'unknown'}</S.CardLabel>
                    <a href={repo.url} target="_blank" rel="noreferrer">Visit Repository</a>
                </S.RepoCard>
            ))}
        </S.RepoCardContainer>
        <Pagination 
            {...paginationAttributes} 
            onPrevClick={onPrevClick} 
            onNextClick={onNextClick}
            onPageChange={onPageChange}
        />
       </S.Container>
    )
}

export default withTheme(Profile)