import React from 'react';
import FormDetails from '../../components/FormDetails';

const data = [
  {
    name: 'Mã số thuế',
    placeHolder: 'Mã số thuế',
    id: 'taxCode',
    type: 'number',
  },
  {
    name: 'Điện thoại',
    placeHolder: '-Không chọn-',
    id: 'phone',
    type: 'tel',
  },
  {
    name: 'Ngành nghề',
    placeHolder: '-Không chọn-',
    id: 'business_type',
    type: 'text',
  },
  {
    name: 'Doanh thu',
    placeHolder: '-Không chọn-',
    id: 'income',
    type: 'text',
  },
]

const data_common = [
  {
    name: 'Mã khách hàng',
    id: 'id',
    type: 'number',
  },
  {
    name: 'Tên khách hàng',
    id: 'name',
    type: 'text',
  },
  {
    name: 'Tên viết tắt',
    id: 'shortName',
    type: 'text',
  },
  {
    name: 'Mã số thuế',
    id: 'taxCode',
    type: 'number',
  },
  {
    name: 'Điện thoại',
    id: 'phone',
    type: 'tel',
  },
  {
    name: 'Email',
    id: 'email',
    type: 'email',
  },
  {
    name: 'Liên hệ',
    id: 'contact',
    type: 'text'
  },
  {
    name: 'Khu vực',
    id: 'region',
    type: 'text',
  },
  {
    name: 'Ngày sinh',
    id: 'birthday',
    type: 'date',
  },
  {
    name: 'Nguồn gốc',
    id: 'origin',
    type: 'text',
  },
  {
    name: 'Lĩnh vực',
    id: 'businessField',
    type: 'text',
  },
]

const data_invoice = [
  {
    name: 'Quốc gia (Hóa đơn)',
    id: 'invoicenNation',
    type: 'text',
  },
  {
    name: 'Tỉnh/Thành phố (Hóa đơn)',
    id: 'invoiceCity',
    type: 'text',
  },
  {
    name: 'Quận/Huyện (Hóa đơn)',
    id: 'invoiceDistrict',
    type: 'text',
  },
  {
    name: 'Phường/Xã (Hóa đơn)',
    id: 'invoiceWard',
    type: 'text',
  },
  {
    name: 'Số nhà, đường phố (Hóa đơn)',
    id: 'invoiceStreet',
    type: 'text',
  },
  {
    name: 'Địa chỉ (Hóa đơn)',
    id: 'invoiceAddress',
    type: 'text',
  },
]

const data_delivery = [
  {
    name: 'Quốc gia (Giao hàng)',
    id: 'deliveryNation',
    type: 'text',
  },
  {
    name: 'Tỉnh/Thành phố (Giao hàng)',
    id: 'deliveryCity',
    type: 'text',
  },
  {
    name: 'Quận/Huyện (Giao hàng)',
    id: 'deliveryDistrict',
    type: 'text',
  },
  {
    name: 'Phường/Xã (Giao hàng)',
    id: 'deliveryWard',
    type: 'text',
  },
  {
    name: 'Số nhà, đường phố (Giao hàng)',
    id: 'deliveryStreet',
    type: 'text',
  },
  {
    name: 'Địa chỉ (Giao hàng)',
    id: 'deliveryAddress',
    type: 'text',
  },
]

const data_addition = [
  
    {
      name: 'Tài khoản ngân hàng',
      id: 'accountNumber',
      type: 'number',
    },
    {
      name: 'Mở tại ngân hàng',
      id: 'bankName',
      type: 'text',
    },
    {
      name: 'Doanh thu',
      id: 'income',
      type: 'text',
    },
    {
      name: 'Công nợ',
      id: 'debt',
      type: 'text',
    },
    {
      name: 'Website',
      id: 'website',
      type: 'url',
    },
    {
      name: 'Hạn mức nợ',
      id: 'debtThreshold',
      type: 'number',
    },
    {
      name: 'Số ngày được nợ',
      id: 'debtDay',
      type: 'number',
    },
  
]

const data_buying_statistic = [
  {
    name: 'Ngày mua gần nhất',
    id: 'latestBuyDate',
    type: 'date',
  },
  {
    name: 'Số ngày chưa mua hàng',
    id: 'numberOfDayFromLatest',
    type: 'number',
  },
  {
    name: 'Số lượng đơn hàng',
    id: 'orderCount',
    type: 'number',
  },
  {
    name: 'Doanh số đơn hàng',
    id: 'totalOrderAmount',
    type: 'number',
  },
  {
    name: 'Giá trị đơn hàng',
    id: 'totalValueAmount',
    type: 'number',
  },
  {
    name: 'Số ngày trung bình giữa các lần mua',
    id: 'daysBetweenBuy',
    type: 'number',
  },
 
]

const data_description = [
  {
    name: 'Mô tả',
    id: 'description',
    type: 'text',
  },
]

const data_system = [
  {
    name: 'Nguời tạo',
    id: 'createBy',
    type: 'text',
    
  },
  {
    name: 'Ngày tạo',
    id: 'createDate',
    type: 'date',
  },
  {
    name: 'Người sửa',
    id: 'modifiedBy',
    type: 'text',
  },
  {
    name: 'Ngày sửa',
    id: 'modifiedDate',
    type: 'date',
  },
  
  
]

export default function CustomerDetails() {
  return (
    <>
    <div className='p-4'>
      <h2>CTY A</h2>

      <FormDetails data={data} />

      <nav>Nav bar</nav>

      <div>Thông tin chung</div>

      <FormDetails data={data_common} />


      <div>Thông tin hóa đơn</div>
      <FormDetails data={data_invoice} />
      <div>Thông tin giao hàng</div>
      <FormDetails data={data_delivery} />
      <div>Thông tin bổ sung</div>
      <FormDetails data={data_addition} />
      <div>Thông kê mua hàng</div>
      <FormDetails data={data_buying_statistic} />
      <div>Thông tin mô tả</div>
      <FormDetails data={data_description} />
      <div>Thông tin hệ thống </div>
      <FormDetails data={data_system} />

      </div>
    </>
  );
}
