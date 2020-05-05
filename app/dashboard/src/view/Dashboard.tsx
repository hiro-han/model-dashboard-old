import * as React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';


class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    );
  }
}
 
export default Dashboard;