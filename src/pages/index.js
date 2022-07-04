import { BrowserRouter as Router,Route, Routes } from "react-router-dom";

import TabMenu from '../components/TabMenu';
import Header from "../components/Header";
import Home from './Home'
import Personil from './Personil'
import Users from './Users'
import Database from "./Database";
import Monitoring from './Monitoring'
import Laporan from './Laporan'
import NotFound from "./NotFound";
import PirantiLunak from './PirantiLunak'
import {PrivateRoute,PrivateElement} from '../hooks/PrivateRoute'
import Materill from "./Materill";
import StaffIntelijen from "./StaffIntelijen";
import StaffOperasi from "./StaffOperasi";
import StaffLogistik from "./StaffLogistik";
import Mrs from "./Mrs";
import StaffPerencanaan from "./StaffPerencanaan";
import StaffPersonil from "./StaffPersonil";
import LaporanKekuatan from './LaporanKekuatan'

function Main(){
    
    return(
        <div className="lg:p-2 lg:flex lg:space-x-5 ">
            <Router>
                <div className="flex justify-between w-full">
                <div className="w-[20%] lg:ml-5">
                    <PrivateElement>
                        <TabMenu/>
                    </PrivateElement>
                </div>
                <div className="pb-0 lg:pb-0 mt-12 lg:mt-20 p-2 lg:p-0 lg:w-[75%] lg:h-full lg:mr-5">
                <PrivateElement>
                    <Header />
                </PrivateElement>
                <Routes>
                    <Route element={<PrivateRoute/>}>
                        <Route path='/' element={<Home/>} />
                        <Route path='/mrs' element={<Mrs/>} />
                        <Route path='/sintelijen' element={<StaffIntelijen/>}/>
                        <Route path='/spersonil' element={<StaffPersonil/>}/>
                        <Route path='/soperasi' element={<StaffOperasi/>}/>
                        <Route path='/slogistik' element={<StaffLogistik/>}/>
                        <Route path='/sperencanaan' element={<StaffPerencanaan/>}/>
                        <Route path='/piranti_lunak' element={<PirantiLunak/>}/>
                        <Route path='/materill' element={<Materill/>} />
                        <Route path='/users' element={<Users/>} />
                        <Route path='/personil' element={<Personil/> } />
                        <Route path='/database' element={<Database/>} />
                        <Route path='/monitoring' element={<Monitoring/>} />
                        <Route path='/laporan' element={<Laporan/> } />
                        <Route path='/laporankekuatan' element={<LaporanKekuatan/>} />
                        <Route path='/*' element={<NotFound/>} />
                    </Route>
                </Routes>
                </div>
                </div>
            </Router>
        </div>
    )
}

export default Main;