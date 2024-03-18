import phone_img from '../assets/phone.png'

type latest_order_json_type = {
    id: number;
    order_id: string;
    product_name : object[] | object;
    date : Date | string;
    customer_name: string;
    total_amount: number ;
    payment_date : Date | string;
    status : "pending" | "processing" | "success" | "failed";
    
}

export const latest_order_json : latest_order_json_type[] = [
    {
        id : 1,
        order_id : "12345",
        product_name : [
            {
                image : phone_img,
                name : "Iphone 11",
                quantity : 3
            }
        ],
        date : "29 Dec 2022",
        customer_name : "aman",
        total_amount : 200,
        payment_date : "24 June 2023",
        status : "pending"
    },
    {
        id : 2,
        order_id : "12345",
        product_name : [
            {
                image : phone_img,
                name : "Iphone 12",
                quantity : 3
            }
        ],
        date : "29 Dec 2022",
        customer_name : "chauhan",
        total_amount : 200,
        payment_date : "24 June 2023",
        status : "processing"
    },
    {
        id : 3,
        order_id : "12345",
        product_name : [
            {
                image : phone_img,
                name : "Iphone 13",
                quantity : 3
            }
        ],
        date : "29 Dec 2022",
        customer_name : "yash khan",
        total_amount : 200,
        payment_date : "24 June 2023",
        status : "success"
    },
    {
        id : 4,
        order_id : "12345",
        product_name : [
            {
                image : phone_img,
                name : "Iphone 5",
                quantity : 3
            }
        ],
        date : "29 Dec 2022",
        customer_name : "prem khan",
        total_amount : 200,
        payment_date : "24 June 2023",
        status : "failed"
    },
    {
        id : 5,
        order_id : "12345",
        product_name : [
            {
                image : phone_img,
                name : "Iphone 12s",
                quantity : 3
            }
        ],
        date : "29 Dec 2022",
        customer_name : "shantanu khan",
        total_amount : 200,
        payment_date : "24 June 2023",
        status : "pending"
    },
    {
        id : 6,
        order_id : "12345",
        product_name : [
            {
                image : phone_img,
                name : "Iphone 16",
                quantity : 3
            }
        ],
        date : "29 Dec 2022",
        customer_name : "hero hera",
        total_amount : 200,
        payment_date : "24 June 2023",
        status : "processing"
    },
    {
        id : 7,
        order_id : "12345",
        product_name : [
            {
                image : phone_img,
                name : "Iphone X",
                quantity : 3
            }
        ],
        date : "29 Dec 2022",
        customer_name : "harsh chauhan",
        total_amount : 200,
        payment_date : "24 June 2023",
        status : "success"
    },
    {
        id : 8,
        order_id : "12345",
        product_name : [
            {
                image : phone_img,
                name : "Iphone",
                quantity : 3
            }
        ],
        date : "29 Dec 2022",
        customer_name : "yash khan jr",
        total_amount : 200,
        payment_date : "24 June 2023",
        status : "failed"
    },
    {
        id : 9,
        order_id : "12345",
        product_name : [
            {
                image : phone_img,
                name : "Iphone 11",
                quantity : 3
            }
        ],
        date : "29 Dec 2022",
        customer_name : "yash khan sr",
        total_amount : 200,
        payment_date : "24 June 2023",
        status : "pending"
    },
    {
        id : 10,
        order_id : "12345",
        product_name : [
            {
                image : phone_img,
                name : "Iphone 8",
                quantity : 3
            }
        ],
        date : "29 Dec 2022",
        customer_name : "md yash khan saifi",
        total_amount : 200,
        payment_date : "24 June 2023",
        status : "processing"
    }
]