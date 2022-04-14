import React,{useState} from 'react';
import styled from 'styled-components';
import PinterestIcon from '@mui/icons-material/Pinterest';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FaceIcon from '@mui/icons-material/Face';
import TextsmsIcon from '@mui/icons-material/Textsms';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import {useNavigate} from "react-router-dom";
// import About from "./About";
import {Link} from "react-router-dom";


function Header(props) {

  // const navigate=useNavigate();

const [input,setInput]=useState("");

const onSearchSubmit=(e)=>{
  e.preventDefault();
  props.onSubmit(input);
}

  return (
    <Wrapper>
       <LogoWrapper>
           <IconButton>
             <PinterestIcon />
           </IconButton>
       </LogoWrapper>

        <HomePageButton>
          <a href="/">Homepage</a>
       </HomePageButton>
    
        <FollowingButton>
          {/* <a href="/" onClick={
            ()=> navigate("/about")
          }
          >About</a> */}
          {/* <a href="/">About</a> */}

          <Link style={{ "textDecoration": "none" }} to="/About">
          <a href="/">About</a>
</Link>
          
       </FollowingButton>

       <SearchWrapper>
           <SearchBarWrapper>
             <IconButton> 
               <SearchIcon/> 
             </IconButton>

             <form>
               <input type="text" onChange={(e)=> setInput(e.target.value)} />
               <button type="submit" onClick={onSearchSubmit}></button>
             </form>
           </SearchBarWrapper>
       </SearchWrapper>

       <IconsWrapper>
           <IconButton>
             <NotificationsIcon />
           </IconButton>
           <IconButton>
             <TextsmsIcon />
           </IconButton>
           <IconButton>
             <FaceIcon />
           </IconButton>
           <IconButton>
             <KeyboardArrowDownIcon />
           </IconButton>
       </IconsWrapper> 
      

    </Wrapper>

    
  )
}

export default Header

const Wrapper = styled.div`
display:flex;
align-items:center;
height:56px;
padding:12px 4px 4px 16px;
background-color:white;
color:black;

`

const LogoWrapper = styled.div`
.MuiSvgIcon-root{
  color:#e62020;
  font-size:32px;
  cursor:pointer;
}
`
const HomeButtons=styled.div`
display:flex;
height: 48px;
min-width: 123px;
align-items: center;
justify-content:center;
border-radius: 24px;
cursor:pointer;
`
const HomePageButton =styled(HomeButtons)`
${'' /* display:flex;
height: 48px;
min-width: 123px;
align-items: center;
justify-content:center;
border-radius: 24px;
cursor:pointer; */}

background-color: rgb(17,17,17);

a{
  text-decoration:none;
  color:white;
  font-weight:700;

}
`

const FollowingButton=styled(HomeButtons)`
${'' /* display:flex;
height: 48px;
min-width: 123px;
align-items: center;
justify-content:center;
border-radius: 24px;
cursor:pointer; */}

background-color: white;

a{
  text-decoration:none;
  color:black;
  font-weight:700;
}

${'' /* button{
  text-decoration:none;
  color:black;
  font-weight:700;
} */}

:hover{
  background-color:#e1e1e1;
}
`

const SearchWrapper=styled.div`
 flex: 1;
`

const SearchBarWrapper=styled.div`
background-color: #efefef;
display:flex;
height:48px;
width:100%;
border-radius:50px;
border:none;
padding-left:10px;
 
 form{
   display:flex;
   flex:1;
 }

 form>input{
   background-color:transparent;
   border:none;
   width:100%;
   margin-left:5px;
   font-size:16px;
 }

 form>button{
   display:none;
 }

 input:focus{
   outlline:none;
 }
 input:active{
   outline:none;
 }
 input:hover{
   outline:none;
 }
 input:visited{
   outline:none;
 }
 form:focus{
   outline:none;
 }
`;

const IconsWrapper=styled.div``;