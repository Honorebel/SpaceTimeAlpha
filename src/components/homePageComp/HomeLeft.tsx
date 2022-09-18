import React from 'react';
import HomeJoinedSpace from './HomeJoinedSpace';
import HomeProfile from './HomeProfile';
import HomeSkills from './HomeSkills';
import HomeMyideas from './HomeMyideas';

function HomeLeft() {
    return (
        <div className="w-full h-full p-4 lg:max-w-[350px] mx-auto  flex justify-center flex-col">
            <HomeProfile />
            <HomeMyideas />
            <HomeSkills />
        </div>
    );
}

export default HomeLeft;