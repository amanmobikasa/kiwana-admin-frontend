interface tab_list_json_type {
    id: number
    title: string
    slug : string
    link_href: string
}

export const coupon_tab_filter_list: tab_list_json_type[] = [
  {
    id: 1,
    title: "All",
    slug : "all",
    link_href: "/",
  },
  {
    id: 2,
    title: "Active",
    slug : "active",
    link_href: "/",
  },
  {
    id: 4,
    title: "Expired",
    slug : "expired",
    link_href: "/",
  }
]