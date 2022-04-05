import {ChevronLeftIcon} from '@heroicons/react/outline'
function EditPersonil({handleEditshow}) {
  return (
    <div className='flex flex-col w-full justify-start bg-white p-5 rounded-xl'>
        <div className='flex items-center cursor-pointer w-fit' onClick={handleEditshow}>
            <ChevronLeftIcon className='text-red hover:text-hoveRed w-8 h-8' />
            <p className='text-red text-lg hover:text-hoveRed select-none'>Back</p>
        </div>
        <div className='font-poppins text-gray-300 mt-5'>Update Data Personil</div>
        <form className='flex flex-wrap gap-4 mt-5'>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Nama</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <input type='text' className='outline-none w-full' />
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Pangkat</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <input type='text' className='outline-none w-full' />
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>NRP</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <input type='text' className='outline-none w-full' />
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Agama</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <select className='outline-none w-full'>
                        <option value="Islam">Islam</option>
                        <option value="Kristen">Kristen</option>
                        <option value="Hindu">Hindu</option>
                        <option value="Budha">Budha</option>
                        <option value="Konghucu">Konghucu</option>
                    </select>
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Gol. Darah</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <select className='outline-none w-full'>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="AB">AB</option>
                        <option value="O">O</option>
                    </select>
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Sumber TA</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <input type='text' className='outline-none w-full' />
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Suku Bangsa</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <input type='text' className='outline-none w-full' />
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Jabatan</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <input type='text' className='outline-none w-full' />
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Satuan</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <input type='text' className='outline-none w-full' />
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Tanggal Lahir</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <input type='date' className='outline-none w-full' />
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Pendidikan Umum</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <input type='text' className='outline-none w-full' />
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Pend. Militer Umum</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <input type='text' className='outline-none w-full' />
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>DIKBANGPRES</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <input type='text' className='outline-none w-full' />
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>SPES</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <input type='text' className='outline-none w-full' />
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Kemampuan Infiltrasi</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <input type='text' className='outline-none w-full' />
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Riwayat Jabatan</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <textarea type='text' className='outline-none w-full h-20' />
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Riwayat Penugasan DN</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <textarea type='text' className='outline-none w-full h-20' />
                </div>
            </div>
            <div className='flex-col space-y-1'>
                <div className='flex flex-col'>
                    <p className='font-poppins text-gray-500 text-lg'>Nama Istri</p>
                    <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                        <input type='text' className='outline-none w-full' />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <p className='font-poppins text-gray-500 text-lg'>Nama Anak</p>
                    <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                        <input type='text' className='outline-none w-full' />
                    </div>
                </div>
            </div>
            
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Riwayat Pangkat</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <textarea type='text' className='outline-none w-full h-20' />
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Riwayat Penugasan LN</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <textarea type='text' className='outline-none w-full h-20' />
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Prestasi</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <textarea type='text' className='outline-none w-full h-20' />
                </div>
            </div>
        </form>
        <button className='text-white bg-[#00a389] px-4 py-1 rounded-lg w-28 mt-5 self-end' onClick={()=>{
            handleEditshow()
        }}>Update</button>
    </div>
  )
}

export default EditPersonil