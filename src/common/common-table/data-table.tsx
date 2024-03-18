import { Table } from "@radix-ui/themes";
import {
  TriangleDownIcon,
  TriangleUpIcon,
  TrashIcon,
  Pencil1Icon,
  EyeOpenIcon,
} from "@radix-ui/react-icons";
import { Badge } from "@radix-ui/themes";
import { TooltipCustom } from "@/components/customcomponents/tooltip-custom";
import { globalSorting } from "@/lib/global-sorting";
import { useCallback, useState } from "react";

type DataTableTypes = {
  columnsHeadings: object[];
  columnsData: object[];
};

const DataTable = ({ columnsData, columnsHeadings }: DataTableTypes) => {
    const [columnsDataState, setColumnsDataState] = useState(columnsData);
    const [orderByState, setOrderByState] = useState<string>("asc");


    const handleSortingTable = useCallback((dataType : any, accessorKey : string) => {
        setOrderByState(orderByState === "asc" ? "desc" : "asc")
        const result = globalSorting(accessorKey, dataType, orderByState);
        setColumnsDataState(result)   
    }, [setColumnsDataState, columnsDataState])

  return (
    <>
      <Table.Root className="bg-white w-full rounded-xl mt-5 font-poppin">
        <Table.Header>
          <Table.Row className="h-[4rem]">
            {columnsHeadings &&
              columnsHeadings.map((heading: any, index: number) => {
                // console.log(heading)
                const { header, accessorKey, dataType } = heading;
                return (
                  <>
                    <Table.ColumnHeaderCell
                      key={index}
                      className="text-gray-800 text-[1rem] font-[500] space-x-4 first:flex  first:h-[4rem]"
                    >
                      {header === "Order ID" ? (
                        <input type="checkbox" className="h-4 w-4" />
                      ) : null}
                      <span className="flex cursor-pointer gap-x-3">
                        {header}{" "}
                        <span onClick={()=>handleSortingTable(dataType,accessorKey)}>
                            <TooltipCustom tooltipContent={"Sorting " + header}>
                                {orderByState === "asc" ? <TriangleDownIcon className="text-text-primary-gray " /> : <TriangleUpIcon className="text-text-primary-gray " />}
                            </TooltipCustom>
                        </span>
                      </span>
                    </Table.ColumnHeaderCell>
                  </>
                );
              })}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {columnsDataState &&
            columnsDataState.map((cell_data: any, index: number) => {
              return (
                <>
                  <Table.Row
                    align={"start"}
                    key={index}
                    className="text-text-primary-gray table-row odd:hover:bg-indigo-100 even:hover:bg-gray-100 h-[4rem]"
                  >
                    <Table.RowHeaderCell className="text-indigo-600 font-[500] hover:underline underline-offset-2 space-x-2">
                      <input type="checkbox" className="h-4 w-4" />
                      <span>{cell_data.order_id}</span>
                    </Table.RowHeaderCell>
                    {cell_data?.product_name &&
                      cell_data?.product_name.map((data: any) => {
                        const { image, name, quantity } = data;
                        return (
                          <>
                            <Table.Cell
                              justify={"start"}
                              className="flex items-center gap-1 justify-start  gap-x-7 h-[4rem]"
                            >
                              <div>
                                <img src={image} alt={name + "image render"} />
                              </div>
                              <div>
                                <h1 className="capitalize font-[500] text-gray-800">
                                  {name}
                                </h1>
                                <span className="text-text-primary-gray text-xs">
                                  +{quantity} Products
                                </span>
                              </div>
                            </Table.Cell>
                          </>
                        );
                      })}
                    <Table.Cell className="capitalize">
                      {cell_data?.date}
                    </Table.Cell>
                    <Table.Cell className="capitalize">
                      {cell_data?.customer_name}
                    </Table.Cell>
                    <Table.Cell>{cell_data?.total_amount}</Table.Cell>
                    <Table.Cell>{cell_data?.payment_date}</Table.Cell>
                    <Table.Cell className="w-auto">
                      {cell_data?.status === "pending" ? (
                        <Badge color="yellow">{cell_data?.status}</Badge>
                      ) : cell_data?.status === "processing" ? (
                        <Badge color="blue">{cell_data?.status}</Badge>
                      ) : cell_data?.status === "success" ? (
                        <Badge color="green">{cell_data?.status}</Badge>
                      ) : (
                        <Badge color="red">{cell_data?.status}</Badge>
                      )}
                      {/* <Badge color="orange">{cell_data?.status}</Badge> */}
                    </Table.Cell>
                    <Table.Cell>
                      {/* insert icons and give me product id */}
                      <div className="flex gap-2 items-center ">
                        <TooltipCustom tooltipContent="View the full product">
                          <EyeOpenIcon className="h-7 w-7 hover:bg-gray-200 p-1 rounded-full" />
                        </TooltipCustom>
                        <TooltipCustom tooltipContent="Edit the product">
                          <Pencil1Icon className="h-7 w-7 hover:bg-gray-200 p-1 rounded-full" />
                        </TooltipCustom>
                        <TooltipCustom tooltipContent="Delete the product">
                          <TrashIcon className="h-7 w-7 hover:bg-gray-200 p-1 rounded-full" />
                        </TooltipCustom>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                </>
              );
            })}
        </Table.Body>
      </Table.Root>
    </>
  );
};

export default DataTable;
