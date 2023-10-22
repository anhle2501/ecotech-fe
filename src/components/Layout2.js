import React from "react";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import Bell from "./Bell";
import Profile from "./Profile";
import ButtonFeature from "./ButtonFeature";
import ChartPie from "./icon/ChartPie";
import Identification from "./icon/Identification";
import ShoppingCart from "./icon/ShoppingCart";
import Home from "./icon/Home";
import FeatureList from "./FeatureList";
export function Layout2() {
  return (
    <>
      <div class='flex flex-row gap-4 p-0.5 '>
        <div className='self-center hover:bg-gray-200 rounded-lg' >
          <Home />
        </div>
        <div className='self-center'>
          <Logo />
        </div>
        <div className='self-center'> CRM </div>

        <div className='self-center flex-grow'> </div>

        <div className='self-center hover:bg-gray-200 rounded-lg' >
          <Bell />
        </div>
        <div className='self-center hover:bg-gray-200 rounded-lg'>
         
          <Profile />
        </div>
      </div>

      <div class='flex flex-row gap-4'>
        <FeatureList
          listFeatures={[
            <ButtonFeature name='Bàn làm việc' icon={<ChartPie />} />,
            <ButtonFeature name='Khách hàng' icon={<Identification />} />,
            <ButtonFeature name='Đơn hàng' icon={<ShoppingCart />} />,
          ]}
        />
      </div>
    </>
  );
}
