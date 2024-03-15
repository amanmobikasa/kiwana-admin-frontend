// import React from 'react'

import { IconComp } from "./icon-comp";
import { MenuItem } from "./menu-item";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { dashboard_navbar_json } from "../json/dashboard-navbar-json";
import { NavLink } from "react-router-dom";

const DashboardNavbar = () => {
  return (
    <>
      <section className="w-2/12 h-full border-r-[0.01rem] bg-bg-primary-bg-gray ">
        <div className="py-[2rem] px-4 flex flex-col  justify-center w-full">
          <div className="mb-[1.8rem]">
            <IconComp iconClassname="h-[2.8rem]" />
          </div>
          {dashboard_navbar_json.map((items, i) => {
            return (
              <>
                <div key={i} className="section-div space-y-4 my-[1.5rem]">
                  <div>
                    <span className="uppercase text-xs tracking-widest font-bold line-clamp-1 text-indigo-500 ">
                      {items?.heading}
                    </span>
                  </div>
                  <div className="flex flex-col  gap-y-[1rem] w-full text-center items-center">
                    {items?.sub_navbar_list && items?.sub_navbar_list.map((item)=>{
                        return <>
                    <div className="hover:bg-indigo-100 text-text-primary-gray hover:text-indigo-500 w-full rounded-md">
                    <NavLink to={item?.link}>   
                      <MenuItem 
                        title={item?.title}
                        headingClassname="font-[500] "
                        icon={item.icon ? item.icon :
                          <HamburgerMenuIcon  />
                        }
                        iconClassname="h-[1.4rem] w-[1.4rem] "
                      />
                    </NavLink> 
                    </div>
                        </>
                    })

                    }
                    
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default DashboardNavbar;
