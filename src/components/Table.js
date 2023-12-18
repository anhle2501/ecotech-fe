import React, { useEffect, useState } from "react";
import Pencil from "./icon/Pencil";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

const headData = [
  "Chọn",
  "Mã KH",
  "Họ tên",
  "Chức danh",
  "ĐTDĐ",
  "Email",
  "Địa chỉ",
  "Thuộc tổ chức",
  "Ngày tạo",
  "Người tạo",
  "Thay đổi lúc",
  "Thay đổi bởi",
  "Mô tả"
];

// const data = [
//   {
//     id: "1",
//     code: "KH00001",
//     fullName: "Nhựt Anh",
//     title: "Giám đốc",
//     phone: "0374749933",
//     email: "nhut.anh2501@gmail.com",
//     address: "40/20 Lữ Gia",
//     organization: "CTY A",
//     createBy: "Nhựt Anh",
//   },
//   {
//     id: "2",
//     code: "KH00002",
//     fullName: "Nhựt Anh",
//     title: "Giám đốc",
//     phone: "0374749933",
//     email: "nhut.anh2501@gmail.com",
//     address: "40/20 Lữ Gia",
//     organization: "CTY A",
//     createBy: "Nhựt Anh",
//   },
//   {
//     id: "3",
//     code: "KH000013",
//     fullName: "Nhựt Anh",
//     title: "Giám đốc",
//     phone: "0374749933",
//     email: "nhut.anh2501@gmail.com",
//     address: "40/20 Lữ Gia",
//     organization: "CTY A",
//     createBy: "Nhựt Anh",
//   },
//   {
//     id: "4",
//     code: "KH00004",
//     fullName: "Nhựt Anh",
//     title: "Giám đốc",
//     phone: "0374749933",
//     email: "nhut.anh2501@gmail.com",
//     address: "40/20 Lữ Gia",
//     organization: "CTY A",
//     createBy: "Nhựt Anh",
//   },
//   {
//     id: "5",
//     code: "KH00005",
//     fullName: "Nhựt Anh",
//     title: "Giám đốc",
//     phone: "0374749933",
//     email: "nhut.anh2501@gmail.com",
//     address: "40/20 Lữ Gia",
//     organization: "CTY A",
//     createBy: "Nhựt Anh",
//   },
//   {
//     id: "6",
//     code: "KH00006",
//     fullName: "Nhựt Anh",
//     title: "Giám đốc",
//     phone: "0374749933",
//     email: "nhut.anh2501@gmail.com",
//     address: "40/20 Lữ Gia",
//     organization: "CTY A",
//     createBy: "Nhựt Anh",
//   },
//   {
//     id: "7",
//     code: "KH00007",
//     fullName: "Nhựt Anh",
//     title: "Giám đốc",
//     phone: "0374749933",
//     email: "nhut.anh2501@gmail.com",
//     address: "40/20 Lữ Gia",
//     organization: "CTY A",
//     createBy: "Nhựt Anh",
//   },
//   {
//     id: "8",
//     code: "KH00008",
//     fullName: "Nhựt Anh",
//     title: "Giám đốc",
//     phone: "0374749933",
//     email: "nhut.anh2501@gmail.com",
//     address: "40/20 Lữ Gia",
//     organization: "CTY A",
//     createBy: "Nhựt Anh",
//   },
//   {
//     id: "9",
//     code: "KH00009",
//     fullName: "Nhựt Anh",
//     title: "Giám đốc",
//     phone: "0374749933",
//     email: "nhut.anh2501@gmail.com",
//     address: "40/20 Lữ Gia",
//     organization: "CTY A",
//     createBy: "Nhựt Anh",
//   },
//   {
//     id: "10",
//     code: "KH00010",
//     fullName: "Nhựt Anh",
//     title: "Giám đốc",
//     phone: "0374749933",
//     email: "nhut.anh2501@gmail.com",
//     address: "40/20 Lữ Gia",
//     organization: "CTY A",
//     createBy: "Nhựt Anh",
//   },
// ];

export default function Table({data}) {
  const [seletedRow, setSelectedRow] = useState([]);
  const [isOn, setIsOn] = useState(false);

  let hdStype = "border border-slate-400 p-2";
  let tdStyle = "border border-slate-300 p-2";

  function handleOnClickTableRow(e) {
    console.log(e);

  }

  function handleOnClickCheckBox(e) {
    
  }

  useEffect(() => {
    console.log(data)
  }) 

  

  return (
    <>
      <div className='grow overflow-x-auto overflow-y-auto '>
        <table className='border border-slate-400'>
          <thead className={hdStype + " bg-slate-300 "}>
            <tr className=''>
              {headData.map((e, index) => (
                <th key={index}  className={hdStype + " bg-slate-300 sticky top-0 border"}>{e}</th>
              ))}
            </tr>
          </thead>
          <tbody className='table-row-group'>
            {data.map((e, index) => (
              <tr
                key={index}
                className='hover:bg-slate-100 group '
              >
                <td className={tdStyle + " text-center"}>
                  <Link to={e.id} className='inline-block w-0 group-hover:w-3 group-hover:visible collapse'>
                    <Pencil className={"w-0 group-hover:w-3 group-hover:visible collapse"} />
                  </Link>
                   <input className='w-6 inline-block' type='checkbox'  />
                   
                </td>
                <td className={tdStyle}><Link to={e.id} className={'border-b-2 border-b-blue-700 text-blue-700'}>{e.code} </Link></td>
                <td className={tdStyle}>{e.name}</td>
                <td className={tdStyle}>{e.title}</td>
                <td className={tdStyle}>{e.phone}</td>
                <td className={tdStyle}>
                  {/* <div className='overflow-hidden truncate w-24'> */}
                  {e.email}
                  {/* </div> */}
                </td>
                <td className={tdStyle}>{e.address}</td>
                <td className={tdStyle}>{e.organization}</td>
                <td className={tdStyle}>{e.createAt}</td>
                <td className={tdStyle}>{e.createBy}</td>
                <td className={tdStyle}>{e.lastModifiedDate}</td>
                <td className={tdStyle}>{e.lastModifiedBy}</td>
                <td className={tdStyle}>{e.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='flex flex-row sticky bottom-0 bg-white w-full p-1 border border-slate-300'>
        <div className='grow'>Tổng số: </div>
        <select className='grow border border-cyan-950 text-center'>
            <option className='text-center'>20 dữ liệu trên trang</option>
            <option className='text-center'>30 dữ liệu trên trang</option>
            <option className='text-center'>40 dữ liệu trên trang</option>
        </select>
        <Pagination />
      </div>
    </>
  );
}
