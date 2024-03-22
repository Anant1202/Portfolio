import "../assets/css/homepage.css"
import profile from "../assets/img/download.png"
import linkedIn from "../assets/img/linkedin.png"
import git from "../assets/img/github-logo.png"

function Homepage(event) {
    return (
        <>
            <div className="homepage">
                <div className="summary">
                    <div className="basicsummary">
                        <div className="nameheading">
                            <p style={{ color: '#FFE6E6' }}>Hello 👋 I'm</p>
                            <section class="animation">
                                <div class="first">ANANT VIKRAM SINGH</div>
                                <div class="second">SOFTWARE DEVELOPER</div>
                            </section>
                        </div>
                        <p className="homepageintro" style={{ marginBottom: "20px", color: '#FFE6E6' }}>Dedicated to broadening my expertise in
                            <br />crafting and developing high-performing
                            <br />websites for optimal user experiences.
                        </p>
                        <div className="buttons">
                            <button className="buttoncontact" onClick={() => window.location.href = '#'}>RESUME</button>
                            <ul className="socialIcon">
                                <li className="socialmedia">
                                    <a className='socialmediaIcon' href="#">
                                        <i class="fa-brands fa-linkedin-in icon"></i>
                                    </a>
                                </li>
                                <li className="socialmedia">
                                    <a className='socialmediaIcon' href="#">
                                        <i class="fa-brands fa-github-alt icon"></i>
                                    </a>
                                </li>
                                <li className="socialmedia">
                                    <div className="gmail">
                                        <a className='socialmediaIcon' href="#">
                                            <i class="fa-solid fa-envelope-open-text icon"></i>
                                        </a>
                                        <div className="tooltiptext">anantsingh1202@gmail.com</div>
                                    </div>
                                </li>
                                <li className="socialmedia">
                                    <a className='socialmediaIcon' href="#">
                                        <i class="fa-brands fa-whatsapp icon"></i>
                                    </a>
                                </li>
                                <li className="socialmedia">
                                    <div className="gmail">
                                        <a className='socialmediaIcon' href="#">
                                            <i class="fa-solid fa-mobile icon"></i>
                                        </a>
                                        <div className="tooltiptext">9004250294</div>
                                    </div>
                                </li>
                            </ul>
                            {/* <a href="https://www.linkedin.com/in/anant-singh-24722a109" >
                            <img  className="linkedinbutton" src={linkedIn} alt="LinkedIn link"/>
                        </a>
                        <div>
                            <img  className="gitbutton" src={git} alt="Git link"/>
                        </div> */}
                        </div>

                    </div>
                    <img className="homepic" src={profile} alt="Profile pic" height={"380px"} width={"380px"} style={{ borderRadius: "10px" }} />
                </div>

            </div >
        </>
    )
}
export default Homepage