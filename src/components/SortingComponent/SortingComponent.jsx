import React, { Component } from 'react';
import './SortingComponent.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';

class SortingComponent extends Component{
   render(){
      return(
         <div className="sorting-component">
           <div className="sort-type">Sort by date</div>
           <div className="sort-buttons">
              <div className="sort-button" 
               onClick={e => this.props.onClick(`up`)}
              >
                  <FontAwesomeIcon icon={faCaretUp} />
              </div>
              <div className="sort-button"
               onClick={e => this.props.onClick(`down`)}
              >
                  <FontAwesomeIcon icon={faCaretDown} />
              </div>
           </div>
         </div>
      );
   }
}
export default SortingComponent;