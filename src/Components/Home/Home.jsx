import React from 'react';

const Home = () => {
    return (
        <div className='text-[#fff]'>
            {/* =========== Title ======= */}
           {/* <header>
           <h1 className=''>Quiz Master App</h1>
           </header> */}
           {/* ============== section ======== */}
           <section className='flex w-[100%] h-[100vh]'>
            {/* ========== Quiz Part ======= */}
        <div className="quiz w-[75%]">
            <h1 className='text-xl font-roboto lg:text-3xl text-center py-6 font-semibold'>Quiz Master App</h1>
        </div>
        {/* ========= Money Part ===== */}
        <div className="money w-[25%]">
            <h2>Money Part</h2>
        </div>
           </section>
        </div>
    );
};

export default Home;