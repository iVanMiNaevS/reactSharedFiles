import React, { useContext, useEffect, useState } from 'react'
import { AsideNav } from '../components/AsideNav'
import { ItemFile } from '../components/ItemFile'
import { UrlProvider } from '..'

export const FilesShared = () => {
    const [fileList, setFileList] = useState([])
    const url = useContext(UrlProvider)
    useEffect(() => {
        fetch(`${url}/files/shared`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then((res) => res.json()).then(data => {
            setFileList(data)
        }).catch((data) => alert("Ошибка"))
    }, [])
    return (
        <div className="d-flex" style={{ minHeight: "100vh" }}>
            <AsideNav />
            <div className="p-5 w-100 overflow-y-auto">
                <h3 className="mb-4">Общие файлы</h3>
                <div className="list-group">
                    {fileList.length !== 0 ? fileList.map((file) => <ItemFile file={file} />) : <p>Пока нет файлов</p>}
                </div>
            </div>
        </div>
    )
}
