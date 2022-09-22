import React from 'react';
import HomeJoinedSpace from './JoinedSpace';
import HomeProfile from './Profile';
import HomeSkills from './Skills';
import HomeMyideas from './MyIdeas';

function LeftBar() {
    return (
        <div className="w-full h-full p-4 lg:max-w-[350px] mx-auto  flex justify-center flex-col">
            <HomeProfile />
            <HomeMyideas />
            <HomeSkills />
        </div>
    );
}

export default LeftBar;