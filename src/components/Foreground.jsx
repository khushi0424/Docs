import React, { useRef } from 'react'
import Cards from './Cards'
function Foreground() {
    // const data=[
    //   icon ,description ,filesize, closeOrDownload, tagDetails
    // ];

    const ref=useRef(null);
    
    const data=[
        {
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            filesize: ".9mb",
            close:false,
            tag:{ isOpen: true, tagTitle:"Upload" ,tagColor:"green" },
        },
        {
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            filesize: ".9mb",
            close:false,
            tag:{ isOpen: true, tagTitle:"Download Now" ,tagColor:"blue" },
    
        },
        {
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            filesize: ".9mb",
            close:false,
            tag:{ isOpen: true, tagTitle:"Upload" ,tagColor:"green" },
    
        }
    ];
    // useState()
  return (
    <>
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
    {data.map((item,index)=>(
        <Cards data={item} reference={ref}/>
    ))}
    </div>
    </>
  )
}

export default Foreground
