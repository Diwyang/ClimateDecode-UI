import { NavLink, Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks';

const ProtectedRoute = () => {
  const { user } = useAppSelector((state) => state.auth);

  // show unauthorized screen if no user is found in redux store
  if (!user) {
    return (
      <div className="unauthorized">
        <h1>Unauthorized :(</h1>
        <span>
          <NavLink to="/login">Login</NavLink> to gain access
        </span>
      </div>
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;
