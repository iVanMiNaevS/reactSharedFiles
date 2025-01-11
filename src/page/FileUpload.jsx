import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AsideNav } from '../components/AsideNav'
import { UrlProvider } from '..'

export const FileUpload = () => {
    const url = useContext(UrlProvider)
    const [sucFiles, setSucFiles] = useState([])

    return (
        <div className="d-flex" style={{ minHeight: "100vh" }}>
            <AsideNav />
            <div className="w-100 p-5 overflow-y-auto">
                <h3 className="mb-4">Загрузка файлов</h3>
                <h4 className="mb-3">Выберите файлы из списка</h4>
                <form
                    action=""
                    method="post"
                    enctype="multipart/form-data"
                    className="d-flex gap-4"
                    id="js-upload-form"
                >
                    <input
                        onChange={(e) => {
                            e.preventDefault()
                            console.log(e.target.files[0])
                            const formData = new FormData()
                            for (let i = 0; i < e.target.files.length; i++) {
                                formData.append('files[]', e.target.files[i])
                            }

                            fetch(`${url}/files`, {
                                method: "POST",
                                headers: {
                                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                                },
                                body: formData
                            }).then(res => res.json())
                                .then(data => {
                                    if (data) {
                                        setSucFiles(data)
                                    }
                                })
                                .catch(err => console.log(err))
                        }}
                        type="file"
                        name="files[]"
                        className="form-control w-100"
                        id="js-upload-files"
                        multiple
                    />
                </form>

                {/* <!-- Drop Zone --> */}
                <h4 className="mt-4 mb-3">Или перенесите с помощью Drag and Drop</h4>
                <div
                    className="upload-drop-zone border-secondary border-2 mb-4 text-center rounded-2 p-5 fw-bold"
                    style={{ borderStyle: "dashed !important" }}
                    id="drop-zone"
                >
                    Just drag and drop files here
                </div>

                {/* <!-- Upload Finished --> */}
                <h3>Загруженные файлы</h3>
                <div className="list-group">
                    {sucFiles.map((file) => {
                        return <a
                            key={file.file_id}
                            href="#"
                            className="list-group-item list-group-item-success d-flex gap-2 py-2 align-items-center"
                        ><span className={`badge rounded-pill ${file.success ? "text-bg-success" : "text-bg-error"}`}>{file.message}</span>{file.name}</a
                        >
                    })}
                </div>
                <Link className="d-flex align-items-center gap-1 mt-4" to="/files-list"
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
    )
}
