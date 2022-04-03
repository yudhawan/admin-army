import {ChevronLeftIcon} from '@heroicons/react/outline'
function AddUser({handleAddshow}) {
  return (
    <div className='flex flex-col w-full justify-start bg-white p-5 rounded-xl'>
        <div className='flex items-center cursor-pointer w-fit' onClick={handleAddshow}>
            <ChevronLeftIcon className='text-red hover:text-hoveRed w-8 h-8' />
            <p className='text-red text-lg hover:text-hoveRed select-none'>Back</p>
        </div>
        <form className='flex flex-col space-y-2 mt-5'>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Nama</p>
                <div className='rounded-md border border-gray-400 bg-white py-1 w-72 px-2'>
                    <input type='text' className='outline-none w-full' placeholder='Agung Sanjaya' />
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Email</p>
                <div className='rounded-md border border-gray-400 bg-white py-1 w-72 px-2'>
                    <input type='email' className='outline-none w-full' placeholder='agungs@gmail.com' />
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Nomor Hp</p>
                <div className='rounded-md border border-gray-400 bg-white py-1 w-72 px-2'>
                    <input type='text' className='outline-none w-full' placeholder='085293833123' />
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Password</p>
                <div className='rounded-md border border-gray-400 bg-white py-1 w-72 px-2'>
                    <input type='password' className='outline-none w-full' placeholder='*********' />
                </div>
            </div>
            <button className='text-white bg-[#00a389] px-4 py-1 rounded-lg w-60' onClick={()=>{
                handleAddshow()
            }}>Simpan</button>
        </form>
    </div>
  )
}

export default AddUser