import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import TabMenu from '../components/TabMenu';
import Header from "../components/Header";
import Home from './Home'
import Personil from './Personil'
import Users from './Users'
import Database from "./Database";
import Monitoring from './Monitoring'
import Laporan from './Laporan'
function Main(){
    return(
        <div className="lg:p-2 lg:flex lg:space-x-5">
            <Router>
                <Header />
                <TabMenu/>
                <div className="lg:pl-80 pb-20 lg:pb-0 mt-12 lg:mt-20 p-2 lg:p-0 lg:w-full lg:h-full">
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/users' element={<Users/>} />
                    <Route path='/personil' element={<Personil/>} />
                    <Route path='/database' element={<Database/>} />
                    <Route path='/monitoring' element={<Monitoring/>} />
                    <Route path='/laporan' element={<Laporan/>} />
                </Routes>
                </div>
            </Router>
        </div>
    )
}

export default Main;