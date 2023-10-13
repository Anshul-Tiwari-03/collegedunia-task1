// import backgroundimg from '../../backgroundimg.jpg';
// import logo from '../../logo.svg';

import 'font-awesome/css/font-awesome.min.css';
function Navbar() {
  return (
    <div>
   

  <div className="" style={{position: "relative",height: "500px",overflow: "hidden"}}>
<img className="image" style={{ width: "100%",height:" auto",display: "block",filter:" brightness(0.5)"}} src="https://images.collegedunia.com/public/asset/img/homepage/banner/Indian1642232499.webp?mode=stretch" alt="Image Description"></img>

<div className="text-overlay" style={{position: "absolute",top: "0%",left: "0%",transform: "translate(0%, 0%)",color: "white",zIndex: "1"}}>
<div style={{height:"500px",}}>
      <nav className="" style={{padding:"0px"}}>
        <div className="row">
          <div className="col-lg-3 navbar navbar-expand-lg navbar-light ">
          <h3 style={{color:"white",paddingLeft:"10px",marginRight:"20px",fontSize:"22px"}}>CollegeDunia</h3>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ">
          {/* <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li> */}
          {/* <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li> */}
          <li className="nav-item dropdown" style={{color:"white"}}>
            
            <a className="nav-link dropdown-toggle" style={{color:"orange"}} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Select Goel & City
              <br></br>
              <span style={{color:"white"}}>Select Goal</span>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
          </li> */}
        </ul>
        </div>
          </div>
          <div className="col-lg-4  navbar-expand-lg navbar-light ">
            <form className="form-inline ml-2" style={{width:"1000px",marginLeft:"30px",marginTop:"24px"}}>
              <input className="form-control " type="search" placeholder="Search for any College, Exams , Courses and More " aria-label="Search" style={{width:"50%",marginLeft:"40px"}}></input>
              {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
            </form>
          </div>
          
          <div className="col-lg-4 navbar-expand-lg navbar-light" style={{marginLeft:"100px",marginTop:"15px"}}>
            
            <span style={{color:"red",width:"50px",float:"left"}}>            
            <span style={{color:"white",marginLeft:"20px",width:"20px",float:"left"}}>
            <i className="fa-solid fa fa-pencil" style={{fontSize:"18px",marginTop:"1px"}}></i>
              </span>

</span>
            
            <div  style={{color:"orange",float:"left",}}>
              Write a Review
              <br></br>
              <span className="badge badge-warning">Get up Rs.500*</span>
            </div>
            <span style={{color:"white",marginLeft:"20px",width:"20px",float:"left"}}>
            <i className=" fa fa-search" style={{fontSize:"18px",marginTop:"1px"}}></i>
            </span>
            
            <span style={{color:"white",float:"left",width:"70px",marginRight:"20px"}}>Explore</span>
            
            <span  className="mr-auto" style={{color:"white",marginLeft:"0px",float:"left"}}>
            <div style={{height:"30px",position:"absolute"}}>
            <i className=" fa fa-bell" style={{fontSize:"18px",marginTop:"1px"}}></i>
            <small style={{color:"white",fontWeight:"bold"}} >12</small>
            </div>
            </span>
            
            
            

            <img src="https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg" alt="User Avatar" className="avatar" style={{width: "30px",height: "30px", borderRadius: "50%",objectFit: "cover",float:"right"}}></img>
            <a href=''><i className=" fa fa-bars" style={{fontSize:"18px",marginTop:"1px",float:"right",margin:"5px 10px",color:"white"}}></i></a>
          </div>
        </div>
        
      </nav>
      <div className= "" style={{color:"white",display:"flex",padding:"15px"}}>
      <span className="badge" style={{marginRight:"10px",fontWeight:"500"}}> All Schools </span>
      <span className="badge" style={{marginRight:"10px",fontWeight:"400"}}> B.Tech</span>
      <span className="badge" style={{marginRight:"10px",fontWeight:"400"}}> MBA</span>
      <span className="badge" style={{marginRight:"10px",fontWeight:"400"}}> M.Tech</span>
      
      </div>      <div  className="justify-content-center" style={{height:"100px",width:"100%"}}>
        <h2 className="scrolling-text" style={{color:"white"}}>Welcome Onboad</h2>
        <div className="typewriter">
         
          <p className='typing-erase'>This is a simple running text. This text will continuously type and erase.</p>
        </div>
        <br></br>
        <form >
        <input className=" " type="search" placeholder="Search for any College, Exams , Courses and More " aria-label="Search" style={{width:"50%",height:"50px",paddingLeft:"20px",borderRadius:"2px",border:"1px solid white",marginRight:"0px",marginLeft:"40px"}}></input>
        <button type="submit" style={{margin:"0px",width:"100px",height:"50px",backgroundColor:"orange",color:"white",border:"1px solid orange",borderRadius:"2px"}}>Search</button>
        </form>
        <br></br>
        <br></br>
        <a href=""><button  data-toggle="modal" data-target="#exampleModalLong" style={{width:"150px",height:"35px",backgroundColor:"orange",color:"white",border:"1px solid orange",borderRadius:"5px",marginLeft:"50%"}}>
            
            Need Consulting

          </button></a>
      </div>
  </div>

</div>
</div>


  </div>
  );
}

export default Navbar;