import React, { useEffect, useState } from 'react';
import ArticleListComponent from '../../components/News/ArticleListComponent/ArticleListComponent';
import axios from 'axios';
import styled from 'styled-components';

const HomeWrapper = styled.div`
    margin-top: 100px;
    margin-bottom: 100px;
`
const HomePage = () => {
    const [articleData, articleDataSet] = useState({});

    useEffect(() => axios.get(process.env.REACT_APP_NEWS_URL)
        .then(response => articleDataSet(response.data)), [])

    console.log(articleData);
    return (
        <div>
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
