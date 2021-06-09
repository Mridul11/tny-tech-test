import React, { useEffect, useMemo, useState } from 'react';
import ArticleListComponent from '../../components/News/ArticleListComponent/ArticleListComponent';
import axios from 'axios';
import styled from 'styled-components';

const HomeWrapper = styled.div`
    margin-top: 100px;
    margin-bottom: 100px;
`
const HomePage = () => {
    const [articleData, articleDataSet] = useState({});
    const [searchTerm, searchTermSet ] = useState("");

    useEffect(() => axios.get(process.env.REACT_APP_NEWS_URL)
        .then(response => articleDataSet(response.data)), [articleData.length])

    const handleFilterArticle = (e) => {
        searchTermSet(e.target.value);
        let newArr = articleData.articles.filter(val => val.title.toLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1);
        // console.log("newArr", newArr);
        articleDataSet({ ...articleData, articles: newArr});
    }

    console.log(articleData, searchTerm);
    return (
        <div>
            <div class="ui fluid icon input">
                <input 
                    type="text" 
                    placeholder="Type to search" 
                    value={searchTerm}
                    onChange={(e) => handleFilterArticle(e)}
                />
                <i class="search icon"></i>
            </div>

            <br />
            {articleData.articles && articleData.articles.length > 0 ? <ArticleListComponent articleData={articleData} />
                :
                <div className="">
                    <div className="ui active inverted dimmer">
                        <div className="ui large text loader">Loading</div>
                    </div>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            }
        </div>
    )
}
export default HomePage;
