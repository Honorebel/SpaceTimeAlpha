import React from 'react';

function Home() {
    return (
        <>
        <h1>Home Page</h1>
        <a className='underline block' href="/login">Login</a>
        <a className='underline block' href="/signup">Signup</a>
        </>
    );
}

export default Home;