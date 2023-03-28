import React, {Suspense} from 'react';
import SearchTabs from '../../components/Search';
import Brand from '../../components/Brand/Brand';

const Booker = React.lazy(()=> import("../../components/Booker"));
const AdvantagesCarousel = React.lazy(()=> import("../../components/AdvantagesCarousel"));

const HomePage = (props) => {
  return (
    <>
        <SearchTabs/>
        <Suspense fallback={<div>Loading...</div>}>
          <Booker/>
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <AdvantagesCarousel/>
        </Suspense>
        <Brand/>
    </>
  )
}


export default HomePage;
