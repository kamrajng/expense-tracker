import React from 'react';
import './profilecard.css';
import Card from '../card/Card';
import {MdCameraEnhance} from 'react-icons/md';


const ProfileCards =({name, phone, email, image}) =>{

    return(
        <div className='genraldiv'>
            <div className='profilediv'>
                <div className='profiledivcamera'>
                   <img src={image} alt="user" />
                   <label htmlFor="file"><MdCameraEnhance name='file' className='profilemd'/> </label>
                   <input type="file" id='file' style={{
                       display:'none',
                   }} />
                </div>
                
                <div className='profiletext'>
                    <h3>{name}</h3>
                    <marquee behavior="" direction="vertical">
                        <p>Job Description</p>
                        <h5>Job Title</h5>
                    </marquee>
                    <h5>Phone: {phone}</h5>
                    <h6>Email: {email}</h6>
                </div>
               
            </div>
            <div className='amountdiv'>
                    <Card amount='253' title='Positive'  count='1' containerStyle={{borderRadius:'15px 0px 0px 15px', border:'1px solid orange'}}/>
                    <Card amount='10' title='Negetive' subTitle='' count='10' containerStyle={{border:'1px solid orange' }}/>
                    <Card amount='205,555' title='Balance' containerStyle={{borderRadius:' 0px 15px 15px 0px', border:'1px solid orange' }}/>
            </div>
        
        </div>
    )
}

export default ProfileCards;