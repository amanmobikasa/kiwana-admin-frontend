import DataTable from "@/common/common-table/data-table";
import { DashboardHeadingCommon } from "@/common/dashboard-heading-common";
import { HeaderComponent } from "@/common/header-component";
import { TabListDateFilter } from "@/components/customcomponents/tab-list-date-filter";
import { BasicLayout } from "@/layout/basic-layout";
import { product_management_json } from "@/json/product-management-json";

import { useCallback, useEffect, useState } from "react";
// import { product_management_columns } from "@/common/common-table/product-management-columns";
import { useSelector } from "react-redux";
import { globalAddFunction } from "@/lib/global-add-function";
import { order_management_columns_json } from "@/json/orders-column-json";
import { orders_row_heading } from "@/json/orders-row-heading";

interface OrderProps {}

const OrderPage = ({}: OrderProps) => {
  const [ProductManagementJsonState, setProductManagementJsonState] = useState<object[]>(product_management_json); // setting the product json to the state.
  const [filtersState, setFilterState] = useState<any>("");

  const added_product_object = useSelector((state:any)=>  state.productCRUD.product);

  useEffect(()=>{
    // enter all the logic of update the table.
    if(added_product_object?.product_name){
      const result = globalAddFunction(ProductManagementJsonState, added_product_object);
      console.log("result", result);
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


  const handleSideBarSlider = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    return null;
  };

  return (
    <>
      <BasicLayout>
        <div className="w-full font-poppin">
          <HeaderComponent />
        </div>
        <div>
          <DashboardHeadingCommon
            headingState="Orders"
            buttonOneText="Export"
            buttonTwoText="Add to Product"
            clickAddtoProduct={(e) => handleSideBarSlider(e)}
          />
        </div>
        <div>
          <TabListDateFilter getFilterStateParent={getFilterData} />
        </div>
        <div>
          <DataTable
            columnsData={order_management_columns_json}
            columnsHeadings={orders_row_heading}
            filter_status={filtersState} // optional
          />
        </div>
      </BasicLayout>
    </>
  );
};

export default OrderPage;
