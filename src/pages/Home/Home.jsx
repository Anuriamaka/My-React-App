import "./Home.css"
import Header from "../../Components/header/Header.jsx"
import Button from "../../Components/Button/Button.jsx"
import Footer from "../../Components/Footer/Footer.jsx"


export default function Home () {
    return (
        <section className="container">
             <Header/>

                <section className="firstSection">
                    <div className="firstSectionText">
                        <p className="learnAndGet">Learn & Get Certificates</p>
                        <h1 className="freeOnline">Free Online Courses With Certificates & Diplomas</h1>
                        <h4>25 Million Learners.15 Years.100%</h4>
                        <input type="text" placeholder="What do you want to learn today?" />
                        <div className="searchIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"/></svg>
                        </div>

                    </div>

                    <div className="firstImages">
                        <img  className="pluStudents" src="/Images/Background+Shadow.png" alt="" />
                        <img  className="firstThumbnail" src="/Images/thumb-1-2.800b1ce43c2f9d188ca8.png.png" alt="" />
                        <img className="secondThumbnail" src="/Images/thumb-1-1.79a0034cf9029854151f.png.png" alt="" />
                        <img className="successStudents" src="/Images/Paragraph+Background+Shadow (1).png" alt="" />
                        <img className="redDot" src="/Images/redDot.png" alt="" />
                    </div>
                </section>

                <section className="secondSection">
                        <div className="secondImages">
                            <img className="threeStars" src="/Images/image (2).png" alt="" />
                            <img className="singleLady" src="/Images/ed-about-2-1.ac24e50fdc8faa9576d3.png.png" alt="" />
                            <img className="yearsExperience" src="/Images/ed-about-2-3.151864be9899f688b86d.png.png" alt="" />
                            <img className="twoLadiesImg" src="/Images/ed-about-2-2.9619c68fdc0abab76a3e.png.png" alt="" />

                        </div>

                        <div className="secondSectionText">
                            <h5> <span> <img src="/Images/ring.png" alt="" /> </span> About Us</h5>
                            <h1>Benefit From Our Online Learning Expertise Earn <span style={{color: "red"}}>Professional</span></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore.</p>

                            <div className="missionVision">
                                <div>
                                    <h2>OUR MISSION:</h2>
                                    <p>Suspendisse ultrice gravida dictum fusce placerat ultricies integer quisauctor elit sed vulputate mi sit.</p>
                                </div> 

                                <div>
                                    <h2>OUR VISION:</h2>
                                    <p>Suspendisse ultrice gravida dictum fusce placerat ultricies integer quisauctor elit sed vulputate mi sit.</p>
                                </div>                                 

                            </div>

                            <Button text="Admission Open"/>


                        </div>
                </section>

                <section className="thirdSection">
                        <h5> <span> <img src="/Images/ring.png" alt="" /> </span> TOP POPULAR COURSE</h5>
                    <div className="thirdSectionText">                        
                        <h1>Check Out Educate Features Win Any Exam</h1>
                        <Button text="Browse Edunity Courses"/>
                    </div>

                    <div className="coursesContainer">

                        <div className="courseCardContainer">
                            <div className="courseCard">
                            <div className="imageWrapper">
                                <span className="badge">Development</span>
                                <img
                                src="/Images/course-1-1.731e8d1767a1d30c069a.jpg.png"
                                alt="Course"
                                />
                            </div>

                            <div className="courseContent">
                                <div className="rating">
                                ⭐⭐⭐⭐⭐ <span>(4.7)</span>
                                </div>

                                <h3 className="title">
                                <a href="/course/it-statistics-data-science">
                                    IT Statistics Data Science And Business Analysis
                                </a>
                                </h3>

                                

                                <div className="meta">
                                <span>📘 Lesson 10</span>
                                <span>⏱ 19h 30m</span>
                                <span>👤 Students 20+</span>
                                </div>

                                <hr />

                                <div className="footer">
                                <div className="author">
                                    <img
                                    src="https://randomuser.me/api/portraits/women/44.jpg"
                                    alt="Author"
                                    />
                                    <span>By Angela in Development</span>
                                </div>

                                <div className="priceCart">
                                    <span className="price">
                                    $60 <del>$120</del>
                                    </span>
                                    <button className="cartBtn">🛒 Add To Cart</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        

                        </div>

                        <div>
                            <div className="courseCard">
                            <div className="imageWrapper">
                                <span className="badge">Development</span>
                                <img
                                src="/Images/course-1-2.845574cd1813a4d51f5d.jpg.png"
                                alt="Course"
                                />
                            </div>

                            <div className="courseContent">
                                <div className="rating">
                                ⭐⭐⭐⭐⭐ <span>(4.7)</span>
                                </div>

                                <h3 className="title">
                                <a href="/course/it-statistics-data-science">
                                    IT Statistics Data Science And Business Analysis
                                </a>
                                </h3>


                                <div className="meta">
                                <span>📘 Lesson 10</span>
                                <span>⏱ 19h 30m</span>
                                <span>👤 Students 20+</span>
                                </div>

                                <hr />

                                <div className="footer">
                                <div className="author">
                                    <img
                                    src="https://randomuser.me/api/portraits/women/44.jpg"
                                    alt="Author"
                                    />
                                    <span>By Angela in Development</span>
                                </div>

                                <div className="priceCart">
                                    <span className="price">
                                    $60 <del>$120</del>
                                    </span>
                                    <button className="cartBtn">🛒 Add To Cart</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        
                        </div>

                        <div>
                            <div className="courseCard">
                            <div className="imageWrapper">
                                <span className="badge">Development</span>
                                <img
                                src="/Images/course-1-3.d5a7a58edd85340e9750.jpg (1).png"
                                alt="Course"
                                />
                            </div>

                            <div className="courseContent">
                                <div className="rating">
                                ⭐⭐⭐⭐⭐ <span>(4.7)</span>
                                </div>

                                <h3 className="title">
                                <a href="/course/it-statistics-data-science">
                                    IT Statistics Data Science And Business Analysis
                                </a>
                                </h3>


                                <div className="meta">
                                <span>📘 Lesson 10</span>
                                <span>⏱ 19h 30m</span>
                                <span>👤 Students 20+</span>
                                </div>

                                <hr />

                                <div className="footer">
                                <div className="author">
                                    <img
                                    src="https://randomuser.me/api/portraits/women/44.jpg"
                                    alt="Author"
                                    />
                                    <span>By Angela in Development</span>
                                </div>

                                <div className="priceCart">
                                    <span className="price">
                                    $60 <del>$120</del>
                                    </span>
                                    <button className="cartBtn">🛒 Add To Cart</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        
                        </div>

                    </div>

                </section>

                <section className="fourthSection">
                    <div className="fourthSectionTextSection">
                        <h5><span><img src="/Images/ring.png" alt="" /></span> OUR STATUS VALUE</h5>
                        <h1>Our Classroom Is A Very Deferent <span style={{color:"red"}}>School</span> Than All The Others</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        <img src="/Images/Container (1).png" alt="" />                 
                        <img src="/Images/Container (2).png" alt="" />                 
                        <img src="/Images/Container (3).png" alt="" />                 
                        <img src="/Images/Container (4).png" alt="" />                 

                    </div>

                    <div className="fourthSectionImageSection">
                        <img className="mainImage" src="/Images/value-1.e7f928f15a70b6d9bbb5.jpg (2).png" alt="" />
                        <img  className="redRectangle" src="/Images/red rectangle.png" alt="" />


                    </div>

                </section>

                <section className="fifthSection" >
                    <div className="fifthSectionText">
                        <h5><span><img src="/Images/ring.png" alt="" /></span> EDUNITY FEATURE 
                        <span><img src="/Images/ring.png" alt="" /></span></h5>
                       
                        <h1>Check Out Educate Features <br />Win Any Exam</h1>
                        
                    </div>

                    <div className="fifthSectionLower">
                        <div className ="lowerSectionGrid">
                        <img src="/Images/Background (4).png" alt="" />
                        <h2>Best Cooking</h2>
                        <p>In pellentesque massa vida placerat duis. Cursus sit amet dictum sit amet.</p>
                        <Button text="View Details"/>
                        </div>

                        <div className ="lowerSectionGrid">
                        <img src="/Images/Background (4).png" alt="" />
                        <h2>Best Cooking</h2>
                        <p>In pellentesque massa vida placerat duis. Cursus sit amet dictum sit amet.</p>
                        <Button text="View Details"/>
                        </div>

                        <div className ="lowerSectionGrid">
                        <img src="/Images/Background (4).png" alt="" />
                        <h2>Best Cooking</h2>
                        <p>In pellentesque massa vida placerat duis. Cursus sit amet dictum sit amet.</p>
                        <Button text="View Details"/>
                        </div>

                        <div className ="lowerSectionGrid">
                        <img src="/Images/Background (4).png" alt="" />
                        <h2>Best Cooking</h2>
                        <p>In pellentesque massa vida placerat duis. Cursus sit amet dictum sit amet.</p>
                        <Button text="View Details"/>
                        </div>

                    </div>

                </section>

                <Footer/>


                                


        </section>

        

       

       
    )
}