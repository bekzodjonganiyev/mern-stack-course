import { Link } from "react-router-dom";

const DashHeader = () => {
    return (
        <div className="dash-header">
            <div className="dash-header__container">
                <Link to="/dash/notes">
                    <h1 className="dash-header__title">techNotes</h1>
                </Link>
                <nav className="dash-header__nav"></nav>
            </div>
        </div>
    )
}

export default DashHeader