import React from 'react';
import Page2 from '../Page2/Page2'
import style from './Page1.module.css'

import reactImg from '../../assets/img/img.png'

export default function page1() {
    return (
        <div>
            <h1 className={style.a}>klaj;sdflafjkd;ajklfadfjkladfjkl;</h1>
            <img src={reactImg} alt={"test"}/>
            <div className={"test"}>123</div>
            <Page2 />
        </div>
    )
}