import React from 'react';
import HomeFeed from './HomeFeed';
import HomePost from './HomePost';

function HomeMiddle() {
    return (
        <div className="w-full h-full md:col-span-2 p-4">
          <HomePost />
          <HomeFeed />
        </div>
    );
}

export default HomeMiddle;