import React from 'react';
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Cards({data,reference}) {
  return (
    <>
        <motion.div 
        drag 
        dragConstraints={reference} 
        whileDrag={{scale: 0.8}} 
        dragTransition={{bounceStiffness: 600, bounceDamping: 30}}
        className='relative flex-shirnk-0 w-60 h-80 rounded-[40px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
        <FaFileAlt />
            <p className='text-xl mt-5 font-semibold'>{data.desc}</p>
            <div className='footer absolute bottom-0 w-full h-15 left-0'>
                <div className='flex item-center justify-between px-8 mb-2'>
                    <h5>{data.filesize}</h5>
                    <span className='w-7 h-7 flex items-center justify-center'>
                        {data.close ? <IoClose/> :<LuDownload />}</span>
                </div>
                {
                    data.tag.isOpen && (
                        <div className={`tag w-full py-3 ${data.tag.tagColor === "blue" ? "bg-blue-300" : "bg-green-300"} flex items-center justify-center`}>
                        <h3 className='text-lg font-semibold'>{data.tag.tagTitle}</h3>
                        </div>
                    ) 
                }
                
            </div>
               

        </motion.div>
    </>
  )
}

export default Cards
