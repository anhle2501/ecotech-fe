import React from "react";

export default function ButtonFeature({
  name = "Chưa đặt tên nút",
  icon = null,
}) {
  return (
    <>
      <button className=''>
        {icon}
        <p className='inline-block relative top-1.5 right-1'>{name}</p>
      </button>
    </>
  );
}
