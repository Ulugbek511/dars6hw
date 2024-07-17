import { NavLink, Outlet } from "react-router-dom"
// import imgVite from '../assets/vite-removebg-preview.png'

function GeneraLayout() {
  return (
    <div>
        <header className=" h-[90px] flex items-center justify-between bg-slate-100">
            <div>
                {/* <img className="w-[150px] p-0 m-0" src={imgVite} alt="" /> */}
            </div>
            <div className="flex items-center">
                <ul className="flex items-center justify-between w-[700px]  text-xl">
                    <li>
                        <NavLink  to={'/'}>
                            Todo
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  to={'/counter'}>
                            Counter
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  to={'/product'}>
                            Product
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  to={'/category'}>
                            Category
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="text-xl">
                <button className="border rounded-md grey px-1 py-">Sign In</button>
              <br />  <br /> <button className="border rounded-md px-1 py-">Sign Up</button>
            </div>
        </header>
        <main>
            <Outlet />            
        </main>
    </div>
  )
}

export default GeneraLayout
