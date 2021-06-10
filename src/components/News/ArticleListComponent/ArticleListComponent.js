import React from 'react';
import ArticleComponent from '../ArticleComponent/ArticleComponent';

const ArticleListComponent = ({ articleData }) => {
    return articleData && articleData.length > 0 ?
        articleData.map(
            (obj, index) => <div key={index}>
                    <ArticleComponent 
                        data-testid="article-list-test"
                        key={index} 
                        idx={index} 
                        obj={obj} 
                        />
                        <br />
                </div>)
        :
        <div className="ui segment">
            <div className="ui active inverted dimmer" data-testid="article-list-test">
                <div className="ui large text loader">Loading</div>
            </div>
            <p></p>
            <p></p>
            <p></p>
        </div>
}

export default ArticleListComponent;