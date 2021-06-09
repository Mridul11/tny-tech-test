import React from 'react';
import ArticleComponent from '../ArticleComponent/ArticleComponent';

const ArticleListComponent = ({ articleData }) => {
    return  articleData.articles.length > 0 ?
        articleData.articles.map(
            (obj, index) => <ArticleComponent key={index} idx={index} obj={obj} />)
        :
        <div class="ui segment">
            <div class="ui active inverted dimmer">
                <div class="ui large text loader">Loading</div>
            </div>
            <p></p>
            <p></p>
            <p></p>
        </div>
}

export default ArticleListComponent;