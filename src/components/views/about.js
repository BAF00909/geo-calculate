import React from "react";
import { 
    CCard, CCardBody, 
    CCardHeader, 
    CForm, CFormLabel, 
    CFormInput, CRow,
    CCol } from '@coreui/react';

const About = () => {
    return (
        <CCard>
            <CCardHeader><img src="./logo.png" /></CCardHeader>
            <CCardBody>
                <p><b>Наименование учереждения:</b> МОУ Лицей №4 г.Волгоград Красноармейский район</p>
                <p><b>Наименование проекта:</b> Калькулятор для автоматизированного вычисления площадей геометрических фигур GEOCalculate</p>
                <p><b>Проект выполнил:</b> Бреус Никита</p>
                <p><b>2022г</b></p>
            </CCardBody>
            <CCardHeader>
                <a 
                    href="https://github.com/BAF00909/geo-calculate" 
                    target="_blank"
                    style={{textDecoration:'none', color:'#000'}}
                >
                    <img src="./github.svg" height="25px"/> Проект на GitHub
                </a>
            </CCardHeader>
        </CCard>
    )
}

export default About;