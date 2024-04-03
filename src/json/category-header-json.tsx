export type columns_type = {
  accessorKey: string;
  dataType: "string" | "number" | "date" | "object";
  header: string;
};

export const category_management_columns: columns_type[] = [
  {
    accessorKey: "order_id",
    dataType: "number",
    header: "Sold",
  },
  {
    accessorKey: "product_name",
    dataType: "object",
    header: "Category Name",
  },
  {
    accessorKey: "total_amount",
    dataType: "number",
    header: "Stock",
  },
  {
    accessorKey: "payment_date",
    dataType: "string",
    header: "Added",
  },
  {
    accessorKey: "action",
    dataType: "string",
    header: "Action",
  },
];
