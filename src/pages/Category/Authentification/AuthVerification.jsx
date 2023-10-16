import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLogin } from "../../../redux/reducers/login.reducer";

const AuthLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Vérifiez si l'utilisateur est connecté en fonction du jeton
    const token = localStorage.getItem("token");
    dispatch(
      setLogin({
        login: !!token,
      })
    );
  }, [dispatch]);

  return <div>{children}</div>;
};

export default AuthLayout;
