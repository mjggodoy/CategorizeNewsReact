import React from 'react';
import PropTypes from 'prop-types';

const New = ({newsName}) => {
    const {urlToImage, source} = newsName;
    const image = (urlToImage) ? 
        <div className="card-image">
            <img src={newsName.urlToImage} alt={newsName.title}/>
            <span className="card-title">{source.name}</span>
        </div>: null;
    
    return (
        <div className = "col s12 m6">
            <div className="card">
                {image}
                <div className="card-content">{newsName.title}</div>
                <div className="card-action">
                    <a href={newsName.url} target="_blank" rel="noopener noreferrer" className="waves-effect waves-light btn">Read this new</a>
                </div>
            </div>
        </div>
    );
};

New.propTypes = {
    newsName : PropTypes.object.isRequired,
}
export default New;


