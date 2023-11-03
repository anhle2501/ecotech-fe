import React from 'react';
import ButtonFeature from './ButtonFeature';
import FeatureList from './FeatureList';
import Key from './icon/Key';
import User from './icon/User';
import Wrench from './icon/Wrench';
import Cog6tooth from './icon/Cog6tooth';

export default function ProfileMenu({ children, name, email }) {

  return (
    <>
      <div className={' absolute w-auto right-2 top-16  shadow z-10'}>
        <div className='flex flex-col w-auto h-auto relative bg-white shadow p-6 pb-1 px-3'>
          <div className=''>
            <div>{children}</div>
            <div>{name}</div>
            <div>{email}</div>
          </div>
          <FeatureList
            className='py-2 px-1'
            listFeatures={[
              <ButtonFeature name='Đổi mật khẩu' icon={<Key />} />,
              <ButtonFeature name='Thiết lập tài khoản' icon={<Cog6tooth />} />,
              <ButtonFeature name='Thiết lập bảo mật' icon={<Wrench />} />,
              <ButtonFeature name='Người dùng' icon={<User />} />,
            ]}
          />
        </div>

        <div
          className='flex flex-col bg-white hover:bg-slate-200 p-2 text-center rounded-b-lg shadow'
        >
          Đăng xuất
        </div>

      </div>
    </>
  );
}
