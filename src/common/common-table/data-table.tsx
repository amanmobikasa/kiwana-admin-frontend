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
import { useCallback, useEffect, useState } from "react";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogTrigger,
} from "@radix-ui/react-alert-dialog";
import { ModalWrapper } from "../modal-wrapper";
import { globalDeleteFunction } from "@/lib/global-delete-function";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, updateProduct } from "@/redux/slices/product-CRUD";
// import { SideBarSlider } from "@/components/customcomponents/sidebar-slider";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AddtoProductsForm } from "@/components/customcomponents/add-to-products-form";
import { AddtoProductsFormJson } from "@/pages/product-management";
import { filterTableData, globalFilterData } from "@/lib/global-filter-data";
import { numberPrefixDollar } from "@/lib/number-prefix-dollar";
// import { globalDateConvert } from "@/lib/global-date-convert";

type DataTableTypes = {
  columnsHeadings: object[];
  columnsData: object[];
  filter_status? : string
};

const DataTable = ({ columnsData, columnsHeadings, filter_status }: DataTableTypes) => {
  const [columnsDataState, setColumnsDataState] = useState(columnsData);
  const [orderByState, setOrderByState] = useState<any>("asc"); // asc | desc | null>("asc");
  const [showModal, setShowModal] = useState(false);
  const [showSlider, setShowSlider] = useState<true | false>(false);
  const [currentProductState, setCurrentProductState] = useState<any>({});
  const [updateProductState, setUpdateProductState] = useState<object>({})
  const [filterState, setFilterState] = useState(filter_status)
  const dispatch = useDispatch();

  

  useEffect(()=>{
    if(filter_status !== undefined || filter_status !== ""){
      setFilterState(filter_status)
    }else return;
  },[filter_status])

 

  useEffect(() => {
    if (columnsData.length > 0) {
      setColumnsDataState(columnsData);
    } else return;
  }, [columnsData]);

  // for updating the product data in the table
  const updated_product_data = useSelector((state:any)=> state.productCRUD.updateProduct)

  // console.log("columnsDataState", columnsDataState)
  useEffect(()=>{
    if(updated_product_data?.product_name){
      const result_data = globalFilterData(columnsDataState, updated_product_data)
      setColumnsDataState(result_data)
    }
  },[updated_product_data])

  

  useEffect(() => {
    if (filterState !== undefined && filterState !== "") {
      if (columnsData.length > 0) {
        const result = filterTableData(columnsData, filterState);
        setColumnsDataState(result);
      }
    }
  }, [filterState, columnsData, filter_status]);


  const handleSortingTable = useCallback(
    (dataType: any, accessorKey: string) => {
      setOrderByState(orderByState === "asc" ? "desc" : "asc");
      const result = globalSorting(
        accessorKey,
        dataType,
        orderByState,
        columnsDataState
      );
      setColumnsDataState(result);
    },
    [setColumnsDataState, columnsDataState, columnsData]
  );

  // handle delete the product.
  const handleDeleteProduct = (e: any, product_obj: any) => {
    setShowModal(true);
    setCurrentProductState(product_obj); // setting the current product obj to state
  };
  const handleDeleteProductAction = () => {
    const reuslt_after_delete = globalDeleteFunction(
      columnsDataState,
      currentProductState?.id
    );
    dispatch(deleteProduct({})) // remove the update product reducer
    setColumnsDataState(reuslt_after_delete); // setting the updated data to the state and render in table
  };

  // update the product data in the table after edit
  const handleEditProduct = (e: any, product_obj: any) => {
    setShowSlider(true);
    setUpdateProductState(product_obj); // set the product obj to state for update
  };


  return (
    <>
      {showModal ? (
        <ModalWrapper
          title="Delete Product"
          btnTitle="Delete"
          description="Do you really want to delete the product"
        >
          <div className="flex w-full gap-x-5 justify-end">
            <AlertDialogCancel className="bg-gray-100 px-6 py-2 border-2 border-gray-200 hover:bg-gray-200">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteProductAction}
              className="bg-red-500 px-6 text-white border-2 border-red-500 hover:bg-red-600"
            >
              Delete
            </AlertDialogAction>
          </div>
        </ModalWrapper>
      ) : null}

      {/* show slider */}
      {showSlider ? (
          <SheetContent className="bg-bg-primary-bg-gray font-poppin">
            <SheetHeader>
              <SheetTitle>Update the Products here</SheetTitle>
              <SheetDescription>
                <AddtoProductsForm formJson={AddtoProductsFormJson} valueJsonData={updateProductState}  />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
      ) : null}
      

      <Table.Root className="bg-white w-full rounded-xl mt-5 font-poppin">
        <Table.Header>
          <Table.Row className="h-[4rem]">
            {columnsHeadings &&
              columnsHeadings.map((heading: any, index: number) => {
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
                        <span
                          onClick={() =>
                            handleSortingTable(dataType, accessorKey)
                          }
                        >
                          <TooltipCustom tooltipContent={"Sorting " + header}>
                            {orderByState === "asc" ? (
                              <TriangleDownIcon className="text-text-primary-gray " />
                            ) : (
                              <TriangleUpIcon className="text-text-primary-gray " />
                            )}
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
                    {Array.isArray(cell_data?.product_name) ? (
                      cell_data.product_name.map((data: any) => {
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
                      })
                    ) : (
                      <Table.Cell className="capitalize">
                        {/* {cell_data?.product_name} */}
                        <h1 className="capitalize  text-text-primary-gray">
                          {cell_data?.product_name} 
                        </h1>
                      </Table.Cell>
                    )}
                    
                    {cell_data?.customer_name && <Table.Cell className="capitalize">
                      {cell_data?.customer_name}
                    </Table.Cell>}

                    {(cell_data?.total_amount) ? <Table.Cell>{numberPrefixDollar(cell_data?.total_amount)}</Table.Cell> : null}

                   {cell_data?.payment_date ? <Table.Cell>{(typeof cell_data?.payment_date) === "number" ? numberPrefixDollar(cell_data?.payment_date) : cell_data?.payment_date }
                   </Table.Cell> : null}
                   {cell_data?.Date ? <Table.Cell>{cell_data?.Date}
                   </Table.Cell> : null}
                   {cell_data?.expiry_date ? <Table.Cell>{cell_data?.expiry_date}
                   </Table.Cell> : null}
                    {cell_data?.status && <Table.Cell className="w-auto">
                      {cell_data?.status === "pending" ||  cell_data?.status === "In Progress" ? (
                        <Badge color="yellow">{cell_data?.status}</Badge>
                      ) : cell_data?.status === "processing" ||
                        cell_data?.status === "Low Stock" || cell_data?.status === "Shipped" ? (
                        <Badge color="blue">{cell_data?.status}</Badge>
                      ) : cell_data?.status === "Draft" ? (
                        <Badge color="gray">{cell_data?.status}</Badge>
                      ) : cell_data?.status === "success" ||
                        cell_data?.status === "Published" || cell_data?.status === "Delivered" || cell_data?.status === "Active" ? (
                        <Badge color="green">{cell_data?.status}</Badge>
                      ) : (
                        <Badge color="red">{cell_data?.status}</Badge>
                      )}
                      {/* <Badge color="orange">{cell_data?.status}</Badge> */}
                    </Table.Cell>}
                    {cell_data?.date && <Table.Cell className="capitalize">
                      {cell_data?.date}
                    </Table.Cell>}
                    <Table.Cell>
                      {/* insert icons and give me product id */}
                      <div className="flex gap-2 items-center ">
                        <TooltipCustom tooltipContent="View the full product">
                          <EyeOpenIcon className="h-7 w-7 hover:bg-gray-200 p-1 rounded-full" />
                        </TooltipCustom>
                        <TooltipCustom tooltipContent="Edit the product">
                          <SheetTrigger>
                            <Pencil1Icon
                              onClick={(e) => handleEditProduct(e, cell_data)}
                              className="h-7 w-7 hover:bg-gray-200 p-1 rounded-full"
                            />
                          </SheetTrigger>
                        </TooltipCustom>
                        <TooltipCustom tooltipContent="Delete the product">
                          <AlertDialogTrigger>

                            <TrashIcon
                              onClick={(e) => handleDeleteProduct(e, cell_data)}
                              className="h-7 w-7 hover:bg-gray-200 p-1 rounded-full"
                            />
                          </AlertDialogTrigger>
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
