import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UrlProvider } from '..'

export const Login = () => {
    const url = useContext(UrlProvider)
    const navigate = useNavigate()
    const [validError, setValidError] = useState({})
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    return (
        <div className="text-center d-flex justify-content-center align-items-center ">
            <main style={{ maxWidth: "300px" }} className="form-signin w-100">
                <form onSubmit={(e) => {
                    e.preventDefault()

                    fetch(`${url}/authorization`, {
                        method: "POST", headers: {
                            "Content-Type": "aplication/json"
                        }, body: JSON.stringify({
                            "email": email,
                            "password": password,
                        })
                    }).then((res) => res.json()).then(data => {
                        if (data.success) {
                            localStorage.setItem("token", data.token)
                            navigate("/files-list")
                        } else {
                            setValidError(data.message)
                        }

                    }).catch((data) => alert("Ошибка"))
                }}>
                    <img src="./static/icon.svg" style={{ width: "70px" }} alt="" className="mb-4" />
                    <h1 className="h3 mb-4">Вход в аккаунт</h1>
                    <div className="form-floating mb-2">
                        <input
                            style={{ border: validError.email && "1px solid red" }}
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                        <label for="floatingInput">Почта</label>
                        {validError.email && <p>{validError.email[0]}</p>}
                    </div>
                    <div className="form-floating mb-2">
                        <input
                            style={{ border: validError.password && "1px solid red" }}
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                        <label for="floatingPassword">Пароль</label>
                        {validError.password && <p>{validError.password[0]}</p>}
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Войти</button>
                    <div className="mt-4">Нет аккаунта? <Link to="/register">Зарегистрироваться</Link></div>
                    <p className="mt-4 mb-3 text-muted">© 2021-2024</p>
                </form>
            </main>
        </div>
    )
}
