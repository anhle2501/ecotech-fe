import React from 'react'
import Logo from '../components/Logo'
import SearchBox from '../components/SearchBox'
export function Layout() {
  return (
    <>
        <div className='flex flex-row bg-white '>
          <div className='flex gap-x-8 justify-center'>
            <div >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-8'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
                />
              </svg>
            </div>
            <div className='bg-red-100'> <Logo/> </div>
            <div className=''>CRM</div>
            <div className=''> <SearchBox/> 1</div>
          </div>
					
          
					<div className='flex flex-row-reverse grow gap-x-4'>
						<div>
							Profile
						</div>
						<div>
							Thông báo
						</div>
					</div>
        </div>

				<div className="flex flex-row gap-x-4">
					<div>Bàn làm việc</div>
					<div>Danh mục</div>
					<div>Báo giá</div>
					<div>Đặt hàng</div>
				</div>

				<div className="flex flex-row gap-x-4">
					<div> Tất cả liên hệ </div>
					<div className='flex flex-row-reverse grow gap-x-4'>

						<div>Chức năng khác</div>
						<div>Thêm</div>
						<div>Search bar 2</div>
					</div>
				</div>

				<div className="flex flex-row">
					<div className="flex flex-col"> 
					
						<div>Đặt hàng</div>
						
					</div>

				</div>
    </>
  )
}
