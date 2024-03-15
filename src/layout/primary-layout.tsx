


export type primaryLayoutProps = {
    children  : JSX.Element | JSX.Element[];
}

const PrimaryLayout = ({children} : primaryLayoutProps) => {
    return <>
    <section className='relative h-full w-full overflow-hidden'>
        <div className='mx-auto'>
            <div className='w-full h-full relative overflow-auto flex bg-bg-primary-bg-gray'>
                {children}
            </div>
        </div>
    </section>
    </>
}
export default PrimaryLayout;