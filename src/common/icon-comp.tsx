// import React from 'react'
import logo from '../assets/logo.png';

type IconCompProps ={
    iconClassname? : string | undefined,
    icon? : string ,
    alt ?: string | "logo"
}

export const IconComp =({iconClassname, icon, alt} : IconCompProps)=> {
  return <>
    <div className="">
        <div className="w-full h-full flex justify-center items-center">
            <img src={icon ? icon : logo} className={iconClassname} alt={alt} />
        </div>
    </div>
  </>
  
}

