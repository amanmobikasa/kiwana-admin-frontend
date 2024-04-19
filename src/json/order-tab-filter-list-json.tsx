interface tab_list_json_type {
    id: number;
    title: string;
    slug : string;
    link_href: string;
  }
  
  export const order_tab_filter_list: tab_list_json_type[] = [
    {
      id: 1,
      title: "In Progress",
      slug : "in-progress",
      link_href: "/",
    },
    {
      id: 2,
      title: "Cancelled",
      slug : "cancelled",
      link_href: "/",
    },
    {
      id: 3,
      title: "Shipped",
      slug : "shipped",
      link_href: "/",
    },
    {
      id: 4,
      title: "Delivered",
      slug : "delivered",
      link_href: "/",
    },
  ];