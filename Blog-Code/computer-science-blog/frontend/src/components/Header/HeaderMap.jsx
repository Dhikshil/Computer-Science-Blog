import { Link } from "react-router-dom";

export default function HeaderMap({ title, link, svg, loggedIn }) {
    if (loggedIn) {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (title === "Login" && userData) {
            title = userData.name;
        };
    };

    return( 
    <li className="flex space-x-2">
        <Link to={`/${link}`}>{title}</Link>
        <p className="pt-1">{svg}</p>
    </li>
    );
};