import React, { useState, useEffect } from "react";
import {sqTriangle} from '../models/triangle';
import { 
    CCard, CCardBody, 
    CCardHeader, 
    CForm, CFormLabel, 
    CFormInput, CRow,
    CCol } from '@coreui/react';

const TriangleCard = () => {
    const [side, setSide] = useState(null);
    const [height, setHeight] = useState(null);
    const handleChange = (e)=> {
        let target = e.target;
        if(target.id == 'side'){
            setSide(target.value);
        }else{
            setHeight(target.value);
        }
    }
    return (
        <CCard>
            <CCardHeader><h3>Треугольник</h3></CCardHeader>
            <CCardBody>
                <CRow>
                    <CCol md={6}><p>Нахождение площади треугольника по его высоте и основанию (обобщенная формула)</p></CCol>
                    <CCol md={6}>
                        <CCard>
                            <CForm>
                                <CFormLabel htmlFor="side">Сторона:</CFormLabel>
                                <CFormInput id="side" onChange={handleChange}/>
                                <CFormLabel htmlFor="height">Высота:</CFormLabel>
                                <CFormInput id="height" onChange={handleChange}/>
                                <CFormLabel htmlFor="result">Резудьтат:</CFormLabel>
                                <CFormInput id="result" disabled={true} value={sqTriangle(side,height)}/>
                            </CForm>
                        </CCard>
                    </CCol>
                </CRow>
            </CCardBody>
        </CCard>
    )
}

export default TriangleCard;