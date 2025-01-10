import { useContext, useEffect } from "react";
import { Route, Navigate, useNavigate } from "react-router-dom";
import { UrlProvider } from "..";
const isTokenValid = (token) => {
    // Здесь можно добавить логику для проверки валидности токена
    // Например, проверить его срок действия или сделать запрос на сервер.
    return token && token !== "expired"; // Просто пример проверки
};

export const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem("token");
    const url = useContext(UrlProvider)
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`${url}/files/disk`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then((res) => res.json()).then(data => {
            if (data.body) {
                navigate("/login")
            }
        })
    }, [])
    return token ? children : <Navigate to={"/login"} />

};
