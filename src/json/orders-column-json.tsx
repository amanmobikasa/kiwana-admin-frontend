// contain all types of orders-column json
import phone_img from '../assets/phone.png'


type order_management_column_type ={
    id : number,
    order_id : number,
    product_name : object,
    date  : string,
    customer_name : string,
    total_amount  : number,
    payment_date  : string,
    status : "In Progress" | "Cancelled" | "Shipped" | "Delivered"
}

export const order_management_columns_json : order_management_column_type[] = [
    {
        id : 1,
        order_id : 437127,
        product_name : [{
            image : phone_img,
            name : "iPhone 12",
            quantity : "3"
        }],
        date : "10/10/2022",
        customer_name : "John Doe",
        total_amount : 1000,
        payment_date : "13/10/2022",
        status : "In Progress"
    },
    {
        id : 2,
        order_id : 437125,
        product_name : [{
            image : phone_img,
            name : "iPhone 13",
            quantity : "3"
        }],
        date : "10/10/2022",
        customer_name : "John Doe",
        total_amount : 1000,
        payment_date : "12/10/2022",
        status : "In Progress"
    },
    {
        id : 3,
        order_id : 87282,
        product_name : [{
            image : phone_img,
            name : "iPhone 14",
            quantity : "3"
        }],
        date : "10/10/2022",
        customer_name : "John Doe",
        total_amount : 1000,
        payment_date : "9/10/2022",
        status : "In Progress"
    },
    {
        id : 4,
        order_id : 900877,
        product_name : [{
            image : phone_img,
            name : "iPhone 15",
            quantity : "3"
        }],
        date : "10/10/2022",
        customer_name : "John Doe",
        total_amount : 1000,
        payment_date : "8/10/2022",
        status : "Delivered"
    },
    {
        id : 5,
        order_id : 345686,
        product_name : [{
            image : phone_img,
            name : "iPhone 16",
            quantity : "3"
        }],
        date : "10/10/2022",
        customer_name : "John Doe",
        total_amount : 1000,
        payment_date : "11/10/2022",
        status : "In Progress"
    },
    {
        id : 6,
        order_id : 9876897,
        product_name : [{
            image : phone_img,
            name : "iPhone 17",
            quantity : "3"
        }],
        date : "30/10/2022",
        customer_name : "John Doe",
        total_amount : 1000,
        payment_date : "10/10/2022",
        status : "In Progress"
    },
    {
        id : 7,
        order_id : 5789,
        product_name : [{
            image : phone_img,
            name : "iPhone 18",
            quantity : "3 "
        }],
        date : "10/10/2022",
        customer_name : "John Doe",
        total_amount : 1000,
        payment_date : "10/10/2022",
        status : "In Progress"
    }
    
]