import React from 'react'
import { AsideNav } from '../components/AsideNav'
import { Link } from 'react-router-dom'

export const FilesEdit = () => {
    return (
        <div className="d-flex" style={{ minHeight: "100vh" }}>
            <AsideNav />
            <div className="p-5 w-100 overflow-y-auto overflow-y-auto">
                <h3 className="mb-4">Редактирование файла</h3>
                <div>
                    <h4 className="mb-3">Файл "id"</h4>
                    <form className="needs-validation" novalidate="">
                        <div className="row g-3 mb-4">
                            <div className="col-sm-6">
                                <label for="fileName" className="form-label">Название</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="fileName"
                                    placeholder=""
                                    value="старое название"
                                    required=""
                                />
                                <div className="invalid-feedback">Valid file name is required.</div>
                            </div>
                            <div className="col-sm-6 d-flex align-items-end">
                                <button className="btn btn-primary" type="submit">Сохранить</button>
                            </div>
                        </div>
                    </form>
                    <Link className="d-flex align-items-center gap-1" to="/files-list"
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
                        Назад</Link
                    >
                </div>
            </div>
        </div>
    )
}
