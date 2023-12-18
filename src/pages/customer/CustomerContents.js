import React from 'react';
import Plus from '../../components/icon/Plus';
import Table from '../../components/Table';
import { useDispatch, useSelector } from 'react-redux'
import { getPage, getOne, getTwo, selectCustomer,getCustomerPage } from './CustomerSlice'
import TableColumnFilterList from '../../components/TableColumnFilterList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
export default function CustomerContents() {

  const customerStore = useSelector(selectCustomer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCustomerPage())
    
  },[dispatch]);
  
  return (
    <>
      <div className='flex flex-row gap-4 p-2 bg-gray-100'>
        <div>Tất cả liên hệ
        </div>
  
        <div>
          <button className='text-white hover:bg-blue-900 bg-blue-500 px-2 rounded-sm shadow-md '>
            <Plus className={'w-4 -ml-1.5 -mr-0'} />
            Thêm
          </button>
        </div>
      </div>

      <div className='flex lg:flex-row sm:flex-col'>
        <div className='flex-initial'>
          Lọc liên hệ theo
          <TableColumnFilterList />

        </div>
        <div className='flex flex-col w-screen h-screen'>
          <Table data={customerStore.customerList}/>
        </div>
      </div>
    </>
  )
}
