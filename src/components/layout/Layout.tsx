import Header from "./Header";
import Conatiner from "../shared/Container";
import AsideMenu from "./AsideMenu";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <Conatiner>
            <Header />
            <AsideMenu />
            <div className="col-span-9 p-5">{<Outlet />}</div>
        </Conatiner>
    );
}

export default Layout;
