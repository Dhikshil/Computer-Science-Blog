import { Link } from "react-router-dom";

export default function HeaderMap({title, link, svg}) {
    return( 
    <li className="flex space-x-2">
        <a href={link}>{title}</a>
        <Link to={link}></Link>
        <p className="pt-1">{svg}</p>
    </li>
    )
};