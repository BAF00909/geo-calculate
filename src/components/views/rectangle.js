import React, { useState } from "react";
import { 
    CCard, CCardBody, 
    CCardHeader, 
    CForm, CFormLabel, 
    CFormInput, CRow,
    CCol } from '@coreui/react';
import {getSqRectangle} from '../models/rectangle';

const RectangleCard = () => {
    const [side1, setSide1] = useState(null);
    const [side2, setSide2] = useState(null);
    const handleChange = (e)=> {
        let target = e.target;
        if(target.id == 'side1'){
            setSide1(target.value);
        }else{
            setSide2(target.value);
        }
    }

    return (
        <CCard>
            <CCardHeader><h3>Прямоугольник</h3></CCardHeader>
            <CCardBody>
                <CRow>
                    <CCol md={6}>
                        <h5>Нахождение площади прямоугольника через две стороны (обобщенная формула):</h5>
                        <img src="./rectangle.png" />
                        <h6><b>S = a * b</b></h6>
                        <p><b>Где: </b></p>
                        <p><b>S - площадь прямоугольника</b></p>
                        <p><b>a - сторона прямоугольника</b></p>
                        <p><b>h - высота прямоугольника</b></p>
                    </CCol>
                    <CCol md={6}>
                        <CCard style={{padding:'15px'}}>
                            <CForm>
                                <CFormLabel htmlFor="side1"><b>Первая сторона прямоугольника:</b></CFormLabel>
                                <CFormInput id="side1" onChange={handleChange}/>
                                <CFormLabel htmlFor="side2"><b>Вторая сторона  прямоугольника:</b></CFormLabel>
                                <CFormInput id="side2" onChange={handleChange}/>
                                <CFormLabel htmlFor="result"><b>Площадь прямоугольника:</b></CFormLabel>
                                <CFormInput id="result" disabled={true} value={getSqRectangle(side1, side2)}/>
                            </CForm>
                        </CCard>
                    </CCol>
                </CRow>
            </CCardBody>
        </CCard>
    )
}

export default RectangleCard;