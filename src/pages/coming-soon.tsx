import { BasicLayout } from "@/layout/basic-layout"


interface comingSoonPropsType {
    // contain the coming soon props type
}

const ComingSoonPage =({} : comingSoonPropsType)=> {
  return (
    <>
        <BasicLayout>
            <div className="h-[100vh] w-full text-center flex items-center justify-center">
                <h1 className="text-6xl font-bold text-text-primary-gray font-poppin my-xl animate-pulse">Coming Soon</h1>
            </div>
        </BasicLayout>
    </>
  )
}

export default ComingSoonPage