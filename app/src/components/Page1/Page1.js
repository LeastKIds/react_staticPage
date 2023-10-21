import React from 'react';
import Page2 from '../Page2/Page2'
import style from './Page1.module.css'

// const reactImg = require('../../img/common/test.png')
import reactImg from '../../img/common/react.png'
import test2 from '../../img/detail/test1/test.png'

export default function page1() {
    return (
        <div>
            <h1 className={style.a}>klaj;sdflafjkd;ajklfadfjkladfjkl;</h1>
            <img src={reactImg} alt={"test"}/>
            <img src={test2} alt={"test"}/>
            <div className={"test"}>123</div>
            <Page2 />
        </div>
    )
}