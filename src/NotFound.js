import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Page Not Found</h2>
            <p>Unfortunately, the page you're looking for doesn't exist (anymore) or there was an error in the link that you typed or followed.</p>
            <Link to = '/'><button>  Go to Homepage
                </button></Link>
        </div>
     );
}
 
export default NotFound;