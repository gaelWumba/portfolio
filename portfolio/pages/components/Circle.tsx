import React from 'react'

type Props = {}

function Circle({}: Props) {
  return (
    <div className='relative'>
        <div className='absolute inset-1 border-[10px] border-[#f76236] rounded-full w-[500px] h-[500px] mt-32 blur-xl'/>
        <div className='absolute -inset-1 border-[10px] border-[#f76236] rounded-full w-[500px] h-[500px] mt-32 blur-xl'/>
        <div className='absolute inset-0 border-[10px] border-[#f76236] rounded-full w-[500px] h-[500px] mt-32 blur-2xl'/>
        <div className='absolute inset-0 border-[10px] border-[#f76236] rounded-full w-[500px] h-[500px] mt-32 blur-lg'/>
        <div className='absolute inset-0 border-[10px] border-[#f76236] rounded-full w-[500px] h-[500px] mt-32 blur-md'/>
        <div className='relative border-[15px] border-[#f76236] rounded-full w-[500px] h-[500px] mt-32'/>
    </div>
  )
}

export default Circle