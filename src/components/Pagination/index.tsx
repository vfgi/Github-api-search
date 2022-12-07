import React from 'react';
import { Button } from '../Button';
import * as S from './styles'

const Pagination = (props: {
    onPageChange(arg0: number): unknown;
    onNextClick(): unknown;
    onPrevClick(): unknown; response?: any; currentPage?: any; maxPageLimit?: any; minPageLimit?: any; 
})=>{
    const { currentPage, maxPageLimit, minPageLimit} = props;
    const totalPages = props.response -1;

    const pages = [];
    for(let i=1 ; i<=totalPages; i++){
        pages.push(i);
    }

    const handlePrevClick = ()=>{
        props.onPrevClick();
    }
    const handleNextClick = ()=>{
        props.onNextClick();
    }
    const handlePageClick = (id: any)=>{
        props.onPageChange(Number(id.id));
    }

    const pageNumbers = pages.map(page => {
            if(page <= maxPageLimit  && page > minPageLimit) {
                return(
            <li key={page} id={page.toString()} onClick={(e) => handlePageClick(e.target)} 
                className={currentPage===page ? 'active' : ''}>
                {page}
            </li>
                );
            }else{
                return null;
            }
        }

    );
 
    let pageIncrementEllipses = null;
        if(pages.length > maxPageLimit){
            pageIncrementEllipses = <li onClick={handleNextClick}>&hellip;</li>
        }
        let pageDecremenEllipses = null;
        if(minPageLimit >=1){
            pageDecremenEllipses = <li onClick={handlePrevClick}>&hellip;</li> 
    }

    return(
        <S.PaginationContainer>
            <S.PageNumbers> 
                <Button onClick={handlePrevClick} disabled={currentPage === pages[0]}>Prev</Button>
               {pageDecremenEllipses}
                {pageNumbers}
               {pageIncrementEllipses}
                <Button onClick={handleNextClick} disabled={currentPage === pages[pages.length-1]}>Next</Button>

            </S.PageNumbers>
        </S.PaginationContainer>
    )
}
export default Pagination;