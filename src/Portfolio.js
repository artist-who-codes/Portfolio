import React, { useState } from "react"
import "./Portfolio.css"

import next from './media/next.png';
import previous from './media/previous.png';
import img2 from './media/Flower1.jpg';
import img3 from './media/Leaf.jpg';
import img4 from './media/Flower3.jpg';
import img5 from './media/Sparkles.jpg';
import img6 from './media/Web.jpg';
import img7 from './media/Flower.jpg';
import img1 from './media/BlueFlower.jpg';

const Portfolio = () => {

    const Images = [
        { image: img1 },
        { image: img2 },
        { image: img3 },
        { image: img4 },
        { image: img5 },
        { image: img6 },
        { image: img7 },
    ];
    const [Current, setCurrent] = useState(0);
    const length = Images.length;
    const handlePrevious = () => {
        setCurrent(Current === 0 ? length - 1 : Current - 1);
    };

    const handleNext = () => {
        setCurrent(Current === length - 1 ? 0 : Current + 1);
    };

    if (!Array.isArray(Images) | Images.length <= 0) {
        return null;
    }

    return (
        <div className="background">
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <div className="CandN">

                <div className="BlurBG">
                    <div className="NavBar">
                        <div style={{ animationName: 'fadeIn', animationDuration: '3s' }}>
                            <div className="name">Abirami Muthukumarasamy</div>
                            <div>
                                <a href="#Skills"> Skills</a>
                                <a href="#Projects"> Projects</a>
                                <a href="#Contactme"> Contact Me</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content">

                    <div className="Aboutme">
                        <div className="Abirami">Hi there!</div>
                        <div className="description">I am a Front end developer who is interested in creating good websites and willing to learn more. I am a student enrolled in bachelor's degree. I have relevant skills and I can improve my skills too, because I am quick learner. I am currently looking for part-time work </div><br></br><br></br>
                        <button><a href="#Projects" >Explore me</a></button>
                    </div>

                    <hr></hr>




                    <div id="Skills" className="Skills">
                        <div className="Header">My Skills</div>
                        <div className="logos">
                            <img src="https://cdn.iconscout.com/icon/free/png-512/html5-10-569380.png" alt='html' width='10%'></img>
                            <img src="https://icon-library.com/images/css3-icon/css3-icon-28.jpg" alt='css' width='10%'></img>
                            <img src="https://www.freepngimg.com/download/android/72537-icons-python-programming-computer-social-tutorial.png" alt='python' width='10%'></img>
                            <img src="https://www.pikpng.com/pngl/b/146-1469146_java-logo-transparent-png.png" alt='css' width='7%'></img>
                            <img src="http://nightdeveloper.net/wp-content/uploads/2018/01/1200px-React-icon.svg_-768x542.png" alt='css' width='12%'></img>
                            <img src="https://images.vexels.com/media/users/3/166403/isolated/preview/a5a33bf3004830a2bd581e9fa65de660-icono-del-lenguaje-de-programaci-oacute-n-javascript-by-vexels.png" alt='css' width='9%'></img>
                        </div>

                        <br></br><br></br><br></br><br></br><br></br>
                        <div className="SubHeader">My other general skills include</div>
                        <div className="general_skills">

                            <div >
                                <img src="https://webstockreview.net/images/dictionary-clipart-vocabulary-test-11.png" alt='css' width='100vw'></img>
                                <p>English proficiency</p>

                            </div>
                            <div>
                                <img src="https://static.wixstatic.com/media/86e7f7_961ddd74fcfb41f194f0665314f11394~mv2.png/v1/fill/w_445,h_445,al_c,lg_1/86e7f7_961ddd74fcfb41f194f0665314f11394~mv2.png" alt='css' width='100vw'></img>
                                <p>Logical thinking</p>

                            </div>
                            <div>
                                <img src="https://images.vexels.com/media/users/3/146895/isolated/preview/5e9d3222fa9269213c6747474cba1209-light-bulb-design-by-vexels.png" alt='css' width='100vw'></img>
                                <p>Problem Solving </p>

                            </div>
                            <div>
                                <img src="https://pngimg.com/uploads/photo_camera/photo_camera_PNG101609.png" alt='css' width='120vw' height='100vw'></img>
                                <p>  Photography</p>
                            </div>
                        </div>
                        <div className="Carousel">
                            <div className="CarouselFlex">
                                <div>
                                    <button style={{ padding: '5%', alignItems: 'center' }} onClick={handlePrevious} ><img src={previous} alt="left arrow" width='50vw' height=''></img></button>
                                </div>
                                <div className="images" style={{ padding: '3%' }}>
                                    {Images.map((slide, index) => {
                                        return (<div key={index}> {index === Current && (<img src={slide.image} alt="" width='200vw' />)}</div>)
                                    })}
                                </div>
                                <div>
                                    <button style={{ padding: '5%', alignItems: 'center' }} onClick={handleNext}><img src={next} alt="right arrow" width='50vw' height=''></img></button>
                                </div>
                            </div>
                            <div className="picPara" >
                                <p>These are my photography skills<br></br>These pictures are took in phone which has high camera quality</p>
                            </div>
                        </div >

                    </div>



                    <hr></hr>




                    <div id="Projects" className="Projects" style={{ textAlign: "right", width: "70%" }}>
                        <div className="Header"> My Works </div>
                        <br></br>

                        <div className="SubHeader" >The Flames Game</div>
                        <p>This is a website that I created to learn <b>Svelte </b>Framework at leisure time. The backend of this site was first created in python as to play around with logics along with people who are interested in logics. Later, JavaScript Code was created  when got the idea to create a website and attached to it. This web app was created with less CSS and just straight to the point. The website can be found <a href="https://master--reliable-cendol-ac7511.netlify.app/">here</a> and the code can be found <a href="https://github.com/artist-who-codes/The-Flames-Game">here</a></p>

                        <div className="SubHeader">Resume</div>
                        <p>This Resume is built with the framework <b>React</b>. This was my first successful web app which I tried with a model design after a few failed attempts. This, too, was created with minimal but decent CSS. I used the simple React-hook useState( ) to create the Image slider in this Resume. The code for this app can be found <a href="https://github.com/artist-who-codes/Portfolio">here</a> </p>

                        <div className="SubHeader">SemScape</div>
                        <p>SemScape is the pool of study materials that is useful for both universities and students. It is creted to reduce friction between students and reduce the stress during semesters. It is an open source project, and can be developed by anyone. It is the project that I am currently working on and its being created with the framework <b>Svelte </b>.</p>
                    </div>



                    <hr></hr>



                    <div id="Contactme" className="Contactme">
                        <div className="Header">Approach Me!</div>
                        <div className="flex">
                            <div style={{ textAlign: "center" }}>
                                <a href='mailto:abimuthu.2114@gmail.com'><img src='https://iconape.com/wp-content/uploads/1/11/gmail-02.png' alt="mail" width='120'></img></a>
                                <div style={{ paddingTop: '15%' }}><a href='mailto:abimuthu.2114@gmail.com'>Mail Me</a></div>
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <a href="https://www.linkedin.com/in/abirami-muthukumarasamy-1b7483227/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BBLr63j4CS4mONjMDrX%2BFNQ%3D%3D"><img src='https://www.vhv.rs/file/max/9/98187_linkedin-transparent-png.png' width="60" alt="Linked In"></img></a>
                                <div style={{ paddingTop: '15%' }}><a href='https://www.linkedin.com/in/abirami-muthukumarasamy-1b7483227/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BBLr63j4CS4mONjMDrX%2BFNQ%3D%3D'>Check My LinkedIn</a></div>
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <a href="https://www.linkedin.com/in/abirami-muthukumarasamy-1b7483227/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BBLr63j4CS4mONjMDrX%2BFNQ%3D%3D"><img src='https://webstockreview.net/images/github-icon-png-8.png' width="60" alt="github"></img></a>
                                <div style={{ paddingTop: '15%' }}><a href="https://www.linkedin.com/in/abirami-muthukumarasamy-1b7483227/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BBLr63j4CS4mONjMDrX%2BFNQ%3D%3D">Check My GitHub</a></div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </div >
    )
}

export default Portfolio