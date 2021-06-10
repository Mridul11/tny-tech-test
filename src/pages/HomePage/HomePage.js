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
    const [articleArrayOnSearch, articleArrayOnSearchSet] = useState([]);
    const [searchTerm, searchTermSet] = useState("");
    const [initialDataLength, initialDataLengthSet] = useState(5);

    useEffect(() => axios.get(process.env.REACT_APP_NEWS_URL)
        .then(response => articleDataSet(response.data)), [])

    const handleFilterArticle = (e) => {
        searchTermSet(e.target.value);
        const oldData = articleData?.articles;
        let newArr = articleData.articles.filter(val => val.title.toLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1);
        console.log("newArr", newArr);
        if (searchTerm.length > 0) {
            articleArrayOnSearchSet(newArr);
        }
    }

    const handleLoadMore = (e) => {
        initialDataLengthSet(prev => prev + 5)
        articleDataSet({ ...articleData, articles: articleData.articles });
    }

    console.log(articleData, searchTerm, initialDataLength);
    return (
        <div style={{ marginTop: 100 }}>
            <div className="ui fluid icon input">
                <input
                    type="text"
                    placeholder="Type to search"
                    value={searchTerm}
                    onChange={(e) => handleFilterArticle(e)}
                />
                <i className="search icon"></i>
            </div>

            <br />
            {articleData.status == "ok" &&
                articleData.articles.length > 0 ?
                <div>
                    <ArticleListComponent
                        articleData={searchTerm === "" ? articleData.articles.slice(0,initialDataLength) : articleArrayOnSearch}
                        initialDataLength={initialDataLength}
                        initialDataLengthSet={initialDataLengthSet}
                    />
                    <br />
                    <button
                        onClick={(e) => handleLoadMore(e)}
                        className="ui primary button right"
                    >
                        Load More
                    </button>
                </div>
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
