import Forbidden from "./Forbidden";
import { useEffect, useState } from "react";
import Login from "./Login";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { DecodeToken, IsTokenExpired } from "../features/jwt";

type Props = {
  roles: string[];
};

const RequireAuth: React.FunctionComponent<Props> = (props) => {
  const [isLogged, setIsLogged] = useState(false);
  const jwt = useSelector((state) => state.user.jwt);

  useEffect(() => {
    console.log(isLogged);
  }, [isLogged]);

  useEffect(() => {
    console.log(jwt);
    if (jwt) {
      const token = DecodeToken(jwt);
      console.log("Expired: " + IsTokenExpired(jwt));
      console.log(token);

      setIsLogged(true);
    } else {
      setIsLogged(false);
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
