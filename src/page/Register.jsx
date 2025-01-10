import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UrlProvider } from '..'
export const Register = () => {
    const url = useContext(UrlProvider)
    const navigate = useNavigate()
    const [validError, setValidError] = useState({})
    const [firstName, setFirstName] = useState("")
    const [secondName, setSecondName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    return (
        <div className="d-flex   justify-content-center align-items-center px-4">
            <div style={{ maxWidth: "600px" }}>
                <main>
                    <div className="mb-5 text-center">
                        <img
                            src="./static/icon.svg"
                            style={{ width: "70px" }}
                            alt=""
                            className="mb-4 mx-auto d-block"
                        />
                        <h2>Регистрация</h2>
                    </div>
                    <div>
                        <form className="needs-validation" onSubmit={(e) => {
                            e.preventDefault()

                            fetch(`${url}/registration`, {
                                method: "POST", headers: {
                                    "Content-Type": "aplication/json"
                                }, body: JSON.stringify({
                                    "email": email,
                                    "password": password,
                                    "first_name": firstName,
                                    "last_name": secondName,
                                })
                            }).then((res) => res.json()).then(data => {
                                if (data.success) {
                                    localStorage.setItem("token", data.token)
                                    navigate("/login")
                                } else {
                                    setValidError(data.message)
                                }

                            }).catch((data) => alert("Ошибка"))
                        }} >
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label for="firstName" className="form-label">Имя</label>
                                    <input
                                        style={{ border: validError.first_name && "1px solid red" }}
                                        type="text"
                                        className="form-control"
                                        id="firstName"
                                        placeholder=""
                                        value={firstName}
                                        required=""
                                        onChange={(e) => { setFirstName(e.target.value) }}
                                    />

                                    {validError.first_name && <div style={{ display: "block" }} className="invalid-feedback">
                                        Valid first name is required.
                                    </div>}
                                </div>

                                <div className="col-sm-6">
                                    <label for="lastName" className="form-label">Фамилия</label>
                                    <input
                                        style={{ border: validError.last_name && "1px solid red" }}
                                        type="text"
                                        className="form-control"
                                        id="lastName"
                                        placeholder=""
                                        value={secondName}
                                        required=""
                                        onChange={(e) => { setSecondName(e.target.value) }}
                                    />
                                    {validError.last_name && <div style={{ display: "block" }} className="invalid-feedback">
                                        Valid last name is required.
                                    </div>}
                                </div>

                                <div className="col-12">
                                    <label for="email" className="form-label">Почта</label>
                                    <input
                                        style={{ border: validError.email && "1px solid red" }}
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        value={email}
                                        placeholder="you@example.com"
                                        onChange={(e) => { setEmail(e.target.value) }}
                                    />
                                    {validError.email && <div style={{ display: "block" }} className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>}
                                </div>

                                <div className="col-12">
                                    <label for="password" className="form-label">Пароль</label>
                                    <input
                                        style={{ border: validError.password && "1px solid red" }}
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="*******"
                                        required=""
                                        value={password}
                                        onChange={(e) => { setPassword(e.target.value) }}
                                    />
                                    {validError.password && <div style={{ display: "block" }} className="invalid-feedback">
                                        Please enter your password.
                                    </div>}
                                </div>
                                <div>
                                    <button className="w-100 btn btn-primary btn-lg" type="submit">
                                        Зарегистрироваться
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </main>
                <div className="mt-4">
                    Уже есть аккаунт? <Link to="/login">Войти</Link>
                </div>
                <footer className="my-3 pt-3 text-muted text-center text-small">
                    <p>© 2021-2024 File Storage</p>
                </footer>
            </div>
        </div >
    )
}
