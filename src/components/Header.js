import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import Logo from './Logo';
import SearchBox from './SearchBox';
import BellNotification from './BellNotification';
import Profile from './Profile';
import ButtonFeature from './ButtonFeature';
import ChartPie from './icon/ChartPie';
import Identification from './icon/Identification';
import ShoppingCart from './icon/ShoppingCart';
import Home from './icon/Home';
import UserGroup from './icon/UserGroup';

import FeatureList from './FeatureList';


import ToolTips from './ToolTips';
import ProfileMenu from './ProfileMenu';

export default function Header() {

  const [profileMenu, setProfileMenu] = useState(false);

  function openProfileMenu() {
    console.log(profileMenu)
    setProfileMenu(!profileMenu)
  }
  return (
    <>
      {profileMenu && <ProfileMenu children={<Profile />} />}

      <div className='flex flex-row gap-4 p-0.5 px-4'>
        <div className='self-center hover:bg-gray-200 rounded-lg'>
          <ToolTips children={<Home />} content={'Trang chủ'} className='-bottom-8 -left-0' />
        </div>
        <div className='self-center'>
          <button onClick={openProfileMenu}><Logo /></button>
        </div>
        <div className='self-center'> CRM </div>

        <div className='self-center flex-grow flex justify-center'>
          <SearchBox className={'w-1/2'} />
        </div>

        <div className='self-center hover:bg-gray-200 rounded-lg'>
          <ToolTips children={<BellNotification />} content={'Thông báo'} />
        </div>
        <div className={'self-center ' + (profileMenu === true ? 'bg-blue-200 rounded-lg': 'hover:bg-gray-200 rounded-lg ')}>
          <button onClick={openProfileMenu} ><Profile /></button>
        </div>
      </div>
      <div className='flex flex-row gap-4 shadow-2xl px-4'>
        <FeatureList
          listFeatures={[
            <NavLink
              to="/dashboard"
              className={({ isActive, isPending }) =>
                isPending ? "border-b-4" : isActive ? "border-b-4 text-blue-900 border-b-blue-900 py-1.5 px-0.5 slide" : ""
              }
            >
              <ButtonFeature name='Bàn làm việc' icon={<ChartPie />} />
            </NavLink>,
            <NavLink
              to="/customers"
              className={({ isActive, isPending, isTransitioning }) =>
                isPending ? "border-b-4" : isActive ? "border-b-4 text-blue-900 border-b-blue-900 py-1.5 px-0.5 slide" : ""
              }
            >
              <ButtonFeature name='Khách hàng' icon={<Identification />} />  </NavLink>,
            <NavLink
              to="/orders"
              className={({ isActive, isPending, isTransitioning }) =>
                isPending ? "border-b-4" : isActive ? "border-b-4 text-blue-900 border-b-blue-900 py-1.5 px-0.5 slide" : ""
              }
            >
              <ButtonFeature name='Đơn hàng' icon={<ShoppingCart />} /></NavLink>,
            <NavLink
              to="/users"
              className={({ isActive, isPending, isTransitioning }) =>
                isPending ? "border-b-4" : isActive ? "border-b-4 text-blue-900 border-b-blue-900 py-1.5 px-0.5 slide" : ""
              }>

              <ButtonFeature name='Người dùng' icon={<UserGroup />} /></NavLink>,
          ]}
        />
      </div>
    </>
  )
}
