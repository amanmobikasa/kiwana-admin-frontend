// contain all the orders row heading json
export type OrderRowHeading = {
  accessorKey: string;
  dataType : "number" | "string" | "object";
  header : string;
};

export const orders_row_heading: OrderRowHeading[] = [
    {
        accessorKey : "order_id",
        dataType : "number",
        header : "Order ID",
    },
    {
        accessorKey : "product_name",
        dataType : "object",
        header : "Product",
    },
    {
        accessorKey : "date",
        dataType : "string",
        header : "Date",
    },
    {
        accessorKey : "customer_name",
        dataType : "string",
        header : "Customer",
    },
    {
        accessorKey : "total_amount",
        dataType : "number",
        header : "Total",
    },
    {
        accessorKey : "Date",
        dataType : "string",
        header : "Payment",
    },
    {
        accessorKey : "status",
        dataType : "string",
        header : "Status",
    },
    {
        accessorKey : "action",
        dataType : "string",
        header : "Action",
    }
    
]