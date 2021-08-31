import React from 'react';
import './modal.css';
// import {BiClose, BiCloset, BiWindowClose} from 'react-icons/bi';


const Add =({handleClose, }) =>{
    const [formData, setFormData]=React.useState({
        date:Date.now() ||'',
        desc:'',
        cate:'',
        amount:''
    })
    const handleChange=(e)=>{
        const {name, value}=e.target
            setFormData({
            ...formData,
            [name]:value
        })
        // console.log (name, value)
    }
    const handleSave = () => {
        const detail=formData
        window.localStorage.setItem('expense',JSON.stringify(detail) )
        console.table(detail)
        setFormData({
            ...formData, 
            date:'',
            desc:'',
            cate:'',
            amount:'',
           })
    }
    return (
        <div className='modaladd'>
            <button onClick={handleClose}>x</button>
            <h3>Add new record</h3>
             <div className='modaladddiv'>
                 <label htmlFor="date">Date:</label>
                 <input type="date" name='date' value={formData.date} onChange={handleChange}/>
             </div>
             <div className='modaladddiv'>
                 <label htmlFor="test">Description:</label>
                 <input type="text" name='desc' value={formData.desc} onChange={handleChange} />
             </div>
             <div className='modaladddiv'>
                 <label htmlFor="text">Category:</label>
                 <input type="text" name='cate' value={formData.cate} onChange={handleChange}/>
             </div>
             <div className='modaladddiv'>
                 <label htmlFor="number">Amount</label>
                 <input type="number" name='amount' value={formData.amount} onChange={handleChange}/>
             </div>
            <div className='modaladdbtn'>
                <button onClick={handleSave}>Add </button>
                <button onClick={handleClose}>Cancel</button>
            </div>
        </div>

    )
}

export default Add