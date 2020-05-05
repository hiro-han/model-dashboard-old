import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Card, CardHeader} from 'material-ui/Card';

export interface Model {
  id : number;
  name : string;
  maker : string;
  product_number : string;
  memo : string;
}


interface ModelListProps {
  models : Model[];
}


class ModelList extends Component<ModelListProps> {
  render() {
    const {models} = this.props;
    return (
      <>
        {models.map(m => (
          <>
            <div> {m.name} </div>
            <div> {m.maker} </div>
            <div> {m.product_number} </div>
            <div> {m.memo} </div>
          </>
        ))}
      </>
    );
  }
}

export default ModelList;