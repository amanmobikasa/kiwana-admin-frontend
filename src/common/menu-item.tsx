// import React from 'react'

import { ReactElement } from "react"

type MenuItemProps = {
    title : string,
    icon? : any,
    iconClassname ? : string,
    headingClassname? : string
    onClick? : (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
    onHover? : (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export const MenuItem =({title, icon, iconClassname, headingClassname, onClick}: MenuItemProps)=> {
  return (
    <div onClick={onClick} className="w-full px-5 py-2 font-poppin relative">
        <div className="flex w-full items-center gap-x-4 ">
            <div className={iconClassname}>
                {icon}
            </div>
            <div>
                <h6 className={headingClassname}>{title}</h6>
            </div>
        </div>
    </div>
  )
}

