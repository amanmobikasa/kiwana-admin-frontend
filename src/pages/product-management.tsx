import { DashboardHeadingCommon } from "@/common/dashboard-heading-common";
import { HeaderComponent } from "@/common/header-component";
import { SideBarSlider } from "@/components/customcomponents/sidebar-slider";
import { TabListDateFilter } from "@/components/customcomponents/tab-list-date-filter";
import { BasicLayout } from "@/layout/basic-layout";
import { useCallback, useEffect, useState } from "react";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { AddtoProductsForm } from "@/components/customcomponents/add-to-products-form";
import { useSelector } from "react-redux";
import DataTable from "@/common/common-table/data-table";
import { product_management_json } from "@/json/product-management-json";
import { product_management_columns } from "@/common/common-table/product-management-columns";
import { globalAddFunction } from "@/lib/global-add-function";

type ProductManagementProps = {};

const ProductManagement = ({}: ProductManagementProps) => {
  const [showSideBarSlider, setShowSideBarSlider] = useState<true | false>(
    false
  );
  const [ProductManagementJsonState, setProductManagementJsonState] = useState<object[]>(product_management_json); // setting the product json to the state
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

  const getFilterState = useCallback((filter_state : any) => {
    if(filter_state !== ""){
      console.log("filter_state", filter_state)
      setFilterState(filter_state)
    }else{
      setFilterState("")
    }
  },[filtersState, setFilterState])

  const update_data_product = useSelector(
    (state: any) => state.productCRUD.updateProduct
  );
  console.log("update_data_product", update_data_product);

  const handleSideBarSlider = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setShowSideBarSlider(true);
  };

  let formJsonField = AddtoProductsFormJson
// console.log('formJsonField', formJsonField)
  return (
    <>
      <BasicLayout>
        {showSideBarSlider ? (
          <SheetContent className="bg-bg-primary-bg-gray font-poppin">
            <SheetHeader>
              <SheetTitle>Add the Products here</SheetTitle>
              <SheetDescription>
                <AddtoProductsForm formJson={formJsonField} />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        ) : null}
        <div className="w-full font-poppin">
          <HeaderComponent />
        </div>
        <div>
          <DashboardHeadingCommon
          headingState="Products"
          buttonOneText="Export"
          buttonTwoText="Add to Product"
            clickAddtoProduct={(e) => handleSideBarSlider(e)}
          />
        </div>
        <div>
          <TabListDateFilter getFilterStateParent={getFilterState}  />
        </div>
        <div>
          <DataTable
            columnsData={ProductManagementJsonState}
            columnsHeadings={product_management_columns}
            filter_status={filtersState} // optional
          />
        </div>
      </BasicLayout>
    </>
  );
};

export default ProductManagement;

// create a json for add to products form in slider.

export const AddtoProductsFormJson = [
  {
    id: 1,
    value: "",
    datatype: "string",
    label: "Enter Product Name",
    type: "text",
    name: "product_name",
  },
  {
    id: 2,
    value: "",
    datatype: "number",
    label: "Enter Product SKU",
    type: "number",
    name: "order_id",
  },
  {
    id: 3,
    value: "",
    datatype: "string",
    label: "Enter Product Category",
    type: "text",
    name: "customer_name",
  },
  {
    id: 4,
    value: "",
    label: "Enter Product Stock",
    type: "number",
    name: "payment_date",
    datatype: "number",
  },
  {
    id: 5,
    value: "",
    datatype: "number",
    label: "Enter Product Price",
    type: "number",
    name: "total_amount",
  },
  {
    id: 6,
    value: "",
    datatype: "string",
    label: "Enter Product Status",
    optionValue : ["Published", "Low Stock", "Draft", "Out of Stock"],
    type: "text",
    name: "status",
  },
  {
    id: 6,
    value: "",
    datatype: "string",
    label: "Enter Date of Product",
    type: "date",
    name: "date",
  },
];
