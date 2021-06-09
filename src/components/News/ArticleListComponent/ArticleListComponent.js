import React from 'react';
import ArticleComponent from '../ArticleComponent/ArticleComponent';

const ArticleListComponent = ({ articleData, initialDataLength }) => {
    return  articleData.length > 0 ?
        articleData.map(
            (obj, index) => <div key={index}>
                    <ArticleComponent 
                        key={index} 
                        idx={index} 
                        obj={obj} 
                        />
                        <br />
                </div>)
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