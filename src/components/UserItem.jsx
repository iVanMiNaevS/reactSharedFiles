import React from 'react'

export const UserItem = () => {
    return (
        <li className="list-group-item align-items-center d-flex gap-3 py-3">
            <div
                className="bg-success text-white d-flex justify-content-center align-items-center rounded-3 flex-shrink-0"
                style={{ width: "40px", height: "40px" }}
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
    )
}
