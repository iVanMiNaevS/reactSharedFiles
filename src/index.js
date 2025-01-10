import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Register } from './page/Register';
import "./static/bootstrap.min.css"
import { Login } from './page/Login';
import { FileUpload } from './page/FileUpload';
import { FilesList } from './page/FilesList';
import { FilesShared } from './page/FilesShared';
import { FilesAccess } from './page/FilesAccess';
import { FilesEdit } from './page/FilesEdit';
import { PrivateRoute } from "./components/PrivateRoute"

const root = ReactDOM.createRoot(document.getElementById('root'));
export const UrlProvider = createContext(null)



root.render(
  <React.StrictMode>
    <UrlProvider.Provider value={"http://m3.iswebdev.ru"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Navigate to={"/register"} replace />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/files-upload" element={
            <PrivateRoute>
              <FileUpload />
            </PrivateRoute>
          } />
          <Route path="/files-list" element={
            <PrivateRoute>
              <FilesList />
            </PrivateRoute>}
          />
          <Route path="/files-shared" element={<PrivateRoute><FilesShared /></PrivateRoute>} />
          <Route path="/files-access" element={<PrivateRoute><FilesAccess /></PrivateRoute>} />
          <Route path="/files-edit" element={<PrivateRoute><FilesEdit /></PrivateRoute>} />
        </Routes>
      </BrowserRouter>
    </UrlProvider.Provider>
  </React.StrictMode>
);


