
import { Link } from "react-router-dom";

interface AuthFooterProps {
  text: string;
  linkText: string;
  linkTo: string;
}

export const AuthFooter = ({ text, linkText, linkTo }: AuthFooterProps) => {
  return (
    <div className="pt-4 text-center border-t border-neutral-800">
      <div className="h-px bg-gradient-to-r from-transparent via-neutral-600 to-transparent mb-4"></div>
      <p className="text-neutral-400 text-xs mb-4">
        {text}{" "}
        <Link to={linkTo} className="text-neutral-300 hover:underline transition-colors">
          {linkText}
        </Link>
      </p>
      <div className="flex items-center justify-center space-x-2">
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
        <span className="text-neutral-400 text-xs">System Status: Operational</span>
      </div>
    </div>
  );
};
