import { ButtonCommon } from "./button-common";
import { SlidersHorizontal } from "lucide-react";
import { TabComponent } from "./tabs-component";
import DataTable from "@/common/common-table/data-table";
import { product_management_columns } from "@/common/common-table/product-management-columns";
// import { latest_order_json } from "@/json/latest-order-json";
import { product_management_json } from "@/json/product-management-json";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { globalAddFunction } from "@/lib/global-add-function"
import { DatePickerDemo } from "./date-picker-button";



interface TabListDateFilterProps {
  children?: React.ReactNode;
}

export const TabListDateFilter = ({}: TabListDateFilterProps) => {

  const [ProductManagementJsonState, setProductManagementJsonState] = useState<object[]>(product_management_json); // setting the product json to the state.
  const [filtersState, setFilterState] = useState<any>("");
  const added_product_object = useSelector((state:any)=>  state.productCRUD.product);

  useEffect(()=>{
    // enter all the logic of update the table.
    if(added_product_object?.product_name){
      const result = globalAddFunction(ProductManagementJsonState, added_product_object);
      // console.log("result", result);
      setProductManagementJsonState(result);
    }
  },[added_product_object])

  const getFilterData = useCallback((filter_state : any) => {
    if(filter_state !== ""){
      setFilterState(filter_state)
    }else{
      setFilterState("")
    }
  },[filtersState, setFilterState])


  return (
    <>

      <div className="relative w-full h-fit overflow-hidden font-poppin mt-4">
        <div className="w-full p-2 flex items-center justify-between">
          <div>
            <TabComponent tabList={tab_list_json} getFilterData={getFilterData} />
          </div>
          <div className="space-x-5">
            <DatePickerDemo /> 
            <ButtonCommon className="bg-white border-gray-200 text-text-primary-gray space-x-2 rounded-xl px-4 hover:bg-indigo-100">
              <SlidersHorizontal className="h-4 w-4" />
              <span>Filters</span>
            </ButtonCommon>
          </div>
        </div>
        <div>
          <DataTable
            columnsData={ProductManagementJsonState}
            columnsHeadings={product_management_columns}
            filter_status={filtersState} // optional
          />
        </div>
      </div>

    </>
  );
};

interface tab_list_json_type {
  id: number;
  title: string;
  slug : string;
  link_href: string;
}

export const tab_list_json: tab_list_json_type[] = [
  {
    id: 1,
    title: "All Products",
    slug : "all-products",
    link_href: "/",
  },
  {
    id: 2,
    title: "Published",
    slug : "published",
    link_href: "/",
  },
  {
    id: 3,
    title: "Low Stock",
    slug : "low-stock",
    link_href: "/",
  },
  {
    id: 4,
    title: "Draft",
    slug : "draft",
    link_href: "/",
  },
  {
    id: 5,
    title: "Out of Stock",
    slug : "out-of-stock",
    link_href: "/",
  },
];
