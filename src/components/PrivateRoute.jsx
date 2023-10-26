import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getUserState } from 'redux/userSelectors';
import { Loader } from './Loader/Loader';
import { useCurrentUserQuery } from 'redux/authSlice';

const PrivateRoute = ({ component: Component, redirectTo = '/welcome' }) => {
  const user = useSelector(getUserState);
  const skip = !user.token && !user.isLoggedIn;

  const { data, isLoading, isError } = useCurrentUserQuery('', { skip });

  if (user.isLoggedIn && data) return <Component />;

  if (isError || (!user.isLoggedIn && !user.token))
    return <Navigate to={redirectTo} />;

  if (isLoading) return <Loader size={150} />;

  return <Loader size={150} />;
};

export default PrivateRoute;