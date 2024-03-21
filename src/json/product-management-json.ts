import phone_img from '../assets/phone.png'

type product_management_json_type = {
    id: number;
    product_name: object | object[];
    order_id : number
    customer_name : string;
    payment_date: number;
    total_amount: number ;
    date : string;
    status : "Published" | "Low Stock" | "Draft" | "Out of Stock";
}

export const product_management_json : product_management_json_type[] = [
    {
        id : 1,
        product_name : [
            {
                image : phone_img,
                name : "iPhone 12",
                quantity : 3
            }
        ],
        order_id : 12345,

        date : "29 Dec 2022",
        customer_name : "iPhone",
        payment_date : 10,
        total_amount : 200,
        status : "Published"
    },
    {
        id : 2,
        product_name : [
            {
                image : phone_img,
                name : "iPhone 10",
                quantity : 3
            }
        ],
        order_id : 12345,
        
        date : "29 Dec 2022",
        customer_name : "iPhone",
        payment_date : 10,
        total_amount : 200,
        status : "Low Stock"
    },
    {
        id : 3,
        product_name : [
            {
                image : phone_img,
                name : "iPhone 11s",
                quantity : 3
            }
        ],
        order_id : 12345,

        date : "29 Dec 2022",
        customer_name : "iPhone",
        payment_date : 10,
        total_amount : 200,
        status : "Draft"
    },
    {
        id : 4,
        product_name : [
            {
                image : phone_img,
                name : "iPhone 14",
                quantity : 3
            }
        ],
        order_id : 12345,

        date : "29 Dec 2022",
        customer_name : "iPhone",
        payment_date : 10,
        total_amount : 200,
        status : "Out of Stock"
    },
    {
        id : 5,
        product_name : [
            {
                image : phone_img,
                name : "iPhone 4",
                quantity : 3
            }
        ],
        order_id : 12345,

        date : "29 Dec 2022",
        customer_name : "iPhone",
        payment_date : 10,
        total_amount : 200,
        status : "Published"
    },
    {
        id : 6,
        product_name : [
            {
                image : phone_img,
                name : "iPhone 5",
                quantity : 3
            }
        ],
        order_id : 12345,

        date : "29 Dec 2022",
        customer_name : "iPhone",
        payment_date : 10,
        total_amount : 200,
        status : "Low Stock"
    },
    {
        id : 7,
        product_name : [
            {
                image : phone_img,
                name : "iPhone 5s",
                quantity : 3
            }
        ],
        order_id : 12345,

        date : "29 Dec 2022",
        customer_name : "iPhone",
        payment_date : 10,
        total_amount : 200,
        status : "Draft"
    },
    {
        id : 8,
        product_name : [
            {
                image : phone_img,
                name : "iPhone 11",
                quantity : 3
            }
        ],
        order_id : 12345,

        date : "29 Dec 2022",
        customer_name : "iPhone",
        payment_date : 10,
        total_amount : 200,
        status : "Out of Stock"
    },
    {
        id : 9,
        product_name : [
            {
                image : phone_img,
                name : "iPhone 11",
                quantity : 3
            }
        ],
        order_id : 12345,

        date : "29 Dec 2022",
        customer_name : "iPhone",
        payment_date : 10,
        total_amount : 200,
        status : "Published"
    },
    {
        id : 10,
        product_name : [
            {
                image : phone_img,
                name : "iPhone 11",
                quantity : 3
            }
        ],
        order_id : 12345,

        date : "29 Dec 2022",
        customer_name : "iPhone",
        payment_date : 10,
        total_amount : 200,
        status : "Low Stock"
    },
    {
        id : 11,
        product_name : [
            {
                image : phone_img,
                name : "iPhone 11",
                quantity : 3
            }
        ],
        order_id : 12345,

        date : "29 Dec 2022",
        customer_name : "iPhone",
        payment_date : 10,
        total_amount : 200,
        status : "Draft"
    },
    {
        id : 12,
        product_name : [
            {
                image : phone_img,
                name : "iPhone 11",
                quantity : 3
            }
        ],
        order_id : 12345,

        date : "29 Dec 2022",
        customer_name : "iPhone",
        payment_date : 10,
        total_amount : 200,
        status : "Out of Stock"
    }
    
]