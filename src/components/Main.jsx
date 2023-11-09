import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import PageNotFound from './PageNotFound';
import AboutUs from './aboutUs';
import ContactUs from './contactUs';
import Schedule from './schedule';
import Cricketers from './Cricketers';
import AllCricketers from './AllCricketers';
import PlayerInfo from './playerInfo';

const Main = () =>(
    <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* For user accessibilty perspective i should navigate to another path */}
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home/>} />
        {/* Nested Routing */}
        <Route path='/cricketer' element={<Cricketers />}>
            <Route path='allCricketers' element={<AllCricketers />}/>
            <Route path=':id' element={<PlayerInfo />} />
        </Route>
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='*' element={<PageNotFound />} />
    </Routes>
)

export default Main;