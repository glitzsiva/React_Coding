
import { NavLink } from "react-router-dom";

const Sidebar =()=>{



    return(


        <div className="col-2">
            <div className="d-flex flex-column">

                    <NavLink className="nav-link" to="/discover">Discover</NavLink>
                    <NavLink className="nav-link" to="/migrate">Migrate</NavLink>
                    <NavLink className="nav-link" to="/Guide">Guide</NavLink>


            </div>

        </div>
    )
}


export default Sidebar