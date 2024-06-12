// contain all the coupon columns json

type coupon_management_columns_type = {
    id : number
    order_id : string
    product_name : string
    total_amount : number
    payment_date : number
    Date : string
    expiry_date : string
    status : "Active" | "Expired"
    date : string
}

export const coupon_management_columns : coupon_management_columns_type[] = [
    {
        id : 1,
        order_id : "COUPONCODEHERE1",
        product_name : "15%",
        total_amount : 30000,
        payment_date : 20000,
        Date : "01/02/2023",
        expiry_date : "01/05/2023",
        status : "Active",
        date : "20/01/2023"
    },
    {
        id : 1,
        order_id : "COUPONCODEHERE2",
        product_name : "15%",
        total_amount : 30000,
        payment_date : 20000,
        Date : "02/02/2023",
        expiry_date : "01/05/2023",
        status : "Expired",
        date : "20/01/2023"
    },
    {
        id : 1,
        order_id : "COUPONCODEHERE3",
        product_name : "15%",
        total_amount : 30000,
        payment_date : 20000,
        Date : "01/02/2023",
        expiry_date : "01/05/2023",
        status : "Expired",
        date : "20/01/2023"
    },
    {
        id : 1,
        order_id : "COUPONCODEHER4",
        product_name : "15%",
        total_amount : 30000,
        payment_date : 20000,
        Date : "01/02/2023",
        expiry_date : "01/05/2023",
        status : "Active",
        date : "20/01/2023"
    },
    {
        id : 1,
        order_id : "COUPONCODEHERE5",
        product_name : "15%",
        total_amount : 30000,
        payment_date : 20000,
        Date : "01/02/2023",
        expiry_date : "01/05/2023",
        status : "Expired",
        date : "20/01/2023"
    },
    {
        id : 1,
        order_id : "COUPONCODEHERE6",
        product_name : "15%",
        total_amount : 30000,
        payment_date : 20000,
        Date : "01/02/2023",
        expiry_date : "01/05/2023",
        status : "Active",
        date : "20/01/2023"
    },
]