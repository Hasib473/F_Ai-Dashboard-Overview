import React from 'react';
import Dashboard from '../../Components/CallLogs/Dashboard2';
import CallLogsNavbar from '../../Components/CallLogs/CallLogsNavbar';

const CallLogsHome = () => {
    return (
        <div>
            <CallLogsNavbar/>
            <Dashboard/>
        </div>
    );
};

export default CallLogsHome;