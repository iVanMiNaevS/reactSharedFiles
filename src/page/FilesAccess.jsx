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
    const [listUsers, setListUsers] = useState([])
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
                                    if (email.trim() !== "") {

                                        if (data instanceof Array) {
                                            const userNotAuthor = data.filter((el) => el.type !== "author")
                                            setListUsers(userNotAuthor)
                                        }
                                        setValidErr(false)
                                    } else {
                                        setValidErr(true)
                                    }

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
                                    style={{ border: validErr ? "1px solid red" : "" }}
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
                        {listUsers.map(user => <UserItem key={user.email} user={user} />)}
                    </ul>
                    <a className="d-flex align-items-center gap-1" href="/files-list"
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
