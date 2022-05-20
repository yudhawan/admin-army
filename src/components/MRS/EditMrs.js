import React, { useRef } from 'react'
import {ChevronLeftIcon} from '@heroicons/react/outline'
function EditMrs({handleEdit,id}) {
    const file = useRef(null)
  return (
    <div className='bg-white rounded-lg w-full h-auto p-4 flex flex-col space-y-4'>
        <div className='flex space-x-1 items-center cursor-pointer' onClick={()=>handleEdit()}>
            <ChevronLeftIcon className='w-6 h-6 text-red hover:text-hoveRed'/>
            <p className='text-red hover:text-hoveRed'>Back</p>
        </div>
        <div className='flex gap-10'>
        <div className='flex-col space-y-2'>
            <div className='border w-60 h-fit border-gray-400 rounded-md px-2 py-1'><input type="text" placeholder='Nama Pasien' className='outline-none w-full' /></div>
            <div className='border w-60 h-30 border-gray-400 rounded-md px-2 py-1'><textarea type="text" placeholder='Riwayat Penyakit Sekarang' className='outline-none w-full' /></div>
            <div className='border w-60 h-30 border-gray-400 rounded-md px-2 py-1'><textarea type="text" placeholder='Pemeriksaan Fisik Lokal' className='outline-none w-full' /></div>
            <div className='border w-60 h-30 border-gray-400 rounded-md px-2 py-1'><textarea type="text" placeholder='Terapi' className='outline-none w-full' /></div>
            <div className='border w-60 h-30 border-gray-400 rounded-md px-2 py-1'><textarea type="text" placeholder='Diagnosis' className='outline-none w-full' /></div>
            <p className='text-gray-500'>Pemeriksaan Penunjang</p>
            <div className='flex space-x-2 border border-orange-400 rounded-md justify-center p-2'>
                <input hidden ref={file} type="file" className='outline-none w-40' />
                <div onClick={()=>file.current.click()} className='bg-green-500 rounded-md p-1 text-sm text-white'>Upload File</div>
                <div className='bg-slate-500 rounded-md p-1 text-sm text-white'>Download File</div>
            </div>
        </div>
        <div className='flex-col space-y-2'>
            <p className='text-gray-500'>Pemeriksaan Fisik :</p>
            <div className='border w-40 h-fit border-gray-400 rounded-md px-2 py-1'><input type="text" placeholder='Tensi' className='outline-none w-full' /></div>
            <div className='border w-40 h-fit border-gray-400 rounded-md px-2 py-1'><input type="text" placeholder='Nadi' className='outline-none w-full' /></div>
            <div className='border w-40 h-fit border-gray-400 rounded-md px-2 py-1'><input type="text" placeholder='Pernafasan' className='outline-none w-full' /></div>
            <div className='border w-40 h-fit border-gray-400 rounded-md px-2 py-1'><input type="text" placeholder='Suhu' className='outline-none w-full' /></div>
            <div className='border w-40 h-fit border-gray-400 rounded-md px-2 py-1'><input type="text" placeholder='Saturasi' className='outline-none w-full' /></div>
            <div className='border w-40 h-fit border-gray-400 rounded-md px-2 py-1'><input type="text" placeholder='GCS' className='outline-none w-full' /></div>
            <div className='flex-col space-y-1 border border-orange-500 rounded-md p-2'>
                <div className='border w-60 h-30 border-gray-400 rounded-md px-2 py-1'><textarea type="text" placeholder='Saran' className='outline-none w-full' /></div>
                <input type="date"/>
            </div>
        </div>
        </div>
        <button className='text-white bg-red hover:bg-hoveRed rounded-sm px-1 w-40'>Save</button>
    </div>
  )
}

export default EditMrs