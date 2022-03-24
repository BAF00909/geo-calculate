import React from 'react';
import {SideBar, TriangleCard} from './components/views';
import './app.css';

import { Route, Routes } from "react-router-dom";
import { CRow, CCol, CContainer } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'

const App = () => {

    return (
        <CRow>
            <CCol md={2}>
                <SideBar />
            </CCol>
            <CCol md={10}>
                <CContainer>
                    <Routes>
                        <Route path="/" element={<p>Общая информация</p>} />
                        <Route path="/triangle" element={<TriangleCard />} />
                        <Route path="/square" element={<p>Квадрат</p>} />
                        <Route path="/rectangle" element={<p>Прямоугольник</p>} />
                        <Route path="/circle" element={<p>Круг</p>} />
                    </Routes>
                </CContainer>
            </CCol>
        </CRow>
    );
}

export default App;