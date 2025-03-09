import { Link, useLocation } from "react-router-dom";
import { FaBirthdayCake, FaPen, FaBook } from "react-icons/fa"
import { MdAddAPhoto } from "react-icons/md";
import "./index.css"

function Navigation() {
	const links = [
		{label: "生", address: "Greetings", icon: <FaBirthdayCake className="fs-1" />},
		{label: "日", address: "Photos",    icon: <MdAddAPhoto className="fs-1" />},
		{label: "快", address: "Books",     icon: <FaBook className="fs-1" />},
		{label: "乐", address: "Writes",    icon: <FaPen className="fs-1" />}
	]

	const { pathname } = useLocation();

	return (
		<div className="d-flex wd-kanbas-navigation">
		
			{links.map((link, index) => (
				<div key={index} className={pathname.includes(link.label) ? 'flex-fill wd-active' : "flex-fill"}>
					<Link to={`/${link.address}`}> {link.icon} {link.label} </Link>
				</div>
			))}
		
		</div>
	)
}

export default Navigation;