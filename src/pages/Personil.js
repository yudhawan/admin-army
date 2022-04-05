import {PlusIcon,SearchIcon,TrashIcon,PencilIcon, DotsVerticalIcon,PhoneIcon, BriefcaseIcon,MailIcon,ShieldCheckIcon, FireIcon} from '@heroicons/react/outline'
import { useEffect, useState } from 'react'
import AddPersonil from '../components/Personil/AddPersonil'
import EditPersonil from '../components/Personil/EditPersonil'
import DeletePersonil from '../components/Personil/DeletePersonil'
function Personil() {
  const [addshow,setaddshow]=useState(false)
  const [editshow,seteditshow]=useState({id:1,show:false})
  const [deleteshow,setdeleteshow]=useState({id:1,show:false})
  const [menu,setmenu]=useState(0)
  const handleAddshow=()=> setaddshow(!addshow)
  const handleEditshow=(id=0)=> seteditshow({id:id,show:!editshow.show})
  const handleDeleteShow = (id=0)=> setdeleteshow({id:id,show:!deleteshow.show})
  // useEffect(()=>{ 
  //   if(menu){
  //     setTimeout(()=>{
  //       setmenu(0)
  //     },5000)
  //   }
  //  },[menu])
  return (
    <div  className='flex flex-col w-full h-full space-y-5'>
      {addshow?<AddPersonil handleAddshow={handleAddshow} />:editshow.show?<EditPersonil handleEditshow={handleEditshow}/>:<><div className='flex justify-between w-full pr-16 space-x-1'>
        <div className='bg-red hover:bg-hoveRed rounded-lg flex justify-center items-center py-1 px-4 space-x-3 cursor-pointer' onClick={handleAddshow}>
            <PlusIcon className='w-7 h-7 text-white' />
            <p className='text-white'>Personil</p>
        </div>
        <div className='text-gray-400 hidden lg:block'>Total 1000 Users</div>
        <div className='flex flex-col lg:flex-row lg:space-x-10'>
          <div className='flex justify-center items-center border border-gray-400 rounded-md px-2 space-x-1'>
            <SearchIcon className='text-gray-400 w-6 h-6' />
            <input type="text" placeholder='Search...' className='w-full outline-none bg-transparent' />
          </div>
          <div className='flex justify-center items-center border border-gray-400 rounded-md px-4'>
            <select className='w-full outline-none bg-transparent'>
              <option value='' className='text-black w-full'>Filter</option>
            </select>
          </div>
        </div>
        </div>

        <div className='flex flex-wrap w-full gap-4'>
          {deleteshow.show&&<DeletePersonil handleDeleteShow={handleDeleteShow}/>}
          {[1,2,3,4,5,6].map((val,index)=><div className='bg-white rounded-xl flex space-x-2 p-4 w-60 h-56 justify-between' key={index}>
            <div className='flex-col space-y-2'>
              <div className='w-14 h-14 rounded-xl bg-gray-300'></div>
              <div className='text-black text-sm font-semibold font-poppins line-clamp-1'>Ahmad Lefler Samawi</div>
              <div className='text-gray-400 text-xs flex items-center'> <ShieldCheckIcon className='w-5 h-5'/> Chief Tactical SUpervisor</div>
              <div className='flex space-x-1'>
                <BriefcaseIcon className='w-4 h-4 text-red'/>
                <p className='text-xs text-black line-clamp-1'>Jabatan</p>
              </div>
              <div className='flex space-x-1'>
                <PhoneIcon className='w-4 h-4 text-red'/>
                <p className='text-xs text-black line-clamp-1'>085123455323</p>
              </div>
              <div className='flex space-x-1'>
                <FireIcon className='w-4 h-4 text-red'/>
                <p className='text-xs text-black line-clamp-1'>Satuan</p>
              </div>
            </div>
            <div className='flex-flex-col pt-4 relative'>
              <DotsVerticalIcon className='w-5 h-5 cursor-pointer hover:text-hoveRed' onClick={()=>{
                if(menu) setmenu(0)
                if(!menu) setmenu(val)
                }}/>
              {(menu==val)?<div className='bg-white flex-col space-y-2 rounded-md p-2 border border-gray-300 absolute'>
                <div className='flex space-x-1 cursor-pointer' onClick={()=>handleEditshow(val)}>
                  <PencilIcon className='w-4 h-4 text-green-500'/>
                  <p className='text-xs text-green-500'>Edit</p>
                </div>
                <div className='flex space-x-1 cursor-pointer' onClick={()=>handleDeleteShow(val)}>
                  <TrashIcon className='w-4 h-4 text-rose-500'/>
                  <p className='text-xs text-rose-500'>Hapus</p>
                </div>
              </div>:<></>}
            </div>
          </div>)}
         
        </div>
        </>}
    </div>
  )
}

export default Personil