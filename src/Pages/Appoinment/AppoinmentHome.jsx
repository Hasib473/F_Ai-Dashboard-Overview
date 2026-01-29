import React from 'react';
import BookingDashboard from '../../Components/Appoinment/BookingDashboard';
import StatscardAppoinment from '../../Components/Appoinment/StatcardAppoinment';
import AppoinmentNavbar from '../../Components/Appoinment/AppoinmentNavbar';
import Pagination from '../../Components/Appoinment/Pagination';

const AppoinmentHome = () => {
    return (
        <div>
            <div>
                <AppoinmentNavbar/>
            </div>
            <div>
                <StatscardAppoinment/>
            </div>
            <BookingDashboard/>
            
            <div>
                <Pagination/>
            </div>
        </div>
    );
};

export default AppoinmentHome;