// contain all the orders row heading json.
export type couponRowHeading = {
    accessorKey : string
    dataType : "number" | "string" | "object";
    header : string;
};

export const coupon_row_heading : couponRowHeading[] = [
    {
        accessorKey : "order_id",
        dataType : "string",
        header : "Coupon Code",
    },
    {
        accessorKey : "product_name",
        dataType : "number",
        header : "Discount",
    },
    {
        accessorKey : "total_amount",
        dataType : "number",
        header : "Max",
    },
    {
        accessorKey : "payment_date",
        dataType : "number",
        header : "Min",
    },
    {
        accessorKey : "Date",
        dataType : "string",
        header : "Start",
    },
    {
        accessorKey : "expiry_date",
        dataType : "string",
        header : "Expiry",
    },
    {
        accessorKey : "status",
        dataType : "string",
        header : "Status",
    },
    {
        accessorKey : "date",
        dataType : "string",
        header : "Created",
    },
    {
        accessorKey : "action",
        dataType : "string",
        header : "Action",
    }
]