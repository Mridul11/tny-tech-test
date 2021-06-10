import React from 'react';
import { Link } from 'react-router-dom';

const ArticleComponent = ({ idx, obj }) => (
obj ? <div
        key={idx}
        className="ui card" style={{ maxWidth: "100%", minWidth: "100%" }}
        data-testid="article-start"
        >
        <div className="content" style={{ padding: 0 }}>
            
            <div className="ui items">
                <div className="item">
                    <div className="ui medium image">
                        <img 
                            src={obj.urlToImage} 
                        />
                    </div>
                    <div className="content" style={{ padding: "1rem", }}>
                        <Link className="header" to={{ pathname: `/${obj.title}`, obj }}>{obj.title.slice(0,50)} .....</Link>
                        <div className="meta">
                            <span className="cinema">{obj.author}</span>
                        </div>
                        <div className="description">
                            <p>{obj.content}</p>
                        </div>
                        <div className="extra">
                            <div className="ui label"><i className="user icon"></i>{obj.source?.name}</div>
                            <div className="ui label"><i className="time icon"></i> {obj.publishedAt} </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     : <p data-testid="article-start" >Loading... </p>
)
export default ArticleComponent;