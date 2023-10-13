import { render } from "@testing-library/react";
import { useState } from "react";
import ReactDOM from 'react-dom/client';
import 'font-awesome/css/font-awesome.min.css';
function CollegduniaForm() {

    const [name, setName] = useState("");
    const [nameerror, setNameError] = useState('');

    const [email, setEmail] = useState("");
    const [emailerror, setEmailError] = useState('');

    const [mobileno, setMobile] = useState("");
    const [mobileerror, setMobileError] = useState('');


    const [cityname, setCity] = useState("");
    const [cityerror, setCityError] = useState('');


    const [coursename, setCourse] = useState("");
    const [courseserror, setCourseError] = useState('');
    const [isAgreed, setIsAgreed] = useState(false);

    const handleAgreementChange = () => {
        setIsAgreed(!isAgreed);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const mobileNumberPattern = /^\d{10}$/;
        if (name.length > 10 || name.length == 0) {
            setNameError('Enter a valid name ');
        }

        if (!emailPattern.test(email)) {
            setEmailError('Please enter a valid email address.');
        }
        if (!mobileNumberPattern.test(mobileno)) {
            setMobileError('Please enter a valid mobile number.');
        }
        if (cityname == 0) {
            setCityError('Enter a city name ');
        }
        if (coursename == 0) {
            setCourseError('Enter a course name ');
        }
        if (isAgreed == false) {
            alert('Please checkbox the agree button to move forward ');
        }
        else {
            // Handle the form submission without an error
            setNameError('');
            // Your form submission logic here
            // alert(`The name you entered was: ${name}`)
        }
    }
    return <>
        <div className="container" style={{ textAlign: "left", margin: "20px" }}>

            <div className=" row">
                <div className="col-lg-4">
                    <div className="container" style={{ backgroundColor: "#F5F5F5" }}><br></br>
                        <h5>How Collegedunia helps you in  Admission</h5><br></br>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card">
                                    <img className="card-img-top" src="https://www.wikihow.com/images/thumb/1/18/Take-Better-Notes-Step-1-Version-2.jpg/v4-460px-Take-Better-Notes-Step-1-Version-2.jpg.webp" alt="Card image cap"></img>

                                </div>
                                <p style={{ textAlign: "center", fontSize: "12px", marginTop: "5px" }}>Brocher Details</p>
                            </div>
                            <div className="col-lg-6">
                                <div className="card">
                                    <img className="card-img-top" src="https://static.vecteezy.com/system/resources/previews/016/389/981/non_2x/education-expenses-and-scholarship-free-png.png" alt="Card image cap"></img>

                                </div>
                                <p style={{ textAlign: "center", fontSize: "12px", marginTop: "5px" }}>Check Detailed Fees</p>
                            </div>
                            <br>
                            </br><br></br>
                            <div className="col-lg-6">
                                <div className="card">
                                    <img className="card-img-top" src="https://images.shiksha.com/mediadata/images/articles/1643619486phpMeD9Bu.jpeg" alt="Card image cap"></img>

                                </div>
                                <p style={{ textAlign: "center", fontSize: "12px", marginTop: "5px" }}>Shorrtlist & Apply</p>
                            </div>
                            <div className="col-lg-6">
                                <div className="card">
                                    <img className="card-img-top" src="https://media.istockphoto.com/id/1322139094/photo/multiethnic-colleagues-sitting-at-desk-looking-at-laptop-computer-in-office.jpg?s=612x612&w=0&k=20&c=xrGP_nwtcdaZF8heKJ_FiEqnuqWxv1A7i71YZLXxSaE=" alt="Card image cap"></img>

                                </div>
                                <p style={{ textAlign: "center", fontSize: "12px", marginTop: "5px" }}>24/7 cosulting</p>
                            </div>
                            <div className="col-lg-6">
                                <div className="card">
                                    <img className="card-img-top" src="https://img.freepik.com/premium-vector/graduation-cost-expensive-education-scholarship-loan-budget_101884-1023.jpg" alt="Card image cap"></img>

                                </div>
                                <p style={{ textAlign: "center", fontSize: "12px", marginTop: "5px" }}>Scholarship</p>
                            </div>
                            <div className="col-lg-6">
                                <div className="card">
                                    <img className="card-img-top" src="https://media.istockphoto.com/id/991248260/vector/calendar-and-clock-icon.jpg?s=612x612&w=0&k=20&c=lfRj2_QoJrjTuIfIn3AQzElPZf0rcUGzqqB1SGyDV4Y=" alt="Card image cap"></img>

                                </div>
                                <p style={{ textAlign: "center", fontSize: "12px", marginTop: "5px" }}>Application Deadlines</p>
                            </div>
                        </div>
                        <h5>What people Say</h5><br></br>


                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active"  >
                                    <div className="row ">
                                        <div className="card" style={{ width: "100%", marginRight: "20px" }}>
                                            <div className="row" style={{ padding: "20px", width: "100%" }}>
                                                <div className="col-lg-2">
                                                    <div className="">
                                                        <img className="card-img-top" style={{ borderRadius: "50%", width: "40px", height: "40px" }} src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Placeholder_Person.jpg"></img>

                                                    </div>

                                                </div>
                                                <div className="col-lg-10" style={{ width: "" }}>
                                                    <div className="">
                                                        <small> Loreum dasdasipsum  Loreum ipsumLoreumipm  Loreum ipsum  Loreupsum  Loreum ipsummipsum </small>
                                                        <br></br><b>Anshul Tiwari</b>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row ">
                                        <div className="card" style={{ width: "100%", marginRight: "20px" }}>
                                            <div className="row" style={{ padding: "20px", width: "100%" }}>
                                                <div className="col-lg-2">
                                                    <div className="">
                                                        <img className="card-img-top" style={{ borderRadius: "50%", width: "40px", height: "40px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgbI78v3a7Q5Tcm1DrdpZ7KEH2-ArooT9qzvFe6cLOYxy4wY-hp6dG-NrJKyv9_n5Hcjs&usqp=CAU"></img>

                                                    </div>

                                                </div>
                                                <div className="col-lg-10" style={{ width: "" }}>
                                                    <div className="">
                                                        <small> Loreum Demom  Loreum ipsumLoreumipm  Loreum ipsum  Loreupsum  Loreum ipsummipsum </small>
                                                        <br></br><b>Gurmeet Singh</b>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                <div className="row ">
                                        <div className="card" style={{ width: "100%", marginRight: "20px" }}>
                                            <div className="row" style={{ padding: "20px", width: "100%" }}>
                                                <div className="col-lg-2">
                                                    <div className="">
                                                        <img className="card-img-top" style={{ borderRadius: "50%", width: "40px", height: "40px" }} src="https://images.collegedunia.com/public/asset/img/homepage/banner/Indian1642232499.webp?mode=stretch"></img>

                                                    </div>

                                                </div>
                                                <div className="col-lg-10" style={{ width: "" }}>
                                                    <div className="">
                                                        <small> Loreum ipsum  Loreum ipsumLoreumipm  Loreum ipsum  Loreupsum  Loreum ipsummipsum </small>
                                                        <br></br><b>Amit Jain</b>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <div style={{ backgroundColor: "grey", borderRadius: "50%", paddingTop: "5px", width: "30px" }}>
                                    <span className="carousel-control-prev-icon" aria-hidden="true" style={{ borderRadius: "50%" }}></span>

                                </div>
                                {/* <span className="sr-only">Previous</span> */}
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next" >
                                <div style={{ backgroundColor: "grey", borderRadius: "50%", paddingTop: "5px", width: "30px" }}><span className="carousel-control-next-icon" aria-hidden="true" style={{ borderRadius: "50%" }}></span>
                                </div>
                                {/* <span className="sr-only">Next</span> */}
                            </a>
                        </div>
                        <br></br>
                        <br></br><br></br><br></br>
                    </div>
                    {/* <h1 className="display-4">Hello, world!</h1> */}
                    

                </div>
                <div className="col-lg-8" style={{ backgroundColor: "white" }}>
                    <div className="container"><br></br>
                        <img className="card-img-top" style={{ marginRight: "20px", borderRadius: "50%", width: "60px", height: "60px", float: "left" }} src="https://img.lovepik.com/element/45010/0441.png_860.png"></img>

                        <h3 style={{ color: "orange" }}>Register Now to Apply</h3>
                        <medium className="" >Get Details and latest updates</medium>
                        <hr className="my-4"></hr>
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        {/* <p className="lead">
                            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                        </p> */}

                        <form onSubmit={handleSubmit}>


                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="input-container">
                                        <i className="prefix-icon fa fa-user"></i>
                                        <input type="text" placeholder="First Name"
                                            value={name}

                                            onChange={(e) => {
                                                setName(e.target.value);
                                                if (e.target.value.length > 10) {
                                                    setNameError('Name should not exceed 10 characters');
                                                } else {
                                                    setNameError('');
                                                }
                                            }}
                                        ></input>

                                    </div>
                                    {nameerror && <div style={{ color: 'red' }}>{nameerror}</div>}


                                </div>

                                <div className="col-lg-6">
                                    <div className="input-container">
                                        <i className="prefix-icon fa fa-envelope"></i>
                                        <input type="text" placeholder="Email Address"
                                            value={email}

                                            onChange={(e) => {
                                                setEmail(e.target.value);

                                                const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

                                                if (!emailPattern.test(e.target.value)) {
                                                    setEmailError('Please enter a valid email address.');
                                                } else {
                                                    setEmailError('');
                                                }


                                            }}
                                        ></input>

                                    </div>
                                    {emailerror && <div style={{ color: 'red' }}>{emailerror}</div>}


                                </div>
                            </div>
                            <br></br>
                            <div className="row">

                                <div className="col-lg-6">
                                    <div className="input-container">
                                        <input value="+91" style={{ width: "35px", marginRight: "10px", borderRight: "1px solid grey", borderLeft: "0px", borderTop: "0px", borderBottom: "0px" }}></input>
                                        <i className="prefix-icon fa fa-phone"></i>
                                        <input type="text" placeholder="Mobile Number"
                                            value={mobileno}

                                            onChange={(e) => {
                                                setMobile(e.target.value);

                                                const mobileNumberPattern = /^\d{10}$/;
                                                if (!mobileNumberPattern.test(e.target.value)) {
                                                    setMobileError('Please enter a valid mobile number.');
                                                } else {
                                                    setMobileError('');
                                                }


                                            }}
                                        ></input>

                                    </div>
                                    {mobileerror && <div style={{ color: 'red' }}>{mobileerror}</div>}


                                </div>




                                <div className="col-lg-6">
                                    <div className="input-container">
                                        <i className="prefix-icon fa fa-map-marker"></i>
                                        <input type="text" placeholder="City you Live In"
                                            value={cityname}

                                            onChange={(e) => {
                                                setCity(e.target.value);
                                                if (e.target.value.length == 0) {
                                                    setCityError('Enter a city name ');
                                                } else {
                                                    setCityError('');
                                                }
                                            }}
                                        ></input>
                                        <i className="prefix-icon fa fa-close" onClick={(e) => {
                                            setCity("");

                                        }}></i>

                                    </div>
                                    {cityerror && <div style={{ color: 'red' }}>{cityerror}</div>}


                                </div>


                            </div>

                            <br></br>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="input-container">
                                        <i className="prefix-icon fa fa-map-marker"></i>
                                        <input type="text" placeholder="Courses Interested in "
                                            value={coursename}

                                            onChange={(e) => {
                                                setCourse(e.target.value);
                                                if (e.target.value.length == 0) {
                                                    setCourseError('Enter a city name ');
                                                } else {
                                                    setCourseError('');
                                                }
                                            }}
                                        ></input>
                                        <i className="prefix-icon fa fa-close" onClick={(e) => {
                                            setCourse("");

                                        }}></i>

                                    </div>
                                    {courseserror && <div style={{ color: 'red' }}>{courseserror}</div>}


                                </div>

                            </div>
                            <br></br>

                            <label>
                                <input
                                    type="checkbox"
                                    checked={isAgreed}
                                    onChange={handleAgreementChange} style={{ marginRight: "20px" }}
                                />
                                <span>By submiting this form , I agree to the<small style={{ fontSize: "16px", color: "blue", }}> <a style={{ textDecorationLine: "underline" }}>terms and conditions</a></small></span>


                            </label>
                            <div>
                                <h6 style={{ float: "left", color: "orange", paddingTop: "20px" }}>Already Registered? Click Here to Login</h6>
                                <input type="submit" style={{ float: "right", backgroundColor: "orange", color: "white", width: "130px", border: "1px solid orange", height: "40px" }} />

                            </div>

                        </form>
                    </div>
                </div>


            </div>

        </div>
    </>
}
export default CollegduniaForm