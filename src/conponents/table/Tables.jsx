import React from 'react';
import './table.css';
import {BiPlusMedical} from 'react-icons/bi'
import { month, table } from '../../Data';
// import { useEffect } from 'react';



const Tables = ({handleOpen}) => {
    const datas=JSON.parse(window.localStorage.getItem('expense'))

    
    // const data=Object.values(datas)
    // console.log(data)
    // React.useEffect(()=>{
    //     let item=datas
    //     const expense = array.push(item)
    //     console.log(expense)
    // },[datas])

    return (

        <div className='generaltable'>
            
            <div className='header'>
                    <h2>Transactions</h2>
                    <div className='select'>
                        <select name="Monthy" id="">
                    <option value="date">Select Month</option>
                    {month.map((item, index)=>
                        <option key={index}>{item.name}</option>
                    )} 
                </select>
                <BiPlusMedical className='selectbi' onClick={handleOpen}/>
                </div>
            </div>
            <div className='headBody'>
                <div className='tablehead'>
                    <h4 className='date'>Date</h4>
                    <h4 className='description'>Description</h4>
                    <h4 className='category'>Category</h4>
                    <h4 className='amount'>Amount</h4>
                </div>
                <div className='tablebody'>
                    <p className='date'>{datas.date}</p>
                    <p className='description'>{datas.desc}</p>
                    <p className='category'>{datas.cate}</p>
                    <p className='amount'>{datas.amount}</p>
                </div>
                {table.map((item, index)=>(
                    <div className='tablebody' key={index}>
                    <p className='date'>{item.date}</p>
                    <p className='description'>{item.desc}</p>
                    <p className='category'>{item.cate}</p>
                    <p className='amount'>{item.amount}</p>
                </div>))}
                

            </div>
            
        </div>
        
    )
}

export default Tables 
