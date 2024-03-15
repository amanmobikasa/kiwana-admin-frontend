import { DatePickerWithRange } from "@/common/date-range-picker"
import { Heading } from "@radix-ui/themes"


const DashboardPage =()=> {
  return <>
    <section className='w-10/12 mx-auto relative overflow-auto'>
        <div className='py-[2rem] px-3 w-full h-full'>
            <div className="w-full flex justify-between items-center">
                <Heading as="h1" className="text-gray-800">Dashboard</Heading>
                <div>
                    <DatePickerWithRange/>
                </div>
            </div>
        </div>
    </section>
  </>
  
}

export default DashboardPage