import { latest_order_json } from "@/json/latest-order-json";

export const globalSorting = (
  key: string,
  type: "date" | "string" | "number" | "object",
  order: "asc" | "desc" = "asc"
) => {
  if (order === "asc") {
    return latest_order_json.slice().sort((a: any, b: any) => {
      if (type === "date") {
        return new Date(a[key]).getTime() - new Date(b[key]).getTime();
      } else if (type === "string") {
        return a[key].localeCompare(b[key]);
      } else if (type === "number") {
        return a[key] - b[key];
      }
      else if(type === "object"){
        console.log("data name",a.product_name)
        return a.product_name[0].name.localeCompare(b.product_name[0].name);
      }
    });
  }
  else{
    return latest_order_json.slice().sort((a: any, b: any) => {
        if (type === "date") {
          return new Date(b[key]).getTime() - new Date(a[key]).getTime();
        } else if (type === "string") {
          return b[key].localeCompare(a[key]);
        } else if (type === "number") {
          return b[key] - a[key];
        }
        else if(type === "object" && key === "product_name"){
            latest_order_json.sort((a: any, b: any) => {
                return b[key].name.localeCompare(a[key].name);
            })
          }
      });

  }
};
