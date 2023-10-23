import React from "react";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import BellNotification from "./BellNotification";
import Profile from "./Profile";
import ButtonFeature from "./ButtonFeature";
import ChartPie from "./icon/ChartPie";
import Identification from "./icon/Identification";
import ShoppingCart from "./icon/ShoppingCart";
import Home from "./icon/Home";
import UserGroup from "./icon/UserGroup";
import Plus from "./icon/Plus";
import FeatureList from "./FeatureList";
import LoadingSpin from "./icon/LoadingSpin";
import Table from "./Table";
import Pagination from "./Pagination";
import TableColumnFilterList from "./TableColumnFilterList";

export function Layout2() {
  return (
    <>
      <div className='flex flex-row gap-4 p-0.5 '>
        <div className='self-center hover:bg-gray-200 rounded-lg'>
          <Home />
        </div>
        <div className='self-center'>
          <Logo />
        </div>
        <div className='self-center'> CRM </div>

        <div className='self-center flex-grow flex justify-center'>
          <SearchBox className={"w-1/2"} />
        </div>

        <div className='self-center hover:bg-gray-200 rounded-lg'>
          <BellNotification />
        </div>
        <div className='self-center hover:bg-gray-200 rounded-lg'>
          <Profile />
        </div>
      </div>

      <div className='flex flex-row gap-4 shadow-2xl'>
        <FeatureList
          listFeatures={[
            <ButtonFeature name='Bàn làm việc' icon={<ChartPie />} />,
            <ButtonFeature name='Khách hàng' icon={<Identification />} />,
            <ButtonFeature name='Đơn hàng' icon={<ShoppingCart />} />,
            <ButtonFeature name='Người dùng' icon={<UserGroup />} />,
          ]}
        />
      </div>
      <div className='flex flex-row gap-4 p-2 bg-gray-100'>
        <div>Tất cả liên hệ</div>

        <div>
          <button className='text-white bg-blue-500 px-2 rounded-sm shadow-md'>
            <Plus className={"w-4 -ml-1.5 -mr-0"} />
            Thêm
          </button>
        </div>
      </div>

      <div className='flex flex-row'>
        <div className='flex-initial h-screen'>
          Lọc liên hệ theo
          <TableColumnFilterList/>

        </div>
        <div className='flex flex-col w-screen h-screen'>
          <Table />
        </div>
      </div>
    </>
  );
}
