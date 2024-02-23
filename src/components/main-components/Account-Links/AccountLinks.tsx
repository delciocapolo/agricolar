import { LayoutDashboard } from "lucide-react";
import { FC } from "react";

const AccountLinks: FC = () => {
  const size = 25;
  return (
    <a
      className="container-account-links d-flex"
      href="http://"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="container-image-account-link d-flex">
        <LayoutDashboard
          size={size}
          style={{ fill: "var(--Gray-900)", color: "var(--Gray-600)" }}
          className="image-account-link"
        />
      </div>
      <h1 className="title-account-link">Dashboard</h1>
    </a>
  );
};

export default AccountLinks;
