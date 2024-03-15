// dashboard navbar json

// import { CubeIcon, LayersIcon, FileTextIcon, FileIcon   } from "@radix-ui/react-icons"
import { RxDashboard, RxCube, RxGear   } from "react-icons/rx";
import { LuLayers, LuServer  } from "react-icons/lu";
import { RiCoupon2Line } from "react-icons/ri";
import { GoTag } from "react-icons/go";
import { TfiWallet } from "react-icons/tfi";
import { VscAccount } from "react-icons/vsc";
import { TfiHelp } from "react-icons/tfi";
import { IoIosLogOut } from "react-icons/io";
import { RiAdminLine } from "react-icons/ri";
import { GearIcon } from "@radix-ui/react-icons";



export const dashboard_navbar_json = [
    {
        id : 1,
        heading : "Menu",
        sub_navbar_list : [
            {
                id : 1.1,
                title : "Dashboard",
                icon : <RxDashboard className="h-full w-full" />,
                link : "/dashboard",
                slug : "dashboard",
            },
            {
                id : 1.2,
                title : "Products",
                icon : <RxCube className="h-full w-full"/>,
                link : "/products",
                slug : "products",
            },
            {
                id : 1.3,
                title : "Category",
                icon : <LuLayers className="h-full w-full"/>,
                link : "/category",
                slug : "category",
            },
            {
                id : 1.4,
                title : "Orders",
                icon : <LuServer className="h-full w-full"/>,
                link : "/orders",
                slug : "orders",
            },
            {
                id : 1.5,
                title : "Coupon",
                icon : <RiCoupon2Line className="h-full w-full"/>,
                link : "/coupon",
                slug : "coupon",
            },
            {
                id : 1.6,
                title : "Banner",
                icon : <GoTag className="h-full w-full"/>,
                link : "/banner",
                slug : "banner",
            },
            {
                id : 1.7,
                title : "Transaction",
                icon : <TfiWallet className="h-full w-full"/>,
                link : "/transaction",
                slug : "transaction",
            }

        ]
    },
    {
        id : 2,
        heading : "User Management",
        sub_navbar_list : [
            {
                id : 2.1,
                title : "Manage Admins",
                icon : <RiAdminLine className="h-full w-full"/>,
                link : "/manage-admin",
                slug : "manage-admin",
            },
            {
                id : 2.2,
                title : "Customers",
                icon : <VscAccount className="h-full w-full"/>,
                link : "/customers",
                slug : "customers",
            }
            
        ]
    },
    {
        id : 3,
        heading : "Setting",
        sub_navbar_list : [
            {
                id : 3.1,
                title : "Settings",
                icon : <GearIcon className="h-full w-full"/>,
                link : "/settings",
                slug : "settings",
            },
            {
                id : 3.2,
                title : "Help",
                icon : <TfiHelp className="h-full w-full"/>,
                link : "/help",
                slug : "help",
            },
            {
                id : 3.3,
                title : "Logout",
                icon : <IoIosLogOut className="h-full w-full"/>,
                link : "/logout",
                slug : "logout",
            }
        ]
    }
]