import React from 'react';
import New from './New';
import PropTypes from 'prop-types';

const NewsList = ({news}) => {    
    
    return (<div className="row">
        {news.map(newsName =>
            <New
            key = {newsName.pubblishedAt}
            newsName = {newsName} 
            />
        )}
    </div>
    )};

NewsList.propTypes = {
    news : PropTypes.array.isRequired
}
export default NewsList;