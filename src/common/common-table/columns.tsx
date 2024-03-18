
export type columns_type = {
    accessorKey : string,
    dataType : "string" | "number" | "date" | "object",
    header : string
}

export const columns: columns_type[] = [
  {
    accessorKey: "order_id",
    dataType : "string",
    header: "Order ID",
  },
  {
    accessorKey: "prorduct_name",
    dataType : "object",
    header: "Product",
  },
  {
    accessorKey: "date",
    dataType : "date",
    header: "Date",
  },
  {
    accessorKey: "customer_name",
    dataType : "string",
    header: "Customer",
  },
  {
    accessorKey: "total_amount",
    dataType : "number",
    header: "Total",
  },
  {
    accessorKey: "payment_date",
    dataType : "string",
    header: "Payment",
  },
  {
    accessorKey: "status",
    dataType : "string",
    header: "Status",
  },
  {
    accessorKey: "action",
    dataType : "string",
    header: "Action",
  }
]
