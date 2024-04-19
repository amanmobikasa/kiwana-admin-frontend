import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tab";
import  { useState, ComponentProps  } from "react";


interface TabComponentProps {
  tabList: object[];
  tabValue? : string
  children ? : React.ReactNode | React.ReactNode[];
  getFilterData ?: any ;
}

export const TabComponent = ({ tabList, tabValue, getFilterData,  children }: TabComponentProps) => {
  const [tabListState, setTabListState] = useState<object[]>(tabList);
  // console.log("tablist", tabList);
  return (
    <>
      <div>
        <Tabs defaultValue="All Products" className="w-full ">
          <TabsList className="bg-gray-100 text-indigo-500 ">
            {tabListState.map((tab: any, i: number) => {
              return (
                <>
                  <TabsTrigger  
                  onClick={()=> getFilterData(tab?.title)}
                    key={i}
                    value={tab?.slug ? tab?.slug : "All Products"}
                    className="bg-white text-text-primary-gray  px-3 py-3 "
                  >
                    {tab?.title}
                  </TabsTrigger>
                </>
              )
            })}
          </TabsList>
        </Tabs>
      </div>
    </>
  );
};
