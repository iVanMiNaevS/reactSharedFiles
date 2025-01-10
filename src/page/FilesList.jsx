import React, { useContext, useEffect, useState } from 'react'
import { AsideNav } from '../components/AsideNav'
import { ItemFile } from '../components/ItemFile'
import { UrlProvider } from '..'
import { useNavigate } from 'react-router-dom'

export const FilesList = () => {
    const [fileList, setFileList] = useState([])
    const navigate = useNavigate()
    const url = useContext(UrlProvider)

    function removeFile(id) {
        setFileList((prev) => prev.filter((file) => file.file_id !== id))
    }

    useEffect(() => {
        fetch(`${url}/files/disk`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then((res) => res.json()).then(data => {
            setFileList(data)
        })
    }, [])
    return (
        <div className="d-flex" style={{ minHeight: "100vh" }}>
            <AsideNav />
            <div className="p-5 w-100 overflow-y-auto">
                <h3 className="mb-4">Мои файлы</h3>
                <div className="list-group">
                    {fileList.length !== 0 ? fileList.map((file) => <ItemFile removeHandler={removeFile} file={file} dropDown={true} />) : <p>Пока нет файлов</p>}
                    <ItemFile file={{ name: "fsdf", file_id: 1 }} dropDown={true} />

                </div>
            </div>
        </div>
    )

}
