import React, { Component } from 'react';
import './App.scss';

import DataSourcesComponent from './components/DataSourcesComponent/DataSourcesComponent';
import ArticleListComponent from './components/ArticleListComponent/ArticleListComponent';
import SortingComponent from './components/SortingComponent/SortingComponent';

class App extends Component{
   constructor(props) {
      super(props);
  
      this.state = {
        source: `fashion`,
        sort: `up`,
        articles: null, 
      }
      this.onChange= this.onChange.bind(this);
      this.onSortChange= this.onSortChange.bind(this);

    }
   onChange(value) {
      this.setState({ source: value });

      this.fetchArticles(value);
   }
   onSortChange(value) {
      this.setState({ sort: value });
   }

   componentDidMount() {
      this.fetchArticles(this.state.source);
    }

    fetchArticles(source){
         fetch(`http://localhost:6010/articles/${source}`, {
           method: 'GET',
         })
           .then(
             (response) => {
                  if (response.ok) {
                  response.json().then(data => {
                     this.setState({articles: data.articles})
                  })
                  } else {
                     this.setState({articles: null})
                  }
               }  
           )
    }
   render(){
      const { source, sort, articles } = this.state;
      return(
         <div className="main-content">
            <div className="top-bar">
                  <DataSourcesComponent checked={source} onChange={this.onChange} />
                  <SortingComponent onClick={this.onSortChange} /> 
            </div>
            <div className="bottom-bar">
                  <div className="left-bar">
                     <DataSourcesComponent checked={source} onChange={this.onChange} />
                  </div>
                  <div className="right-bar">
                     <ArticleListComponent articles={articles} source={source} sort={sort} />
                  </div>
            </div>
         </div>
      );
   }
}
export default App;