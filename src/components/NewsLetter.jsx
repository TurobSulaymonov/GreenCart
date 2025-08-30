import React from 'react'

const NewsLetter = () => {
  return (
  <div className="flex flex-col items-center justify-center text-center rounded-xl w-full mt-24 pb-14">
            <div className="flex items-center justify-center p-3 bg-red-100 rounded-full">
                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/model/faceIcon.svg" alt="faceIcon" />
            </div>
            <h2 className="text-slate-900 font-medium mt-3 text-lg">Enjoying this post?</h2>
            <p className="text-sm text-slate-900/60 mt-1 md:w-80 w-72 text-center">Subscribe to get more content like this delivered to your inbox for free!</p>
            <form className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12">
                <input 
                    type="text" 
                    placeholder="Enter Your Email" 
                    className="border border-gray-300 rounded-md h-full border-r-0 outline-none  rounded-r-none px-3 w-full text-gray\" />
                <button type="button" className="md:px-12 px-8 h-full text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer rounded-md rounded-l-none">Subscribe</button>
            </form>
            <div className="w-full h-px bg-gray-500/20 mt-5"></div>

        </div>
  )
}

export default NewsLetter