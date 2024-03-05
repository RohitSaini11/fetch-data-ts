import React, { ReactNode } from 'react'

type ButtonProps = {
    _btnUrl:string,
    url:string,
    setUrl: React.Dispatch<React.SetStateAction<string>>,
    children:ReactNode
}

const Button = ({url,setUrl,_btnUrl,children}:ButtonProps) => {
  return (
    <button 
        className={url===_btnUrl ? 'btn-active':''}
        onClick={()=>{ setUrl(_btnUrl)}}>
        {children}
    </button>
  )
}

export default Button