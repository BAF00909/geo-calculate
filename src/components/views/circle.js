import React, { useState } from "react";
import {getSqCircle} from '../models/circle';
import { 
    CCard, CCardBody, 
    CCardHeader, 
    CForm, CFormLabel, 
    CFormInput, CRow,
    CCol } from '@coreui/react';

const CircleCard = () => {
    const [radius, setRadius] = useState(null);

    const handleChange = (e)=> {
        let target = e.target;
        if(target.id == 'radius'){
            setRadius(target.value);
        }
    }
    return (
        <CCard>
            <CCardHeader><h3>Круг</h3></CCardHeader>
            <CCardBody>
                <CRow>
                    <CCol md={6}>
                        <h5>Нахождение площади круга по его радиусу (обобщенная формула):</h5>
                        <img src="./circle.png" />
                        <h6><b>S = a * a</b></h6>
                        <p><b>Где: </b></p>
                        <p><b>S - площадь круга</b></p>
                        <p><b>r - радиус круга</b></p>
                    </CCol>
                    <CCol md={6}>
                        <CCard style={{padding:'15px'}}>
                            <CForm>
                                <CFormLabel htmlFor="radius"><b>Радиус круга:</b></CFormLabel>
                                <CFormInput id="radius" onChange={handleChange}/>
                                <CFormLabel htmlFor="result"><b>Площадь круга:</b></CFormLabel>
                                <CFormInput id="result" disabled={true} value={getSqCircle(radius)}/>
                            </CForm>
                        </CCard>
                    </CCol>
                </CRow>
            </CCardBody>
        </CCard>
    )
}

export default CircleCard;