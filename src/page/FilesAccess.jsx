import React, { useContext, useState } from 'react'
import { UserItem } from '../components/UserItem'
import { AsideNav } from '../components/AsideNav'
import { useParams } from 'react-router-dom'
import { UrlProvider } from '..'

export const FilesAccess = () => {
    const url = useContext(UrlProvider)
    const { id } = useParams()
    const [validErr, setValidErr] = useState(false)
    const [email, setEmail] = useState("")
    return (
        <div className="d-flex" style={{ minHeight: "100vh" }}>
            <AsideNav />
            <div className="p-5 w-100 overflow-y-auto overflow-y-auto">
                <h3 className="mb-4">Права доступа</h3>
                <div>
                    <h4 className="mb-3">Предоставить доступ к файлу {id}</h4>
                    <form className="needs-validation mb-4" novalidate="" onSubmit={(e) => {
                        e.preventDefault()
                        if (email.trim() === "") {
                            setValidErr(true)
                        } else {

                            fetch(`${url}/files/${id}/accesses`, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                                },
                                body: JSON.stringify({ email: email })
                            }).then(res => res.json())
                                .then(data => {
                                    console.log(data)
                                })
                                .catch(err => console.log(err))

                            setValidErr(false)
                        }
                    }}>
                        <div className="row g-3 mb-3">
                            <div className="col-sm-6">
                                <label for="email" className="form-label">Email пользователя</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="example@user.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required=""
                                />
                                <div style={{ display: validErr ? "block" : "none" }} className="invalid-feedback">Valid email is required.</div>
                            </div>
                            <div className="col-sm-6 d-flex align-items-end">
                                <button className="btn btn-primary" type="submit">Добавить</button>
                            </div>
                        </div>
                    </form>
                    <h4 className="mb-3">Пользователи, имеющие доступ</h4>
                    <ul className="list-group mb-4">
                        <UserItem />
                        {/* <li className="list-group-item align-items-center d-flex gap-3 py-3">
                            <div
                                className="bg-success text-white d-flex justify-content-center align-items-center rounded-3 flex-shrink-0"
                                style="width: 40px; height: 40px"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    width="20"
                                    height="20"
                                >
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
                                    />
                                </svg>
                            </div>
                            <div className="row w-100 align-items-center justify-content-betweeen">
                                <div className="col fw-bold">User Userov</div>
                                <div className="col text-muted">example@user.com</div>
                                <div className="col d-flex justify-content-end">
                                    <button className="btn btn-danger" type="button">Отозвать</button>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item align-items-center d-flex gap-3 py-3">
                            <div
                                className="bg-success text-white d-flex justify-content-center align-items-center rounded-3 flex-shrink-0"
                                style="width: 40px; height: 40px"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    width="20"
                                    height="20"
                                >
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
                                    />
                                </svg>
                            </div>
                            <div className="row w-100 align-items-center justify-content-betweeen">
                                <div className="col fw-bold">User Userov</div>
                                <div className="col text-muted">example@user.com</div>
                                <div className="col d-flex justify-content-end">
                                    <button className="btn btn-danger" type="button">Отозвать</button>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item align-items-center d-flex gap-3 py-3">
                            <div
                                className="bg-success text-white d-flex justify-content-center align-items-center rounded-3 flex-shrink-0"
                                style="width: 40px; height: 40px"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    width="20"
                                    height="20"
                                >
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
                                    />
                                </svg>
                            </div>
                            <div className="row w-100 align-items-center justify-content-betweeen">
                                <div className="col fw-bold">User Userov</div>
                                <div className="col text-muted">example@user.com</div>
                                <div className="col d-flex justify-content-end">
                                    <button className="btn btn-danger" type="button">Отозвать</button>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item align-items-center d-flex gap-3 py-3">
                            <div
                                className="bg-success text-white d-flex justify-content-center align-items-center rounded-3 flex-shrink-0"
                                style="width: 40px; height: 40px"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    width="20"
                                    height="20"
                                >
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
                                    />
                                </svg>
                            </div>
                            <div className="row w-100 align-items-center justify-content-betweeen">
                                <div className="col fw-bold">User Userov</div>
                                <div className="col text-muted">example@user.com</div>
                                <div className="col d-flex justify-content-end">
                                    <button className="btn btn-danger" type="button">Отозвать</button>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item align-items-center d-flex gap-3 py-3">
                            <div
                                className="bg-success text-white d-flex justify-content-center align-items-center rounded-3 flex-shrink-0"
                                style="width: 40px; height: 40px"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    width="20"
                                    height="20"
                                >
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
                                    />
                                </svg>
                            </div>
                            <div className="row w-100 align-items-center justify-content-betweeen">
                                <div className="col fw-bold">User Userov</div>
                                <div className="col text-muted">example@user.com</div>
                                <div className="col d-flex justify-content-end">
                                    <button className="btn btn-danger" type="button">Отозвать</button>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item align-items-center d-flex gap-3 py-3">
                            <div
                                className="bg-success text-white d-flex justify-content-center align-items-center rounded-3 flex-shrink-0"
                                style="width: 40px; height: 40px"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    width="20"
                                    height="20"
                                >
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
                                    />
                                </svg>
                            </div>
                            <div className="row w-100 align-items-center justify-content-betweeen">
                                <div className="col fw-bold">User Userov</div>
                                <div className="col text-muted">example@user.com</div>
                                <div className="col d-flex justify-content-end">
                                    <button className="btn btn-danger" type="button">Отозвать</button>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item align-items-center d-flex gap-3 py-3">
                            <div
                                className="bg-success text-white d-flex justify-content-center align-items-center rounded-3 flex-shrink-0"
                                style="width: 40px; height: 40px"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    width="20"
                                    height="20"
                                >
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
                                    />
                                </svg>
                            </div>
                            <div className="row w-100 align-items-center justify-content-betweeen">
                                <div className="col fw-bold">User Userov</div>
                                <div className="col text-muted">example@user.com</div>
                                <div className="col d-flex justify-content-end">
                                    <button className="btn btn-danger" type="button">Отозвать</button>
                                </div>
                            </div>
                        </li> */}
                    </ul>
                    <a className="d-flex align-items-center gap-1" href="./files-list.html"
                    ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        width="16"
                        height="16"
                    >
                            <path
                                fillRule="evenodd"
                                d="M12.5 9.75A2.75 2.75 0 0 0 9.75 7H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 1.06L4.56 5.5h5.19a4.25 4.25 0 0 1 0 8.5h-1a.75.75 0 0 1 0-1.5h1a2.75 2.75 0 0 0 2.75-2.75Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Назад</a
                    >
                </div>
            </div>
        </div>
    )
}
