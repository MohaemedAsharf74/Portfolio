import React from 'react'
import Typewriter from 'typewriter-effect'
import img from '../../Images/ProflieImage.jpg'
import style from './Profile.module.css'
import Lottie from 'lottie-react'
import developAnmi from '../../Animation/animation_lo5tpbb5.json'

export default function Profile() {
    return <>
        <div className='px-4 py-5' id='about'>
            <h1 className=' mb-5'>About Me</h1>
            <div className='row align-items-center'>
                <div className='col-md-7'>
                    <div className=''>
                        <img className={style.myImg} src={img} alt="" />
                        <h1 className='my-4'>
                            <Typewriter
                                options={{
                                    strings: ['Frontend Developer', 'React Js Developer', 'Next Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                        <p className=''>I’m a Highly skilled Frontend Developer with expertise in React.js and a strong passion for creating dynamic and interactive user interfaces., I excel at building responsive and visually appealing web applications.
                            As a React.js specialist, I have extensive experience in developing complex single-page applications (SPAs) and reusable UI components. I am proficient in state management with Redux and have a deep understanding of React Router
                            for seamless navigation. I am also well-versed in integrating RESTful APIs I have also gained a solid foundation in HTML5, CSS3, JavaScript, Bootstrap, React.js, Redux-toolkit, Context , Next.js, GitHub, Git&GitHub</p>
                        <div className={style.socialIcos}>
                            <a href="https://github.com/MohaemedAsharf74" target='blank' >
                                <i class="fa-brands fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/mohmaed-asharf-56305825b" target='blank'>
                                <i class="fa-brands fa-linkedin"></i>
                            </a>
                            <a href="https://www.facebook.com/mohamed.asharf.31586" target='blank'>
                                <i class="fa-brands fa-facebook"></i>
                            </a>
                        </div>
                        <a href="https://drive.usercontent.google.com/download?id=1GlZ93FllTlxcjAQQ3WgGSLFDK0NZjUfW&export=download&authuser=0&confirm=t&uuid=ddbe32f4-a3ac-441e-8835-e79982ce021a&at=APZUnTV_4_9yxLZ-wIgY_f0DGd8x:1699892409753">
                            <button className='btn btn-secondary my-4 btn-lg'>Download Cv</button>
                        </a>
                    </div>
                </div>
                <div className='col-md-5'>
                    <div className=''>
                        <div className=''>
                        <Lottie animationData={developAnmi} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
