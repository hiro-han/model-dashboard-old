import * as React from 'react';
import ModelList, {Model} from './ModelList';


class Body extends React.Component {
  render() {
    const models : Model[] = [
      {
        id : 1,
        name : 'キハ40',
        maker : 'Tomix',
        product_number : '1234',
        memo : 'memo1',
      },
      {
        id : 2,
        name : 'キハ401',
        maker : 'Micro',
        product_number : '5678',
        memo : 'memo3',
      },
    ];

    return (
      <body className="body">
        <ModelList models = {models} />
      </body>
    );
  }
}
 
export default Body;