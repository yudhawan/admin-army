import React, { useState } from 'react'

function LineChartPersonil() {
    const point=[100,75,50,25,0]
    const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    return (
    <div className='flex flex-col rounded-xl p-4 bg-white space-y-4'>
        <div className='flex justify-between'>
            <p className='text-gray-600 font-semibold'>Statistik Kemampuan Personil</p>
            <div className='flex space-x-3'>
                <div className='flex space-x-1'>
                    <div className='w-3 h-3 bg-green-600 rounded-md'></div>
                    <p className='text-xs text-gray-600'>Den 1</p>
                </div>
                <div className='flex space-x-1'>
                    <div className='w-3 h-3 bg-yellow-600 rounded-md'></div>
                    <p className='text-xs text-gray-600'>Den 2</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <div className='flex space-x-1'>
                <div className='h-44 w-auto flex flex-col justify-end space-y-5'>
                    {point.map((val,index) => <p key={index} className='text-gray-500 text-xs'>{val}</p>)}
                </div>
                <div className='relative border border-l-gray-300 border-b-gray-300 border-t-white border-r-white w-[34rem] h-44'>
                    
                    <svg className='w-full absolute h-44 bottom-0 -left-7'  version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 200 Q 95 10 530 80" stroke="green" fill="transparent"/>
                    </svg>
                    <svg className='w-full absolute h-44 bottom-0 -left-7' version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 200 Q 85 30 530 10" stroke="orange" fill="transparent"/>
                    </svg>
                    
                </div>
            </div>
            <div className='flex w-full justify-center space-x-5 ml-[1.25rem]'>
                {months.map((val,index)=> <p key={index} className='text-gray-500 text-xs'>{val}</p>)}
            </div>
        </div>
    </div>
  )
}

export default LineChartPersonil