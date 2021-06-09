import React, { useEffect } from 'react';
import NewsArticleComponent from '../../components/News/ArticleListComponent/ArticleListComponent';
import axios from 'axios';
import "./HomePage.scss";

const HomePage = () => {
    useEffect(() => axios.get(process.env.REACT_APP_NEWS_URL)
        .then(response => console.log(response.data)), [])
    return (<div className="homepage-header">
        <NewsArticleComponent />
    </div>
    )
}
export default HomePage;
