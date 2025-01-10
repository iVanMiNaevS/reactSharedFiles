import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UrlProvider } from '..'

export const ItemFile = ({ removeHandler, file, dropDown = false }) => {
    const [openModel, setOpenModel] = useState(false)
    const url = useContext(UrlProvider)
    return (
        <div href="#" className="list-group-item align-items-center d-flex gap-3 py-3">
            <div
                className="bg-primary text-white d-flex justify-content-center align-items-center rounded-3 flex-shrink-0"
                style={{ width: "40px", height: "40px" }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="20"
                    height="20"
                >
                    <path
                        fillRule="evenodd"
                        d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
            <div className="row w-100 align-items-center">
                <div className="col">{file.name}</div>
                <div className="col text-muted">{file.file_id}</div>
                <div className="col d-flex justify-content-end">
                    <button type="button" className="btn btn-light">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            width="16"
                            height="16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    {dropDown && <>
                        <button
                            type="button"
                            className="btn btn-light dropdown-toggle dropdown-toggle-split"
                            dataBsToggle="dropdown"
                            aria-expanded="false"
                            onClick={() => setOpenModel(prev => !prev)}
                        >
                            <span className="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul style={{ display: openModel ? "block" : "none" }} className="dropdown-menu">
                            <li>
                                <Link
                                    className="dropdown-item align-items-center d-flex gap-2"
                                    to="/files-edit"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        width="16"
                                        height="16"
                                    >
                                        <path
                                            d="M7.25 13.25V7.5h1.5v5.75a.75.75 0 0 1-1.5 0ZM8.75 2.75V5h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75V2.75a.75.75 0 0 1 1.5 0ZM2.25 9.5a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H4.5V2.75a.75.75 0 0 0-1.5 0V9.5h-.75ZM10 10.25a.75.75 0 0 1 .75-.75h.75V2.75a.75.75 0 0 1 1.5 0V9.5h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75ZM3 12v1.25a.75.75 0 0 0 1.5 0V12H3ZM11.5 13.25V12H13v1.25a.75.75 0 0 1-1.5 0Z"
                                        />
                                    </svg>
                                    Редактировать</Link
                                >
                            </li>
                            <li>
                                <Link
                                    className="dropdown-item align-items-center d-flex gap-2"
                                    to="/files-access"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        width="16"
                                        height="16"
                                    >
                                        <path
                                            d="M8.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 13c.552 0 1.01-.452.9-.994a5.002 5.002 0 0 0-9.802 0c-.109.542.35.994.902.994h8ZM12.5 3.5a.75.75 0 0 1 .75.75v1h1a.75.75 0 0 1 0 1.5h-1v1a.75.75 0 0 1-1.5 0v-1h-1a.75.75 0 0 1 0-1.5h1v-1a.75.75 0 0 1 .75-.75Z"
                                        />
                                    </svg>
                                    Права доступа</Link
                                >
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            <li onClick={() => {
                                fetch(`${url}/files/${file.file_id}`, {
                                    method: "DELETE", headers: {
                                        "Content-Type": "aplication/json",
                                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                                    }
                                }).then((res) => res.json()).then(data => {
                                    if (data.success) {
                                        removeHandler(file.file_id)
                                    }
                                })
                            }}>
                                <a
                                    className="dropdown-item align-items-center text-danger d-flex gap-2"
                                    href="#"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        width="16"
                                        height="16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Удалить</a
                                >
                            </li>
                        </ul></>}
                </div>
            </div>
        </div>
    )
}
