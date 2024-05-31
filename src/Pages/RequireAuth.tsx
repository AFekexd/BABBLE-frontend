import Forbidden from "./Forbidden";
import { useEffect, useState } from "react";
import Login from "./Login";
import { Outlet, Router, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { DecodeToken } from "../features/jwt";

type Props = {
  roles: string[];
};

const RequireAuth: React.FunctionComponent<Props> = (props) => {
  const [isLogged, setIsLogged] = useState(false);
  const jwt = useSelector((state) => state.user.jwt);
  const refreshToken = useSelector((state) => state.user.refresh_token);
  const router = Router;
  const navigate = useNavigate();
  useEffect(() => {
    if (jwt) {
      const token = DecodeToken(jwt);
      const refresh = DecodeToken(refreshToken);
      console.log(token);
      console.log(refresh);
      if (token.exp < Date.now() / 1000) {
        setIsLogged(false);
        navigate("/");
      } else {
        setIsLogged(true);
      }
    } else {
      setIsLogged(false);
      navigate("/");
    }
  }, [jwt]);

  return !isLogged ? (
    <Login />
  ) : !props.roles.includes("ADMIN") ? (
    <Outlet />
  ) : (
    <Forbidden />
  );
};

export default RequireAuth;
