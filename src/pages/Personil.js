import {PlusIcon,SearchIcon,TrashIcon,PencilIcon} from '@heroicons/react/outline'
import { useState } from 'react'
import AddPersonil from '../components/Personil/AddPersonil'
import EditPersonil from '../components/Personil/EditPersonil'
function Personil() {
  const [addshow,setaddshow]=useState(false)
  const [editshow,seteditshow]=useState({id:1,show:false})
  const [deleteshow,setdeleteshow]=useState({id:1,show:false})
  const handleAddshow=()=> setaddshow(!addshow)
  const handleEditshow=(id=0)=> seteditshow({id:id,show:!editshow.show})
  const handleDeleteShow = (id=0)=> setdeleteshow({id:id,show:!deleteshow.show})
  return (
    <div  className='flex flex-col w-full h-full space-y-5'>
      {addshow?<AddPersonil handleAddshow={handleAddshow} />:editshow.show?<EditPersonil handleEditshow={handleEditshow}/>:<><div className='flex justify-between w-full'>
        <div className='bg-red hover:bg-hoveRed rounded-md flex justify-center items-center py-1 px-4 space-x-3 cursor-pointer' onClick={handleAddshow}>
            <PlusIcon className='w-7 h-7 text-white' />
            <p className='text-white'>Personil</p>
        </div>
        <div className='text-gray-400'>Total 1000 Users</div>
        <div className='flex space-x-10'>
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
        </div></>}
    </div>
  )
}

export default Personil