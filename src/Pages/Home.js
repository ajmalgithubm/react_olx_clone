import React from 'react';

import Header from '../component/Header/Header';
import Banner from '../component/Banner/Banner';

import Posts from '../component/Posts/Posts';
import Footer from '../component/Footer/Footer';

function Home(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <Posts />
      <Footer />
    </div>
  );
}

export default Home;