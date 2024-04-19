export type columns_type = {
  accessorKey: string;
  dataType: "string" | "number" | "date" | "object";
  header: string;
};

export const product_management_columns: columns_type[] = [
  {
    accessorKey: "order_id",
    dataType: "number",
    header: "SKU",
  },
  {
    accessorKey: "product_name",
    dataType: "object",
    header: "Product",
  },
  {
    accessorKey: "date",
    dataType: "string",
    header: "Added",
  },
  {
    accessorKey: "customer_name",
    dataType: "string",
    header: "Category",
  },

  {
    accessorKey: "total_amount",
    dataType: "number",
    header: "Price",
  },
  {
    accessorKey: "payment_date",
    dataType: "number",
    header: "Stock",
  },
  {
    accessorKey: "status",
    dataType: "string",
    header: "Status",
  },

  {
    accessorKey: "action",
    dataType: "string",
    header: "Action",
  },
];
