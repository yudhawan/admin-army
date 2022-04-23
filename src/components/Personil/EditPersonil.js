import {ChevronLeftIcon,CameraIcon} from '@heroicons/react/outline'
import { useEffect, useRef, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getPersonil,updatePersonil} from '../../features/personilSlice'
import host from '../../features/host'
function EditPersonil({handleEditshow,editshow}) {
    const dispatch = useDispatch()
    const {personil,loading} = useSelector(state=>state.personil)
    const person= personil?.filter(val=>val.id===editshow.id)[0]
    const [data,setdata] = useState({
        id:person.id,
        nama:person.nama,
        pangkat:person.pangkat,
        nrp:person.nrp,
        nohp:person.nohp,
        agama:person.agama,
        gol_darah:person.gol_darah,
        sumber_ta:person.sumber_ta,
        suku:person.suku,
        jabatan:person.jabatan,
        satuan:person.satuan, //optional
        tgl_lahir:person.tgl_lahir,
        pendidikan_umum:person.pendidikan_umum,
        pendidikan_militer:person.pendidikan_militer,
        dikbangpres:person.dikbangpres,
        spes:person.spes,
        infiltrasi:person.infiltrasi,
        riwayat_jabatan:person.riwayat_jabatan,
        riwayat_pangkat:person.riwayat_pangkat,
        riwayat_penugasan_dn:person.riwayat_penugasan_dn,
        riwayat_penugasan_ln:person.riwayat_penugasan_ln,
        istri:person.istri,
        anak:person.anak,
        prestasi:person.prestasi,
        status:person.status,
    })
    const [validation,setvalidation] = useState('')
    const [image,setimage] = useState(person.picture)
    const [picture,setpicture]=useState(null)
    const img = useRef()
    function validatonForm(){
        if(data.nama==='') return setvalidation('Nama tidak boleh kosong')
        if(data.pangkat==='') return setvalidation('Pangkat tidak boleh kosong')
        if(data.nrp==='') return setvalidation('NRP tidak boleh kosong')
        if(data.nohp==='') return setvalidation('Nomor HP tidak boleh kosong')
        if(data.agama==='') return setvalidation('Agama tidak boleh kosong')
        if(data.gol_darah==='') return setvalidation('Golongan Darah tidak boleh kosong')
        if(data.sumber_ta==='') return setvalidation('Sumber TA tidak boleh kosong')
        if(data.suku==='') return setvalidation('Suku tidak boleh kosong')
        if(data.jabatan==='') return setvalidation('Jabatan tidak boleh kosong')
        if(data.tgl_lahir==='') return setvalidation('Tanggal Lahir tidak boleh kosong')
        if(data.pendidikan_umum==='') return setvalidation('Pendidikan Umum tidak boleh kosong')
        if(data.pendidikan_militer==='') return setvalidation('Pendidikan Militer tidak boleh kosong')
        if(data.dikbangpres==='') return setvalidation('Dikbang Presiden tidak boleh kosong')
        if(data.spes==='') return setvalidation('Spesialisasi tidak boleh kosong')
        if(data.infiltrasi==='') return setvalidation('Infiltrasi tidak boleh kosong')
        if(data.riwayat_jabatan==='') return setvalidation('Riwayat Jabatan tidak boleh kosong')
        if(data.riwayat_pangkat==='') return setvalidation('Riwayat Pangkat tidak boleh kosong')
        if(data.riwayat_penugasan_dn==='') return setvalidation('Riwayat Penugasan DN tidak boleh kosong')
        if(data.riwayat_penugasan_ln==='') return setvalidation('Riwayat Penugasan LN tidak boleh kosong')
        if(data.istri==='') return setvalidation('Istri tidak boleh kosong')
        if(data.anak==='') return setvalidation('Anak tidak boleh kosong')
        if(data.prestasi==='') return setvalidation('Prestasi tidak boleh kosong')
        if(data.status==='') return setvalidation('Status tidak boleh kosong')
        return submitForm()
    }
    function submitForm(){
        dispatch(updatePersonil({data:data,image:image}))
        handleEditshow()
    }
    useEffect(()=>{
        dispatch(getPersonil())
    },[handleEditshow])
  return (
    <div className='flex flex-col w-full justify-start bg-white p-5 rounded-xl'>
        <input  type='file' hidden name="image" accept="image/*" ref={img} onChange={(e)=>{
            setimage(e.target.files[0])
            let pic = URL.createObjectURL(e.target.files[0])
            setpicture(pic)
        }} />
        <div className='flex items-center cursor-pointer w-fit' onClick={handleEditshow}>
            <ChevronLeftIcon className='text-red hover:text-hoveRed w-8 h-8' />
            <p className='text-red text-lg hover:text-hoveRed select-none'>Back</p>
        </div>
        <div className='font-poppins text-gray-300 mt-5'>Update Data Personil</div>
        <div className='w-40 h-40 relative self-center'>
            <img className='w-full h-full rounded-xl ' src={picture?picture:host+'/users/img/'+image} />
            <div onClick={()=> img.current.click()} className=' cursor-pointer flex rounded-full absolute bottom-1 right-1 bg-black p-1'><CameraIcon className='w-5 h-5 text-white'/></div>
        </div>
        <form className='flex flex-wrap gap-4 mt-5'>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Nama</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <input type='text' className='outline-none w-full' value={data.nama} onChange={(e)=> setdata({...data, nama:e.target.value})} />
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Pangkat</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <input type='text' className='outline-none w-full' value={data.pangkat} onChange={(e)=> setdata({...data, pangkat:e.target.value})} />
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>NRP</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <input type='text' className='outline-none w-full' value={data.nrp} onChange={(e)=> setdata({...data, nrp:e.target.value})} />
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>No. HP</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <input type='number' className='outline-none w-full' value={data.nohp} onChange={(e)=> setdata({...data, nohp:e.target.value})} />
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Agama</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <select className='outline-none w-full' value={data.agama} onChange={(e)=> setdata({...data, agama:e.target.value})}>
                        <option value="">--/--</option>
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
                    <select className='outline-none w-full' value={data.gol_darah} onChange={(e)=> setdata({...data, gol_darah:e.target.value})}>
                        <option value="">--/--</option>
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
                    <input type='text' className='outline-none w-full' value={data.sumber_ta} onChange={(e)=> setdata({...data, sumber_ta:e.target.value})} />
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Suku Bangsa</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <input type='text' className='outline-none w-full' value={data.suku} onChange={(e)=> setdata({...data, suku:e.target.value})}/>
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Jabatan</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <input type='text' className='outline-none w-full' value={data.jabatan} onChange={(e)=> setdata({...data, jabatan:e.target.value})}/>
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Satuan</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <input type='text' className='outline-none w-full' value={data.satuan} onChange={(e)=> setdata({...data, satuan:e.target.value})}/>
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Tanggal Lahir</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <input type='date' className='outline-none w-full' value={data.tgl_lahir} onChange={(e)=> setdata({...data, tgl_lahir:e.target.value})}/>
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Pendidikan Umum</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <input type='text' className='outline-none w-full' value={data.pendidikan_umum} onChange={(e)=> setdata({...data, pendidikan_umum:e.target.value})}/>
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Pend. Militer Umum</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <input type='text' className='outline-none w-full' value={data.pendidikan_militer} onChange={(e)=> setdata({...data, pendidikan_militer:e.target.value})}/>
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>DIKBANGPRES</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <input type='text' className='outline-none w-full' value={data.dikbangpres} onChange={(e)=> setdata({...data, dikbangpres:e.target.value})}/>
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>SPES</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <select className='outline-none w-full' value={data.spes} onChange={(e)=> setdata({...data, spes:e.target.value})}>
                        <option value="">--/--</option>
                        <option value="BAKDUK">BAKDUK</option>
                        <option value="DAKIBU">DAKIBU</option>
                        <option value="PAL">PAL</option>
                        <option value="KES">KES</option>
                        <option value="ZENI">ZENI</option>
                    </select>
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Kemampuan Infiltrasi</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <select className='outline-none w-full' value={data.infiltrasi} onChange={(e)=> setdata({...data, infiltrasi:e.target.value})}>
                        <option value="">--/--</option>
                        <option value="DARAT">DARAT</option>
                        <option value="LAUT">LAUT</option>
                        <option value="UDARA">UDARA</option>
                    </select>
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Riwayat Jabatan</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <textarea type='text' className='outline-none w-full h-20' value={data.riwayat_jabatan} onChange={(e)=> setdata({...data, riwayat_jabatan:e.target.value})}/>
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Riwayat Penugasan DN</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <textarea type='text' className='outline-none w-full h-20' value={data.riwayat_penugasan_dn} onChange={(e)=> setdata({...data, riwayat_penugasan_dn:e.target.value})}/>
                </div>
            </div>
            <div className='flex-col space-y-1'>
                <div className='flex flex-col'>
                    <p className='font-poppins text-gray-500 text-lg'>Nama Istri</p>
                    <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                        <input type='text' className='outline-none w-full' value={data.istri} onChange={(e)=> setdata({...data, istri:e.target.value})}/>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <p className='font-poppins text-gray-500 text-lg'>Nama Anak</p>
                    <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                        <input type='text' className='outline-none w-full' value={data.anak} onChange={(e)=> setdata({...data, anak:e.target.value})}/>
                    </div>
                </div>
            </div>
            
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Riwayat Pangkat</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <textarea type='text' className='outline-none w-full h-20' value={data.riwayat_pangkat} onChange={(e)=> setdata({...data, riwayat_pangkat:e.target.value})}/>
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Riwayat Penugasan LN</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <textarea type='text' className='outline-none w-full h-20' value={data.riwayat_penugasan_ln} onChange={(e)=> setdata({...data, riwayat_penugasan_ln:e.target.value})}/>
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Prestasi</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <textarea type='text' className='outline-none w-full h-20' value={data.prestasi} onChange={(e)=> setdata({...data,prestasi:e.target.value})}/>
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-poppins text-gray-500 text-lg'>Status</p>
                <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                    <select className='outline-none w-full' value={data.status} onChange={(e)=> setdata({...data, status:e.target.value})}>
                        <option value="">--/--</option>
                        <option value="tugas_operasi">TUGAS OPERASI</option>
                        <option value="recovery">RECOVERY</option>
                        <option value="siap_tugas">SIAP TUGAS</option>
                        <option value="non_job">NON JOB</option>
                        <option value="bp">BP</option>
                    </select>
                </div>
            </div>
        </form>
        {validation&&<div className='bg-rose-100 text-red py-1 px-2'>{validation}</div>}
        <button className='text-white bg-[#00a389] px-4 py-1 rounded-lg w-28 mt-5 self-end' onClick={()=>validatonForm()}>Simpan</button>
    </div>
  )
}

export default EditPersonil