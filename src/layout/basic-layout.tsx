
// typing the basic layout props here
interface basicLayoutProps {
    children ? : React.ReactNode | React.ReactNode | null
}

export const BasicLayout =({children} : basicLayoutProps)=> {
  return <>
    <section className='w-10/12 mx-auto relative overflow-auto'>
        <div className='py-[2rem] px-3 w-full h-full'>
            {children}
        </div>
    </section>
  </>
}
