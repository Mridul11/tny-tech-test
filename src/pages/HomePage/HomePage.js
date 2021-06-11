import React, { useState } from 'react';
import ArticleListComponent from '../../components/News/ArticleListComponent/ArticleListComponent';
import useFetchData from '../../custom-hooks/useFetchData';


const ShowSnackOnError = () => <div className="ui negative message">
    <i className="close icon"></i>
    <div className="header">
        OOPS
    </div>
    <p>This usuablly does not hapen! but i think i messed up :( </p>
</div>

const HomePageMemo = () => {
    const [articleArrayOnSearch, articleArrayOnSearchSet] = useState([]);
    const [searchTerm, searchTermSet] = useState("");
    const [initialDataLength, initialDataLengthSet] = useState(5);

    const [articleData] = useFetchData(process.env.REACT_APP_NEWS_URL);

    const handleFilterArticle = (e) => {
        searchTermSet(e.target.value);
        const oldData = articleData?.articles;
        let newArr = articleData.articles.filter(val => val.title.toLowerCase().indexOf(
            searchTerm.toLocaleLowerCase()) !== -1);
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
        <div style={{ marginTop: "10%" }} data-testid="filter_input">
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
                <div data-testid="article-list">
                    <ArticleListComponent
                        articleData={searchTerm === "" ? 
                        articleData.articles.slice(0, initialDataLength) 
                        : articleArrayOnSearch}
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
                articleData.err?.response.status !== 500
                    ?
                    <div className="">
                        <div className="ui active inverted dimmer">
                            <div className="ui large text loader">Loading</div>
                        </div>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                    :
                    <ShowSnackOnError />
            }
        </div>
    )
}
const HomePage = React.memo(HomePageMemo);
export default HomePage;
