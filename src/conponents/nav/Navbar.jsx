import React from 'react';
import './nav.css';
import {GiCash} from 'react-icons/gi';
import {BiSearchAlt2 } from 'react-icons/bi';
import {FaCalculator} from 'react-icons/fa';
// import Cal from '../calculator/Cal';
// import Modal from 'react-modal';
import { Link } from 'react-router-dom';





const Navbar = ({handleOpen,}) =>{
    //  isOpen, customStyle, handleClose
    //const [data, setData]=React.useState({table})
    // const input =React.useRef('')
    // const SearchBar = () => ('')
    // const { search } = window.location;
    // const query = new URLSearchParams(search).get('s');

    // // const handleDisplay =() =>{
    // //     input.current.color='red'

    // const filterPosts = (posts, query) => {
    // if (!query) {
    //     return posts;
    // }

    // return posts.filter((post) => {
    //     const postName = post.name.toLowerCase();
    //     return postName.includes(query);
    // });
//};

   
    return (
        <div className='navbar'> 
            <GiCash className='navgi' />
            <h2>Expenses Tracker</h2>
            {/* <Modal ariaHideApp={false} isOpen={isOpen}  style={customStyle}>
                <Cal handleClose={handleClose}/>
                </Modal> */}

            <Link to='/Cal'><FaCalculator className='selectfa' onClick={handleOpen}/></Link>
           <div className='search'>
           
    <form action="/" method="get">
         <input
            type="text"
            id="header-search"
            placeholder="Searchs"
            name="s" />
        <button type="submit"><BiSearchAlt2 /></button>
    </form>
        </div> 
        </div>
    )
}

export default Navbar 