import { columns } from "@/common/common-table/columns";
import  DataTable  from "@/common/common-table/data-table";
import { DatePickerWithRange } from "@/common/date-range-picker";
import {BarChartComponent} from "@/components/customcomponents/bar-chart";
import CardCircleGraph from "@/components/customcomponents/card-circle-graph";
import { MultipleRangeComponent } from "@/components/customcomponents/multiple-range-component";
import { latest_order_json } from "@/json/latest-order-json";
// import { TooltipCustom } from "@/components/customcomponents/tooltip-custom";
import { BasicLayout } from "@/layout/basic-layout";
import { Flex, Heading } from "@radix-ui/themes";

const DashboardPage = () => {
  return (
    <>
      <BasicLayout>
        <div className="w-full flex justify-between items-center">
          <Heading as="h1" className="text-gray-800">
            Dashboard
          </Heading>
          <div>
            <DatePickerWithRange />
          </div>
        </div>
        <Flex className="w-full" gap={"3"}>
            <CardCircleGraph
              color="border-indigo-500"
              title="Total Sales"
              rupees={1000}
              sold_item="We have sold 123 items"
            />
          <CardCircleGraph
            color="border-green-500"
            title="Total Revenue"
            rupees={2000}
            sold_item="Profit made so today so far"
          />
          <CardCircleGraph
            color="border-orange-500"
            title="User Count"
            rupees={31000}
            sold_item="Total user sign to the ex iphones"
          />
        </Flex>
        <div className="mt-3">
          <div className="grid grid-cols-3 justify-evenly gap-x-3">
            <div className="col-span-2 w-full h-full">
              <BarChartComponent />
            </div>
            <div>
              <MultipleRangeComponent/>
            </div>
          </div>
        </div>
        <div>
          <DataTable columnsHeadings={columns} columnsData={latest_order_json} />
          {/* <DataTable /> */}

        </div>
      </BasicLayout>
    </>
  );
};

export default DashboardPage;
