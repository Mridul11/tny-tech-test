import React from 'react';
import { Link } from 'react-router-dom';

const ArticleComponent = ({idx, obj }) => {
    return <div 
    key={idx}
    className="ui card" style={{ maxWidth: "100%", minWidth: "100%" }}>
        <div className="content" style={{ padding: 0 }}>
            <div className="ui items">
                <div className="item">
                    <div className="ui medium image">
                        <img src= {obj.urlToImage} />
                    </div>
                    <div className="content" style={{ padding: "1rem", }}>
                        <Link className="header" to={{ pathname:`/${idx}`, obj }}>{obj.title}</Link>
                        <div className="meta">
                            <span className="cinema">{obj.author}</span>
                        </div>
                        <div className="description">
                            <p>{obj.content}</p>
                        </div>
                        <div className="extra">
                            <div className="ui label">IMAX</div>
                            <div className="ui label"><i className="globe icon"></i> Additional Languages</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div >
}
export default ArticleComponent;