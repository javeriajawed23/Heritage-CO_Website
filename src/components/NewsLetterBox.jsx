import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
        // You can add actual subscription logic here
    }
    
    return (
        <div className='mt-10 text-center'>
            {/* Heading */}
            <p className='text-2xl font-medium text-[#611627]'>Unlock 20% Off | Subscribe Today!</p>
            <p className='mt-3 text-[#4B0E1C]'>Don't miss out—unlock your savings now by subscribing below!</p>

            {/* Form */}
            <form onSubmit={onSubmitHandler} className='flex items-center w-full gap-3 pl-3 mx-auto my-6 border border-[#611627] sm:w-1/2 rounded-full overflow-hidden'>
                <input 
                    className='w-full outline-none px-4 py-3 text-[#4B0E1C] placeholder-[#83162d]' 
                    type="email" 
                    placeholder='Enter your email'
                    required 
                />
                <button 
                    type='submit' 
                    className='px-10 py-3 text-sm font-semibold text-[#4B0E1C] bg-[#E9C8C2] rounded-full shadow-md hover:bg-[#f0d7d2] transition'
                >
                    SUBSCRIBE
                </button>
            </form>
        </div>
    )
}

export default NewsLetterBox
