import React, { useEffect, useRef } from 'react'
import tmp from './tmp.png'
import puppy from './puppy.png'
import { toPng } from 'html-to-image';
function GenerateToImage({handleGenerateImg,generateimg}) {
  const component = useRef()
  useEffect(() => {
    generateimg&&toPng(component.current, { cacheBust: true, }).then((dataUrl) => {
      const link = document.createElement('a')
      link.download = 'tmp.png'
      link.href = dataUrl
      link.click()
      handleGenerateImg()
    }).catch((err) => {
      console.log(err)
    })
  }, [generateimg])
  
  return (
    <div ref={component} className='w-[787px] h-[978px] relative'>
      <img src={tmp} className="w-full hfull"/>
      <div className='w-[668px] h-[42rem] self-center absolute left-0 top-0 ml-[60px] mt-[154px] flex'>
        <img src={puppy} className="w-full h-full absolute  rounded-lg" />
        <div className='text-4xl bg-transparent backdrop-blur-md text-white z-20 w-fit h-fit absolute bottom-4'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate</div>
      </div>
    </div>
  )
}

export default GenerateToImage