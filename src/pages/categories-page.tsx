import { DashboardHeadingCommon } from "@/common/dashboard-heading-common";
import { HeaderComponent } from "@/common/header-component";
import { AddtoProductsForm } from "@/components/customcomponents/add-to-products-form";
import { SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { BasicLayout } from "@/layout/basic-layout";
import { useState } from "react";

const CategoriesPage = () => {
  const [showSideBarSlider, setShowSideBarSlider] = useState<true | false>(
    false
  );

  const handleSideBarSlider = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setShowSideBarSlider(true);
  };

  let formJsonField = AddtoProductsFormJson
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
          headingState="Categories"
          buttonOneText="Export"
          buttonTwoText="Create Category"
          clickAddtoProduct={(e) => handleSideBarSlider(e)}
          />
        </div>
        
      </BasicLayout>
    </>
  );
};


export default CategoriesPage;

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
      type: "text",
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
      type: "text",
      name: "payment_date",
      datatype: "number",
    },
    {
      id: 5,
      value: "",
      datatype: "number",
      label: "Enter Product Price",
      type: "text",
      name: "total_amount",
    },
    {
      id: 6,
      value: "",
      datatype: "string",
      label: "Enter Product Status",
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
