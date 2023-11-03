import React from 'react';

export default function ToolTips({
  content,
  children,
  className = '-bottom-8 -left-6',
}) {
  return (
    <>
      <div className='group relative w-max inline-block'>
        {children}
        <span
          className={
            'p-1 pointer-events-none absolute rounded  w-max opacity-0 transition-opacity group-hover:opacity-100 bg-black text-white ' +
            className
          }
        >
          {content}
        </span>
      </div>
    </>
  );
}
