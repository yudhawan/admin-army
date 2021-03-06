import {PlusIcon,SearchIcon,TrashIcon,PencilIcon, DotsVerticalIcon,PhoneIcon, BriefcaseIcon,MailIcon,ShieldCheckIcon, FireIcon} from '@heroicons/react/outline'
import { useCallback, useEffect, useRef, useState } from 'react'
import {deletePersonil,getPersonilPagination} from '../features/personilSlice'
import {getSatuan} from '../features/catandlapSlice'
import { useDispatch,useSelector } from 'react-redux'
import AddPersonil from '../components/Personil/AddPersonil'
import EditPersonil from '../components/Personil/EditPersonil'
import DeletePersonil from '../components/Personil/DeletePersonil'
import host from '../features/host'
import {useLocation} from "react-router-dom";
function Personil() {
  const dispatch = useDispatch()
  const {loading,personilPagination,personilLength} = useSelector(state=>state.personil)
  const {satuan} = useSelector(state=>state.catandlap)
  const [page,setpage] = useState(1)
  const observer = useRef()
  const lastPersonilElement = useCallback(node=>{
    if(loading) return
    if(observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entry=>{
      if(entry[0].isIntersecting){
        setpage(page+1)
        dispatch(getPersonilPagination({page:page,query:search}))
      }
    })
    if(node) observer.current.observe(node)
  },[loading])
  const {pathname} = useLocation()
  const [search,setsearch] = useState("")
  const [filterSatuan,setFilterSatuan] = useState('')
  const [addshow,setaddshow]=useState(false)
  const [editdata,seteditdata] = useState(null)
  const [editshow,seteditshow]=useState({id:0,show:false})
  const [deleteshow,setdeleteshow]=useState({id:0,show:false})
  const [menu,setmenu]=useState(0)
  const handleAddshow=()=> setaddshow(!addshow)
  const handleEditshow=(id=0)=> {
    seteditdata(personilPagination.filter(val=>val.id==id)[0])
    seteditshow({id:id,show:!editshow.show})
  }
  const handleDeleteShow = (id=0)=> setdeleteshow({id:id,show:!deleteshow.show})
  
  useEffect(()=>{ 
    dispatch(getSatuan())
    dispatch(getPersonilPagination({page:page,query:search}))
   },[pathname])
  return (
    <div  className='flex flex-col w-full h-full space-y-5'>
      {addshow?<AddPersonil handleAddshow={handleAddshow} />:editshow.show?<EditPersonil handleEditshow={handleEditshow} satuan={satuan} person={editdata}/>:<><div className='flex justify-between w-full pr-16 space-x-1'>
        <div className='bg-red hover:bg-hoveRed rounded-lg flex justify-center items-center py-1 px-4 space-x-3 cursor-pointer' onClick={handleAddshow}>
            <PlusIcon className='w-7 h-7 text-white' />
            <p className='text-white'>Personil</p>
        </div>
        <div className='text-gray-400 hidden lg:block'>{personilLength} Personil</div>
        <div className='flex flex-col lg:flex-row lg:space-x-10'>
          <div className='flex justify-center items-center border border-gray-400 rounded-md px-2 space-x-1'>
            <SearchIcon className='text-gray-400 w-6 h-6' />
            <input type="text" placeholder='Search...' className='w-full outline-none bg-transparent' value={search} onChange={(e)=>setsearch(e.target.value)} />
          </div>
          <div className='flex justify-center items-center border border-gray-400 rounded-md px-4'>
            <select className='w-full outline-none bg-transparent' value={filterSatuan} onChange={(e)=>setFilterSatuan(e.target.value)}>
              <option value='' className='text-black w-full'>Filter</option>
              {
                satuan?.map((item,index)=> <option key={index+1} value={item.nama} className='text-black w-full'>{item.nama}</option>)
              }
            </select>
          </div>
        </div>
        </div>

        <div className='flex flex-wrap w-full gap-4'>
          {deleteshow.show&&<DeletePersonil handleDeleteShow={handleDeleteShow}/>}
          {personilPagination?.filter(val => val.satuan.toLowerCase().includes(filterSatuan.toLowerCase())).map((val,index)=>{
            if(personilPagination.length == index+1) return (
            <div ref={lastPersonilElement} className='bg-white rounded-xl flex space-x-2 p-4 w-60 h-56 relative' key={index+1}>
              <div className='flex-col space-y-2'>
                <div className='w-14 h-14 rounded-xl bg-gray-300'>
                  {val.picture?<img src={host+`/users/img/${val.picture}`} className="rounded-xl w-full h-full" />:<></>}
                </div>
                <div className='text-black text-sm font-semibold font-poppins line-clamp-1'>{val.nama}</div>
                <div className='text-gray-400 text-xs flex items-center'> <ShieldCheckIcon className='w-5 h-5'/>{val.pangkat}</div>
                <div className='flex space-x-1'>
                  <BriefcaseIcon className='w-4 h-4 text-red'/>
                  <p className='text-xs text-black line-clamp-1'>{val.jabatan}</p>
                </div>
                <div className='flex space-x-1'>
                  <PhoneIcon className='w-4 h-4 text-red'/>
                  <p className='text-xs text-black line-clamp-1'>{val.nohp}</p>
                </div>
                <div className='flex space-x-1'>
                  <FireIcon className='w-4 h-4 text-red'/>
                  <p className='text-xs text-black line-clamp-1'>{val.satuan?val.satuan:<>--</>}</p>
                </div>
              </div>
              <div className='flex-flex-col pt-4 absolute right-4 top-4'>
                <DotsVerticalIcon className='w-5 h-5 cursor-pointer hover:text-hoveRed' onClick={()=>{
                  if(menu) setmenu(0)
                  if(!menu) setmenu(val.id)
                  }}/>
                {(menu==val.id)?<div className='bg-white flex-col space-y-2 rounded-md p-2 border border-gray-300 absolute -left-10'>
                  <div className='flex space-x-1 cursor-pointer' onClick={()=>{
                    handleEditshow(val.id)
                    setmenu(0)
                    }}>
                    <PencilIcon className='w-4 h-4 text-green-500'/>
                    <p className='text-xs text-green-500'>Edit</p>
                  </div>
                  <div className='flex space-x-1 cursor-pointer' onClick={()=>{
                    dispatch(deletePersonil(val.id))
                    setmenu(0)
                    }}>
                    <TrashIcon className='w-4 h-4 text-rose-500'/>
                    <p className='text-xs text-rose-500'>Hapus</p>
                  </div>
                </div>:<></>}
              </div>
            </div>)
            return (
              <div className='bg-white rounded-xl flex space-x-2 p-4 w-60 h-56 relative' key={index+1}>
                <div className='flex-col space-y-2'>
                  <div className='w-14 h-14 rounded-xl bg-gray-300'>
                    {val.picture?<img src={host+`/users/img/${val.picture}`} className="rounded-xl w-full h-full" />:<></>}
                  </div>
                  <div className='text-black text-sm font-semibold font-poppins line-clamp-1'>{val.nama}</div>
                  <div className='text-gray-400 text-xs flex items-center'> <ShieldCheckIcon className='w-5 h-5'/>{val.pangkat}</div>
                  <div className='flex space-x-1'>
                    <BriefcaseIcon className='w-4 h-4 text-red'/>
                    <p className='text-xs text-black line-clamp-1'>{val.jabatan}</p>
                  </div>
                  <div className='flex space-x-1'>
                    <PhoneIcon className='w-4 h-4 text-red'/>
                    <p className='text-xs text-black line-clamp-1'>{val.nohp}</p>
                  </div>
                  <div className='flex space-x-1'>
                    <FireIcon className='w-4 h-4 text-red'/>
                    <p className='text-xs text-black line-clamp-1'>{val.satuan?val.satuan:<>--</>}</p>
                  </div>
                </div>
                <div className='flex-flex-col pt-4 absolute right-4 top-4'>
                  <DotsVerticalIcon className='w-5 h-5 cursor-pointer hover:text-hoveRed' onClick={()=>{
                    if(menu) setmenu(0)
                    if(!menu) setmenu(val.id)
                    }}/>
                  {(menu==val.id)?<div className='bg-white flex-col space-y-2 rounded-md p-2 border border-gray-300 absolute -left-10'>
                    <div className='flex space-x-1 cursor-pointer' onClick={()=>{
                      handleEditshow(val.id)
                      setmenu(0)
                      }}>
                      <PencilIcon className='w-4 h-4 text-green-500'/>
                      <p className='text-xs text-green-500'>Edit</p>
                    </div>
                    <div className='flex space-x-1 cursor-pointer' onClick={()=>{
                      dispatch(deletePersonil(val.id))
                      setmenu(0)
                      }}>
                      <TrashIcon className='w-4 h-4 text-rose-500'/>
                      <p className='text-xs text-rose-500'>Hapus</p>
                    </div>
                  </div>:<></>}
                </div>
              </div>)
          })}
          {loading&&[1,2,3,4,5].map(val=><div key={val} className='w-60 h-56 bg-white animate-pulse flex-col space-y-6 p-4 rounded-xl'>
            <div className='space-y-2 flex-col'>
              <div className='w-14 h-14 rounded-xl bg-gray-200'></div>
              <div className='w-16 h-3 rounded-lg bg-gray-200'></div>
            </div>
            <div className='space-y-2 flex-col'>
              <div className='w-28 h-3 rounded-lg bg-gray-200'></div>
              <div className='w-28 h-3 rounded-lg bg-gray-200'></div>
              <div className='w-28 h-3 rounded-lg bg-gray-200'></div>
              <div className='w-28 h-3 rounded-lg bg-gray-200'></div>
            </div>
          </div>)}
         
        </div>
        </>}
    </div>
  )
}

export default Personil