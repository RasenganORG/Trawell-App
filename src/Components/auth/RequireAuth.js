import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export function RequireAuth({ children }) {
	const isAuth = useSelector((state) => state.auth.user)
	const location = useLocation();

	if (!isAuth) {
		return <Navigate to='/login' state={{ from: location }} replace />;
	}
	return children;
}
