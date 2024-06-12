import DataTable from "@/common/common-table/data-table";
import { DashboardHeadingCommon } from "@/common/dashboard-heading-common"
import { HeaderComponent } from "@/common/header-component"
import { TabListDateFilter } from "@/components/customcomponents/tab-list-date-filter";
import { coupon_management_columns } from "@/json/coupon-columns-json";
import { coupon_row_heading } from "@/json/coupon-row-heading-json";
import { coupon_tab_filter_list } from "@/json/coupon-tab-filter-json";
import { BasicLayout } from "@/layout/basic-layout"
import { useCallback, useState } from "react";


type TransactionPageProps={
    // contain all the props.
}

function TransactionPage() {
  const [filtersState, setFilterState] = useState<any>("");

    const handleSideBarSlider = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
      ) => {
        return null;
      };
      const getFilterData = useCallback((filter_state : any) => {
        if(filter_state !== ""){
          setFilterState(filter_state)
        }else{
          setFilterState("")
        }
      },[filtersState, setFilterState])
  return (
    <>
        <BasicLayout>
        <div className="w-full font-poppin">
          <HeaderComponent />
        </div>
        <div>
          <DashboardHeadingCommon
            headingState="Transaction"
            buttonOneText="Export"
            buttonTwoText="Add to Product"
            clickAddtoProduct={(e) => handleSideBarSlider(e)}
          />
        </div>
        <div>
          <TabListDateFilter tablist_json={coupon_tab_filter_list} getFilterStateParent={getFilterData} />
        </div>
        <div>
          <DataTable
            columnsData={coupon_management_columns}
            columnsHeadings={coupon_row_heading}
            filter_status={filtersState} // optional
          />
        </div>
        </BasicLayout>
    </>
  )
}

export default TransactionPage