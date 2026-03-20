import { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { useLocation } from "react-router-dom";

type RequestInviteLinkProps = {
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const RequestInviteLink = ({
  children,
  onClick,
  href,
  ...props
}: RequestInviteLinkProps) => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const targetHref = href ?? (isHome ? "#early-access" : "/#early-access");

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented || !isHome) {
      return;
    }

    event.preventDefault();

    const element = document.getElementById("early-access");

    if (!element) {
      window.location.hash = "early-access";
      return;
    }

    window.history.replaceState(null, "", "#early-access");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <a href={targetHref} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

export default RequestInviteLink;
