
import "./Portfolio.css"


const Portfolio = () => {



    return (
        <div className="background">
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <div className="CandN">

                <div className="BlurBG">
                    <div className="NavBar">
                        <div style={{ animationName: 'fadeIn', animationDuration: '3s' }}>
                            <div className="name">Abirami </div>
                            <div>
                                <br></br>
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
                        <button><a href="#Projects" >Explore more</a></button>
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
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/64px-Svelte_Logo.svg.png" alt='css' width='7%'></img>
                            <img src="https://cdn.freebiesupply.com/logos/large/2x/git-icon-logo-png-transparent.png" alt='css' width='9%'></img>
                        </div>
                    </div>



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
                    <div className="flex">
                        <div className="Header">Contact me</div>
                        <div style={{ textAlign: "center" }}>
                            <a href='mailto:abimuthu.2114@gmail.com'><img src='https://www.freepnglogos.com/uploads/logo-gmail-png/logo-gmail-png-file-gmail-icon-svg-wikimedia-commons-0.png' alt="mail" width='60'></img></a>
                            <div style={{ paddingTop: '15%' }}><a href='mailto:abimuthu.2114@gmail.com'>G-Mail</a></div>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <a href="https://www.linkedin.com/in/abirami-muthukumarasamy-1b7483227/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BBLr63j4CS4mONjMDrX%2BFNQ%3D%3D"><img src='https://blog.carltonstaffing.com/wp-content/uploads/2020/09/linkedin-icon-logo-png-transparent-1024x1024.png' width="60" alt="Linked In"></img></a>
                            <div style={{ paddingTop: '15%' }}><a href='https://www.linkedin.com/in/abirami-muthukumarasamy-1b7483227/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BBLr63j4CS4mONjMDrX%2BFNQ%3D%3D'>LinkedIn</a></div>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <a href="https://www.linkedin.com/in/abirami-muthukumarasamy-1b7483227/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BBLr63j4CS4mONjMDrX%2BFNQ%3D%3D"><img src='https://webstockreview.net/images/github-icon-png-8.png' width="60" alt="github"></img></a>
                            <div style={{ paddingTop: '15%' }}><a href="https://www.linkedin.com/in/abirami-muthukumarasamy-1b7483227/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BBLr63j4CS4mONjMDrX%2BFNQ%3D%3D">GitHub</a></div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Portfolio