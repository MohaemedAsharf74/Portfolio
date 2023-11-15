import React from 'react'
import style from './Skills.module.css'
import html from '../../Images/TechSkills/HTML5.png'
import css from '../../Images/TechSkills/CSS3.png'
import js from '../../Images/TechSkills/JS.png'
import boot from '../../Images/TechSkills/Bootstrap.png'
import ts from '../../Images/TechSkills/typescript.png'
import figma from '../../Images/TechSkills/Figma.png'
import react from '../../Images/TechSkills/React.png'
import next from '../../Images/TechSkills/nextjs.png'
import saas from '../../Images/TechSkills/Sass.png'
import jquery from '../../Images/TechSkills/jquery.png'
import redux from '../../Images/TechSkills/redux.png'
import Git from '../../Images/TechSkills/Git.png'
import Marquee from 'react-fast-marquee'
export default function Skills() {
    return <>
        <div className={style.skill + ' px-4'} id='skills'>
            <h1 className='mb-0' >Skills</h1>
            <Marquee gradient={false}
                speed={100}
                pauseOnClick={true}
                // pauseOnHover={true}
                delay={0}
                play={true}
                direction="right">
                <div>
                    <div className={style.sk + ' text-center'}>
                        <img src={html} alt="" />
                        <h2 className='h5'>Html5</h2>
                    </div>
                </div>
                <div>
                    <div className={style.sk + ' text-center'}>
                        <img  src={css} alt="" />
                        <h2 className='h5'>CSS3</h2>
                    </div>
                </div>
                <div>
                    <div className={style.sk + ' text-center'}>
                        <img  src={js} alt="" />
                        <h2 className='h5'>JavaScript</h2>
                    </div>
                </div>
                <div>
                    <div className={style.sk + ' text-center'}>
                        <img  src={saas} alt="" />
                        <h2 className='h5'>saas</h2>
                    </div>
                </div>
                <div>
                    <div className={style.sk + ' text-center'}>
                        <img  src={boot} alt="" />
                        <h2 className='h5'>Bootstrap</h2>
                    </div>
                </div>
                <div>
                    <div className={style.sk + ' text-center'}>
                        <img  src={react} alt="" />
                        <h2 className='h5'>React js</h2>
                    </div>
                </div>
                <div>
                    <div className={style.sk + ' text-center'}>
                        <img  src={next} alt="" />
                        <h2 className='h5'>Next Js</h2>
                    </div>
                </div>
                <div>
                    <div className={style.sk + ' text-center'}>
                        <img  src={jquery} alt="" />
                        <h2 className='h5'>jquery</h2>
                    </div>
                </div>
                <div>
                    <div className={style.sk + ' text-center'}>
                        <img  src={figma} alt="" />
                        <h2 className='h5'>Figma</h2>
                    </div>
                </div>
                <div>
                    <div className={style.sk + ' text-center'}>
                        <img  src={ts} alt="" />
                        <h2 className='h5'>TypeScript</h2>
                    </div>
                </div>
                <div>
                    <div className={style.sk + ' text-center'}>
                        <img  src={Git} alt="" />
                        <h2 className='h5'>Git</h2>
                    </div>
                </div>
                <div>
                    <div className={style.sk + ' text-center'}>
                        <img  src={redux} alt="" />
                        <h2 className='h5'>Redux</h2>
                    </div>
                </div>
            </Marquee >
        </div>
    </>
}
