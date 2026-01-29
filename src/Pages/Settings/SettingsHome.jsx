import React from 'react';
import ProfileSection from '../../Components/Settings/ProfileSection';
import SettingsNavbar from '../../Components/Settings/SettingsNavbar';

const SettingsHome = () => {
    return (
        <div>
            <div>
                <SettingsNavbar/>
            </div>
            <div>
                <ProfileSection/>
            </div>
        </div>
    );
};

export default SettingsHome;