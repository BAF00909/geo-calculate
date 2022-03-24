import React, { useState, useEffect } from "react";
//import {sqSquare} from '../models/square';
import { 
    CCard, CCardBody, 
    CCardHeader, 
    CForm, CFormLabel, 
    CFormInput, CRow,
    CCol } from '@coreui/react';

const SquareCard = () => {
    const [side, setSide] = useState(null);

    const handleChange = (e)=> {
        let target = e.target;
        if(target.id == 'side'){
            setSide(target.value);
        }
    }
    return (
        <CCard>
            <CCardHeader><h3>Квадрат</h3></CCardHeader>
            <CCardBody>
                <CRow>
                    <CCol md={6}>
                        <h5>Нахождение площади квадрата через его сторону (обобщенная формула):</h5>
                        <img src="./square.png" />
                        <h6><b>S = a^2</b></h6>
                        <p><b>Где: </b></p>
                        <p><b>S - площадь квадрата</b></p>
                        <p><b>a - сторона квадрата</b></p>
                    </CCol>
                    <CCol md={6}>
                        <CCard style={{padding:'15px'}}>
                            <CForm>
                                <CFormLabel htmlFor="side"><b>Сторона квадрата:</b></CFormLabel>
                                <CFormInput id="side" onChange={handleChange}/>
                                <CFormLabel htmlFor="result"><b>Площадь квадрата:</b></CFormLabel>
                                <CFormInput id="result" disabled={true} value={0}/>
                            </CForm>
                        </CCard>
                    </CCol>
                </CRow>
            </CCardBody>
        </CCard>
    )
}

export default SquareCard;