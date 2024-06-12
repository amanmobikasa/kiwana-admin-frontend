import { BasicLayout } from "@/layout/basic-layout"


interface ResizeWindowOnclickProps {
    // all props here.
}

export const ResizeWindowOnclick =()=> {
  return (
    <>
        <BasicLayout>
            <div className="h-[100vh] w-full text-center flex items-center justify-center">
                <h1 className="text-6xl font-bold text-text-primary-gray font-poppin my-xl animate-pulse">Please Resize the window to 1200 Pixels.</h1>
            </div>
        </BasicLayout>
    </>
  )
}

