import React, { Component } from 'react';
import './DataSourcesComponent.scss';

class DataSourcesComponent extends Component{
   render(){
      const { checked } = this.props;
      return(
         <div className="dataSources-component">
             <h4 className="dataSources-header">Data Sources</h4>
             <ul className="unstyled centered">
                <li>
                    <input 
                        className="styled-checkbox" 
                        id="styled-checkbox-1" 
                        type="checkbox" 
                        value="fashion"
                        checked={checked === `fashion`}
                        onChange={e => this.props.onChange(`fashion`)}
                     />
                    <label htmlFor="styled-checkbox-1">Fashion</label>
                </li>
                <li>
                    <input 
                        className="styled-checkbox" 
                        id="styled-checkbox-2" 
                        type="checkbox" 
                        value="sports" 
                        checked={checked === `sports`}
                        onChange={e => this.props.onChange(`sports`)}
                     />
                    <label htmlFor="styled-checkbox-2">Sports</label>
                </li>
            </ul>
         </div>
      );
   }
}
export default DataSourcesComponent;