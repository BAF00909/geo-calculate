import React, { useState } from "react";
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
                    <CCol md={6}>
                        <h5>Нахождение площади треугольника по его высоте и основанию (обобщенная формула):</h5>
                        <img src="./triangle.png" />
                        <h6><b>S = 1/2 * (a * h)</b></h6>
                        <p><b>Где: </b></p>
                        <p><b>S - площадь треугольника</b></p>
                        <p><b>a - сторона треугольника</b></p>
                        <p><b>h - высота треугольника</b></p>
                    </CCol>
                    <CCol md={6}>
                        <CCard style={{padding:'15px'}}>
                            <CForm>
                                <CFormLabel htmlFor="side"><b>Сторона треугольника:</b></CFormLabel>
                                <CFormInput id="side" onChange={handleChange}/>
                                <CFormLabel htmlFor="height"><b>Высота треугольника:</b></CFormLabel>
                                <CFormInput id="height" onChange={handleChange}/>
                                <CFormLabel htmlFor="result"><b>Площадь треугольника:</b></CFormLabel>
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