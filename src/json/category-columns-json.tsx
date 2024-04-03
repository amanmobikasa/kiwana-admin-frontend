// contain all the category columns json
import phone_img from '../assets/phone.png'

type category_management_columns_type = {
    id : number,
    product_name : object
    order_id : number,
    total_amount : number,
    payment_date : string,
}

export const category_management_columns_data : category_management_columns_type[] = [
    {
        id : 1,
        product_name : [
            {
                name : "iPhone",
                image : phone_img,
                quantity : "Every Apple iPhone ever built"
            }
        ],
        order_id : 10,
        total_amount : 5900000,
        payment_date : "2022-01-01"
    },
    {
        id : 2,
        product_name : [
            {
                name : "iPhone",
                image : phone_img,
                quantity : "Every Apple iPhone ever built"
            }
        ],
        order_id : 20,
        total_amount : 50000,
        payment_date : "2022-01-01"
    },
    {
        id : 3,
        product_name : [
            {
                name : "iPhone",
                image : phone_img,
                quantity : "Every Apple iPhone ever built"
            }
        ],
        order_id : 30,
        total_amount : 9000000,
        payment_date : "2022-01-01"
    },
    {
        id : 4,
        product_name : [
            {
                name : "iPhone",
                image : phone_img,
                quantity : "Every Apple iPhone ever built"
            }
        ],
        order_id : 40,
        total_amount : 9000000,
        payment_date : "2022-01-01"
    },
    {
        id : 5,
        product_name : [
            {
                name : "iPhone",
                image : phone_img,
                quantity : "Every Apple iPhone ever built"
            }
        ],
        order_id : 50,
        total_amount : 9000000,
        payment_date : "2022-01-01"
    },
    {
        id : 6,
        product_name : [
            {
                name : "iPhone",
                image : phone_img,
                quantity : "Every Apple iPhone ever built"
            }
        ],
        order_id : 60,
        total_amount : 9000000,
        payment_date : "2022-01-01"
    },
    {
        id : 7,
        product_name : [
            {
                name : "iPhone",
                image : phone_img,
                quantity : "Every Apple iPhone ever built"
            }
        ],
        order_id : 70,
        total_amount : 9000000,
        payment_date : "2022-01-01"
    },
    {
        id : 8,
        product_name : [
            {
                name : "iPhone",
                image : phone_img,
                quantity : "Every Apple iPhone ever built"
            }
        ],
        order_id : 80,
        total_amount : 9000000,
        payment_date : "2022-01-01"
    },
    {
        id : 9,
        product_name : [
            {
                name : "iPhone",
                image : phone_img,
                quantity : "Every Apple iPhone ever built"
            }
        ],
        order_id : 90,
        total_amount : 9000000,
        payment_date : "2022-01-01"
    },
    {
        id : 10,
        product_name : [
            {
                name : "iPhone",
                image : phone_img,
                quantity : "Every Apple iPhone ever built"
            }
        ],
        order_id : 100,
        total_amount : 9000000,
        payment_date : "2022-01-01"
    }
]