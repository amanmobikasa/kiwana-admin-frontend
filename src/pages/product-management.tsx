import { DashboardHeadingCommon } from "@/common/dashboard-heading-common";
import { HeaderComponent } from "@/common/header-component";
import { SideBarSlider } from "@/components/customcomponents/sidebar-slider";
import { TabListDateFilter } from "@/components/customcomponents/tab-list-date-filter";
import { BasicLayout } from "@/layout/basic-layout";
import { useState } from "react";
import { Sheet, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { AddtoProductsForm } from "@/components/customcomponents/add-to-products-form";

type ProductManagementProps = {};

const ProductManagement = ({}: ProductManagementProps) => {
  const [showSideBarSlider, setShowSideBarSlider] = useState<true | false>(
    false
  );

  const handleSideBarSlider = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setShowSideBarSlider(true);
    console.log("executed");
  };

  return (
    <>
      <BasicLayout>
        <Sheet>
          {showSideBarSlider ? <SideBarSlider>
              <SheetHeader>
                <SheetTitle>Add the Products here</SheetTitle>
                <SheetDescription>
                  <AddtoProductsForm formJson = {AddtoProductsFormJson} />
                </SheetDescription>
              </SheetHeader>
          </SideBarSlider> : null}
          <div className="w-full font-poppin">
            <HeaderComponent />
          </div>
          <div>
            <DashboardHeadingCommon
              clickAddtoProduct={(e) => handleSideBarSlider(e)}
            />
          </div>
          <div>
            <TabListDateFilter />
          </div>
        </Sheet>
      </BasicLayout>
    </>
  );
};

export default ProductManagement;


// create a json for add to products form in slider.

export const AddtoProductsFormJson = [
  {
    id : 1,
    value : "",
    datatype : "string",
    label : "Enter Product Name",
    type : "text",
    name : "product_name"
  },
  {
    id : 2,
    value : "",
    datatype : "number",
    label : "Enter Product SKU",
    type : "text",
    name : "order_id"
  },
  {
    id : 3,
    value : "",
    datatype : "string",
    label : "Enter Product Category",
    type : "text",
    name : "customer_name"
  },
  {
    id : 4,
    value : "",
    label : "Enter Product Stock",
    type : "text",
    name : "payment_date",
    datatype : "number"
  },
  {
    id : 5,
    value : "",
    datatype : "number",
    label : "Enter Product Price",
    type : "text",
    name : "total_amount"
  },
  {
    id : 6,
    value : "",
    datatype : "string",
    label : "Enter Product Status",
    type : "text",
    name : "status"
  },
  {
    id : 6,
    value : "",
    datatype : "string",
    label : "Enter Date of Product",
    type : "date",
    name : "date"
  },
  
]  
