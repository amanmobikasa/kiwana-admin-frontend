import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tab";
import  { useState, ComponentProps  } from "react";


interface TabComponentProps {
  tabList: object[];
  tabValue? : string
  children ? : React.ReactNode | React.ReactNode[] 
}

export const TabComponent = ({ tabList,  children }: TabComponentProps) => {
  const [tabListState, setTabListState] = useState<object[]>(tabList);
  return (
    <>
      <div>
        <Tabs defaultValue="All Products" className="w-full ">
          <TabsList className="bg-gray-100 text-indigo-500 ">
            {tabListState.map((tab: any, i: number) => {
              return (
                <>
                  <TabsTrigger  
                    key={i}
                    value={tab?.title ? tab?.title : "All Products"}
                    className="bg-white text-text-primary-gray  px-3 py-3 "
                  >
                    {tab?.title}
                  </TabsTrigger>
                </>
              );
            })}
          </TabsList>
          {tabListState &&
            tabListState.map((tab: any, i: number) => {
              return (
                <>
                  <TabsContent key={i} value={tab?.title}>
                    {children}
                  </TabsContent>
                </>
              );
            })}
        </Tabs>
      </div>
    </>
  );
};
