import React from 'react';
import { Add, ProfileCards, Tables,  } from '../conponents';
import profileImg from '../assets/image/download.jpg';
import Modal from 'react-modal';
// import Cal from '../conponents/calculator/Cal';



const customStyle ={
    content:{
        // height:350,
        // width:350,
        // position:'absolute',
        top:'-15%',
        left:'50%',
        right:'auto',
        bottom:'auto',
        marginRight:'50%',
        transform:'translate(-50%,50%)',
        backgroundColor: 'gray',
        },


}



const Dashboard = () =>{
    const [isOpen, setIsOpen]=React.useState(false)

    // const data=localStorage.getItem('expense')
    // console.log(data)

    const handleOpen=() =>{
        setIsOpen(!isOpen)

    }
    const handleClose=() =>{
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <ProfileCards name='Kamraj Ayobami' phone='+234121131321' email='user@me.you' image={profileImg}/>
            <Tables handleOpen={handleOpen}/>
            <Modal ariaHideApp={false} isOpen={isOpen}  style={customStyle}>
                <Add handleClose={handleClose}/>
            </Modal>


        </div>
    )
}

export default Dashboard