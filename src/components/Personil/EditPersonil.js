import {ChevronLeftIcon,CameraIcon,CheckCircleIcon,XCircleIcon} from '@heroicons/react/outline'
import { useEffect, useRef, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getPersonil,updatePersonil,resetStatus} from '../../features/personilSlice'
import { getSatuan } from '../../features/catandlapSlice'
import host from '../../features/host'
function EditPersonil({handleEditshow,satuan,person}) {
    const dispatch = useDispatch()
    const statusFetch = useSelector(state=>state.personil)
    const [data,setdata] = useState(()=>{
        return{
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
        nik:person.nik,
        email:person.email,
        password:'',
        bpjs:person.bpjs,
        asuransi_lainnya:person.asuransi_lainnya,
        kode_asabri:person.kode_asabri,
        riwayat_penyakit:person.riwayat_penyakit,
        stakes:person.stakes,
        riwayat_alergi:person.riwayat_alergi,
        alamat:person.alamat,}
    })
    const [validation,setvalidation] = useState('')
    const [image,setimage] = useState(()=>person.picture)
    const [filebpjs,setfilebpjs] = useState(null)
    const [picture,setpicture]=useState(null)
    const img = useRef()
    function validatonForm(){
        if(data.nama==='') return setvalidation('Nama tidak boleh kosong')
        if(data.pangkat==='') return setvalidation('Pangkat tidak boleh kosong')
        if(data.nohp==='') return setvalidation('Nomor HP tidak boleh kosong')
        if(data.agama==='') return setvalidation('Agama tidak boleh kosong')
        if(data.gol_darah==='') return setvalidation('Golongan Darah tidak boleh kosong')
        if(data.jabatan==='') return setvalidation('Jabatan tidak boleh kosong')
        if(data.spes==='') return setvalidation('Spesialisasi tidak boleh kosong')
        if(data.infiltrasi==='') return setvalidation('Infiltrasi tidak boleh kosong')
        if(data.status==='') return setvalidation('Status tidak boleh kosong')
        return submitForm()
    }
    function submitForm(){
        dispatch(updatePersonil({data:data,image:image,file:filebpjs}))
        // handleEditshow()
    }
       
    if(statusFetch?.status==200){
        setTimeout(()=>{
            dispatch(resetStatus())
            handleEditshow()
        },2000)
        return (
        <div className='absolute left-0 top-0 backdrop-blur-md bg-transparent flex justify-center items-center w-full h-screen'>
            <div className='w-60 h-60 rounded-xl bg-green-500 flex flex-col justify-center items-center space-y-2 relative'>
                {/* <XCircleIcon className='text-white bg-red rounded-full absolute top-1 right-1 w-10 h-10' /> */}
                <CheckCircleIcon className='text-white w-28 h-28' />
                <p className='text-white font-bold text-xl'>Berhasil</p>
            </div>
        </div>)
    }
  return (
    <>
    {statusFetch.loading&&<div className='absolute left-0 top-0 backdrop-blur-md bg-transparent flex justify-center items-center w-full h-screen'>
            <div className='w-60 h-60 rounded-xl bg-green-500 flex flex-col justify-center items-center space-y-2 relative'>
            <div className='w-40 h-40 rounded-full  border-t-white border-r-white border-4 animate-spin '></div>
                <p className='text-white font-bold text-xl'>Loading ...</p>
            </div>
        </div>}
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
            <img className='w-full h-full rounded-xl bg-cover' src={picture?picture:host+'/users/img/'+image} />
            <div onClick={()=> img.current.click()} className=' cursor-pointer flex rounded-full absolute bottom-1 right-1 bg-black p-1'><CameraIcon className='w-5 h-5 text-white'/></div>
        </div>
        <form className='flex-col space-y-4 mt-5'>
            <div className='flex flex-wrap gap-4'>
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
                        <select className='outline-none w-full' value={data.satuan} onChange={(e)=> setdata({...data, satuan:e.target.value})}>
                            <option selected disabled value={data.satuan}>{data.satuan}</option>
                            {
                                satuan?.map((val,index)=><option key={index+1} value={val.nama}>{val.nama}</option>)
                            }
                        </select>
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
                        <textarea type='text' className='outline-none w-full' value={data.pendidikan_umum} onChange={(e)=> setdata({...data, pendidikan_umum:e.target.value})}/>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <p className='font-poppins text-gray-500 text-lg'>Pend. Militer Umum</p>
                    <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                        <textarea type='text' className='outline-none w-full' value={data.pendidikan_militer} onChange={(e)=> setdata({...data, pendidikan_militer:e.target.value})}/>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <p className='font-poppins text-gray-500 text-lg'>DIKBANGPRES</p>
                    <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                        <textarea type='text' className='outline-none w-full' value={data.dikbangpres} onChange={(e)=> setdata({...data, dikbangpres:e.target.value})}/>
                    </div>
                </div>
                <div className='flex-col space-y-2'>
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
                                <option value="HUB">HUB</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-poppins text-gray-500 text-lg'>Kemampuan Infiltrasi</p>
                        <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                            <select className='outline-none w-full' value={data.infiltrasi} onChange={(e)=> setdata({...data, infiltrasi:e.target.value})}>
                                <option value="">--/--</option>
                                <option value="LAUT DAN UDARA">LAUT DAN UDARA</option>
                                <option value="LAUT">LAUT</option>
                                <option value="UDARA">UDARA</option>
                                <option value="DARAT">DARAT</option>
                            </select>
                        </div>
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
                
                <div className='flex flex-col'>
                    <p className='font-poppins text-gray-500 text-lg'>Nama Istri</p>
                    <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                        <input type='text' className='outline-none w-full' value={data.istri} onChange={(e)=> setdata({...data, istri:e.target.value})}/>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <p className='font-poppins text-gray-500 text-lg'>Nama Anak</p>
                    <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                        <textarea type='text' className='outline-none w-full h-20' value={data.anak} onChange={(e)=> setdata({...data, anak:e.target.value})}/>
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
                <div className='flex-col space-y-2'>
                    <div className='flex flex-col'>
                        <p className='font-poppins text-gray-500 text-lg'>Email</p>
                        <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                            <input type='email' className='outline-none w-full' value={data.email} onChange={(e)=> setdata({...data, email:e.target.value})}/>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-poppins text-gray-500 text-lg'>Password</p>
                        <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                            <input type='password' className='outline-none w-full' value={data.password} onChange={(e)=> setdata({...data, password:e.target.value})}/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <p className='font-poppins text-gray-500 text-lg'>Alamat</p>
                    <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                            <textarea type='text' className='outline-none w-full' value={data.alamat} onChange={(e)=> setdata({...data, alamat:e.target.value})}/>
                        </div>
                </div>
            </div>
            <div className='flex-col space-y-2'>
                <p className='text-gray-400 text-sm font-semibold'>Informasi Kesehatan</p>
                <div className='flex flex-wrap gap-4'>
                    <div className='flex flex-col'>
                        <p className='font-poppins text-gray-500 text-lg'>NIK</p>
                        <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                            <input type='text' className='outline-none w-full' value={data.nik} onChange={(e)=> setdata({...data, nik:e.target.value})}/>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-poppins text-gray-500 text-lg'>Nomor BPJS</p>
                        <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                            <input type='text' className='outline-none w-full' value={data.bpjs} onChange={(e)=> setdata({...data, bpjs:e.target.value})}/>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-poppins text-gray-500 text-lg'>Upload File BPJS</p>
                        <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                            <input type='file' className='outline-none w-full' onChange={(e)=> setfilebpjs(e.target.files[0])}/>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-poppins text-gray-500 text-lg'>Asuransi Lainnya</p>
                        <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                            <input type='text' className='outline-none w-full' value={data.asuasuransi_lainnya} onChange={(e)=> setdata({...data,asuransi_lainnya:e.target.value})}/>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-poppins text-gray-500 text-lg'>Kode ASABRI</p>
                        <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                            <input type='text' className='outline-none w-full' value={data.kode_asabri} onChange={(e)=> setdata({...data, kode_asabri:e.target.value})}/>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-poppins text-gray-500 text-lg'>Riwayat Penyakit</p>
                        <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                            <textarea type='text' className='outline-none w-full' value={data.riwayat_penyakit} onChange={(e)=> setdata({...data, riwayat_penyakit:e.target.value})}/>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-poppins text-gray-500 text-lg'>Stakes</p>
                        <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                            <input type='text' className='outline-none w-full' value={data.stakes} onChange={(e)=> setdata({...data, stakes:e.target.value})}/>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <p className='font-poppins text-gray-500 text-lg'>Riwayat Alergi</p>
                        <div className='rounded-md border border-[#ab54db] bg-white py-1 w-72 px-2'>
                            <input type='text' className='outline-none w-full' value={data.riwayat_alergi} onChange={(e)=> setdata({...data, riwayat_alergi:e.target.value})}/>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        {validation&&<div className='bg-rose-100 text-red py-1 px-2'>{validation}</div>}
        <button className='text-white bg-[#00a389] px-4 py-1 rounded-lg w-28 mt-5 self-end' onClick={()=>validatonForm()}>Simpan</button>
    </div>
  </>)
}

export default EditPersonil