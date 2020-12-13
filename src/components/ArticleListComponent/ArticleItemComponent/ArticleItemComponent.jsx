import React from 'react';
import './ArticleItemComponent.scss';


function ArticleItemComponent(props) {
   const { item } = props;
   return(
      <div className="articleItem-component">
       <div className="articleItem-left">
          <img className="articleItem-image" src={item.image} />
       </div>
       <div className="articleItem-right">
          <div className="articleItem-top">
            <h4 className="articleItem-header-h4">{item.title}</h4>
            <div className="articleItem-span">{item.date}</div>
          </div>
          <div className="articleItem-bottom">
             {item.preamble} [preamble]
          </div>
       </div>
      </div>
   );
 }

export default ArticleItemComponent;