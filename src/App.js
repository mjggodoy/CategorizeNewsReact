import React, { Component, Fragment} from 'react';
import Header from './Components/Header';
import NewsList from './Components/NewsList';
import Form from './Components/Form';

class App extends Component {

  state = {
    news : []
  }

  async componentDidMount() {
    
    this.retrieveNews();

  }

  retrieveNews = async (category = 'General') => {
    const url = "https://newsapi.org/v2/top-headlines?country=us&category="+category+"&apiKey=3e92f93b09ba4f8d835b25c2dbc694c6";
    const response = await fetch(url); 
    const news = await response.json();
    this.setState({
       news : news.articles
    })
  }

  render () {
    return (
      <Fragment>
        <Header
          title = "News from API"
        />
        <div className="container white contenedor-noticias">
          <Form
            retrieveNews = {this.retrieveNews}
          />
          <NewsList
            news = {this.state.news}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;
