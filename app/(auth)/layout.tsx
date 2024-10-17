


const Layout = ({ children} : { children : React.ReactNode}) => {
  return (
    <div className="flex bg-cover bg-fixed bg-center justify-center items-center min-h-screen w-full">
        {children}
    </div>
  )
}

export default Layout
