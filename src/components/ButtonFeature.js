import React from "react";

export default function ButtonFeature({
  name = "Chưa đặt tên nút",
  icon = null,
  className = null
}) {
  return (
    <>
      <button className='relative'>
        {icon}
        <p className={'inline-block relative top-1.5 right-1' + className }>{name}</p>
      </button>
    </>
  );
}
