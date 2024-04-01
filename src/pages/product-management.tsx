import { DashboardHeadingCommon } from "@/common/dashboard-heading-common";
import { HeaderComponent } from "@/common/header-component";
import { SideBarSlider } from "@/components/customcomponents/sidebar-slider";
import { TabListDateFilter } from "@/components/customcomponents/tab-list-date-filter";
import { BasicLayout } from "@/layout/basic-layout";
import { useState } from "react";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { AddtoProductsForm } from "@/components/customcomponents/add-to-products-form";
import { useSelector } from "react-redux";

type ProductManagementProps = {};

const ProductManagement = ({}: ProductManagementProps) => {
  const [showSideBarSlider, setShowSideBarSlider] = useState<true | false>(
    false
  );

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
          <TabListDateFilter />
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
