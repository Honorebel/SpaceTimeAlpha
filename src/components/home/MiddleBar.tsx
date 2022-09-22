import React from 'react';
import HomeFeed from './Feed';
import HomePost from './Post';

function MiddleBar() {
    return (
        <div className="w-full h-full md:col-span-2 p-4">
          <HomePost />
          <HomeFeed />
        </div>
    );
}

export default MiddleBar;