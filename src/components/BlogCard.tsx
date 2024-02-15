import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogCard = () => {
  return (
    <div className='rounded-lg shadow-md p-4 mb-4 overflow-hidden border border-gray-600 cursor-pointer'>
        <Link href={"/blog/23"}>
            <div>
                <Image 
                    layout="fill" 
                    objectFit='cover' 
                    src={""} alt={""} 
                    className='rounded-t-lg' 
                />
            </div>
            <div className='p-2'>
                <h2 className='text-xl font-semibold mb-2 overflow-ellipsis'>
                    Title of Blog
                </h2>
                <p className='text-grey-600'>This is the Description</p>
            </div>
        </Link>
    </div>
  )
}

export default BlogCard