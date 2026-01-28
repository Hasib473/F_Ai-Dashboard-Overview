import React from 'react';
import DashboardHomeNavbar from '../../Components/DashboardOverview/DashboardHomeNavbar';
import StatsCards from '../../Components/DashboardOverview/StatsCard';
import CallTrendsChart from '../../Components/DashboardOverview/CallTrendsChart';
import ActivityDashboard from '../../Components/DashboardOverview/ActivityDashboard';

const DashboardHome = () => {
    return (
        <div>
            <DashboardHomeNavbar/>
            <div className='pl-5 pt-10'>
                <StatsCards/>
            </div>

            <div className='pl-5 pt-10'>
                <CallTrendsChart/>
            </div>
            
            <div className='pl-5 pt-10'>
                <ActivityDashboard/>
            </div>



        </div>
    );
};

export default DashboardHome;