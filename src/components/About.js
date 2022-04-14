import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'; 

const About=()=> {
  return (
  
    <SuperWrapper>
   <Wrapper>
   <Homepage>
   <Link style={{ "textDecoration": "none" }} to="/">
          <a href="/">Home</a>
</Link>
   </Homepage>
     <Profile> 
       <br></br>
       <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEvBVTtMdDS9g/profile-displayphoto-shrink_800_800/0/1648822901993?e=1655337600&v=beta&t=3BXd1blqwad2PuRR6QCD6XAGJE7RWfCblrASkqaTs8A" height="300px" width="300px" alt="Profile"></img>
     </Profile>
   </Wrapper>

   <Info>
      <h2>Hello! Myself Neha Yadav</h2>
      <br/>
      <p>My Hobby is photography </p>
      <br/>
      
      {/* <a href="https://www.linkedin.com/in/neha-yadav-869a381a6/">LinkedIn proflie</a> */}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
   </Info>
   </SuperWrapper>
   
  )
}

export default About;

const Homepage =styled.div`
display:flex;
height: 48px;
width:50px;
min-width: 123px;
align-items: center;
justify-content:center;
border-radius: 24px;
cursor:pointer;

background-color: #2b452a;

a{
  text-decoration:none;
  background:transparent;
  color:white;
  font-weight:700;
  border:none;

}
`
const SuperWrapper=styled.div
` 
margin:auto;
background-color:#2b452a;

`

const Wrapper=styled.div
` 
margin:auto;
padding:20px;
background-color:#cfdb79;

`

const Profile=styled.div
`
text-align:center;
justify-content:center;
padding:20px; 
h1{
  font-family: "Lucida Handwriting";
  font-weight:30px;
  color:#2b452a;
}

img{
  border-radius:150px;
}

`

const Info=styled.div`

justify-content:center;
font-weight:1rem;
${'' /* background-color:#2b452a; */}
text-align:center;
padding:30px;
  h2{
  font-family: "Lucida Handwriting";
  font-weight:20px;
  color:white;
}
p{
  font-family: "Lucida Handwriting";
  font-weight:20px;
  color:white;
}
a{
  color:white;
}

`