import { LayoutDashboard } from "lucide-react";
import { FC } from "react";

const AccountLinks:FC = () => {
    const size = 24;
    return (
        <a className="container-account-links d-flex" href="http://" target="_blank" rel="noopener noreferrer">
            <div className="container-image-account-link d-flex">
                <LayoutDashboard size={size} style={{fill: 'var(--Gray-900)'}} />
            </div>
            <div className="container-title-account-link d-flex">
                <h1 className="title-account-link">Dashboard</h1>
            </div>
        </a>
    )
}

export default AccountLinks;