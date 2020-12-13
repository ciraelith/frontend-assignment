import React, { Component } from 'react';

import ArticleItemComponent from './ArticleItemComponent/ArticleItemComponent';

class ArticleListComponent extends Component{
   constructor(props) {
      super(props);
    }
  
   render(){
      const { articles, sort } = this.props;
      // maybe it would be better to move it up and keep this component as pure function
      const months = [
            {id: '01', name: 'januar'},
            {id: '02', name: 'februar'},
            {id: '03', name: 'mars'},
            {id: '04', name: 'april'},
            {id: '05', name: 'mai'},
            {id: '06', name: 'juni'},
            {id: '07', name: 'juli'},
            {id: '08', name: 'august'},
            {id: '09', name: 'september'},
            {id: '10', name: 'oktober'},
            {id: '11', name: 'november'},
            {id: '12', name: 'desember'},
      ]
      const articlesListDates = articles ? articles.map(article => {
         const date = article.date.split(" ");
         const month = months.find(month => month.name === date[1]).id;
         const day = date[0].length === 2 ? `0${date[0]}` : date[0];
         const formatDay = day.split(".")[0];
         const dateString = `${month}/${formatDay}/${date[2]}`;
         const convertDate = new Date(dateString);
         return article = {...article, convertedDate: convertDate}
      }) : null ;
      const sortedArticlesArray  = articles 
      ? sort === `down` 
         ? articlesListDates.sort((a,b) => b.convertedDate - a.convertedDate)
         : articlesListDates.sort((a,b) => a.convertedDate - b.convertedDate)
      : null;
      return(
         <div>
           {!articles 
           ? "There was an error while loading the data."
           : sortedArticlesArray.map(article => (
              <ArticleItemComponent key={article.id} item={article} />
           ))
           }
         </div>
      );
   }
}
export default ArticleListComponent;