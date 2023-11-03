import { Link } from 'react-router-dom';

function AppLogo() {
  return (
    <Link to="/">
      <span className="rounded-full bg-gray-500 text-white py-1 px-2 uppercase text-sm">
        EV
      </span>
    </Link>
  );
}

export default AppLogo;
