import React, { useEffect, useRef } from 'react'
import tmp from './tmp.png'
import { toPng } from 'html-to-image';
import host from '../../features/host'
function GenerateToImage({handleGenerateImg,showgenerateimg,image,title,format,handleShowMenu}) {
  const component = useRef()
  useEffect(() => {
    showgenerateimg&&toPng(component.current, { cacheBust: true, }).then((dataUrl) => {
      const link = document.createElement('a')
      link.download = 'tmp.png'
      link.href = dataUrl
      link.click()
      handleGenerateImg()
      handleShowMenu()
    }).catch((err) => {
      console.log(err)
    })
  }, [showgenerateimg])
  // console.log(generateimg)
  return (
    <div>
      <div ref={component} className='w-[787px] h-[978px] relative'>
        <img src={tmp} className="w-full hfull"/>
        {
        (format==1)?<div className='w-[668px] h-[42rem] self-center absolute left-0 top-0 ml-[60px] mt-[154px] flex'>
          <img src={host+'posts/img/'+image?.[0]} className="w-full h-full absolute  rounded-lg object-cover" />
          <div className='text-2xl bg-white px-1  text-[#000] w-fit h-fit absolute bottom-1 left-1'>{title}</div>
        </div>
        :<div className='w-[668px] h-[42rem] self-center absolute left-0 top-0 ml-[60px] mt-[154px] flex flex-wrap p-1 gap-1 bg-slate-400'>
            <img src={host+'posts/img/'+image?.[0]} className="w-[328px] h-[328px] rounded-lg object-cover" />
            <img src={host+'posts/img/'+image?.[1]} className="w-[328px] h-[328px] rounded-lg object-cover" />
            <img src={host+'posts/img/'+image?.[2]} className="w-[328px] h-[328px] rounded-lg object-cover" />
            <img src={host+'posts/img/'+image?.[3]} className="w-[328px] h-[328px] rounded-lg object-cover" />
            <div className='text-2xl bg-white px-1  text-[#000] w-fit h-fit absolute bottom-3 left-1'>{title}</div>
        </div>
        }
      </div>
    </div>
  )
}

export default GenerateToImage