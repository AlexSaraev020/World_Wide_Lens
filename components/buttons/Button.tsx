import React from 'react'
interface ButtonProps {
    children: string;
    method?: () => void;
}
export default function Button(props:ButtonProps) {
  return (
    <button onClick={props.method} className='border-2 border-black p-1 text-xl focus:outline-none text-white bg-zinc-700 font-bold'>
      {props.children}
    </button>
  )
}
