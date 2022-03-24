import React from 'react';
import {SideBar, TriangleCard, SquareCard, RectangleCard, CircleCard, About } from './components/views';
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
                        <Route path="/" element={<About />} />
                        <Route path="/triangle" element={<TriangleCard />} />
                        <Route path="/square" element={<SquareCard />} />
                        <Route path="/rectangle" element={<RectangleCard />} />
                        <Route path="/circle" element={<CircleCard />} />
                    </Routes>
                </CContainer>
            </CCol>
        </CRow>
    );
}

export default App;