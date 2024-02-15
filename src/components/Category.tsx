'use client'
import { categoryContext } from '@/context/CategoryContext'
import React, { useContext } from 'react'

const Category = ({cat}: any) => {
  const { category, changeCategory } = useContext(categoryContext);
  return (
    <div 
        onClick={() => changeCategory(cat.attributes.Title)} 
        className={`${
          cat.attributes.Title === category
            ? "bg-[#ffffff] text-black"
            : "bg-[#af8533]"
        }  p-4 rounded-lg shadow-md cursor-pointer`}
    >
        {cat.attributes.Title}
    </div>
  );
};

export default Category