import React from 'react';
import Banner from './Banner';
import FeatruedCategories from './FeatruedCategories';
import FeturedProduct from './FeturedProduct';
import NewArrivals from './NewArrivals';
import Services from './Services';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <FeturedProduct />
            <FeatruedCategories/>
            <NewArrivals/>
            <Services/>
        </div>
    );
};

export default Home;