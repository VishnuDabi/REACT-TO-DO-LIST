import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
const App = () => {
    let [name, setName] = useState('');
    let [names, setNames] = useState([]);
    let [targetIndex, setTargteIndex] = useState();
    let [btnName, setBtnName] = useState(false);
    const Add = (event) => {
        event.preventDefault();
        console.log(name);
        if (name === '') {
            alert('Please Provide Name');
        } else {
            if (!btnName) {
                setNames([...names, name]);
                setName('');
                // alert("if")
            } else {
                names[targetIndex] = name;
                setNames([...names]);
                // alert('else');
                setBtnName(false);
                setName('');
            }
        }
    }
    const Edit = (value, index) => {
        // console.log('value', value, 'index', index);
        let d = names;
        d.forEach((v, i) => {
            console.log(v === value && index === i);
            if (v === value && index === i) {
                setTargteIndex(i);
                setBtnName(true);
                setName(v);
            }
        })
    }
    const Delete = (item, index) => {
        let data = names;
        data = data.filter((t) => {
            return item !== t;
        })
        console.log(data);
        setNames(data);
    }
    return (
        <>
                <h1 className='text-center text-primary'>TO-DO-LIST</h1>
                <br/>
                <form onSubmit={Add} className='form-control input-group' >
                    <input className='form-control' type="text" value={name} onChange={(e) => { setName(e.target.value) }} autoFocus />
                    {(btnName) ? <button type="submit" className='btn btn-info btn-hover' >Update</button> : <button type="submit" className='btn btn-info btn-hover' >Add</button>}
                </form>
                
            {names.map((item, index) => {
                
                return (
                    <div key={index}>
                        <table className='table-primary table-bordered .table-hover w-75 text-center'>
                            <tbody>
                            <tr className='row'>
                                <td className='col-1'>{index}.</td>
                                <td className='col-5'>{item}</td>
                                <td className='col-3'><button className='btn btn-warning btn-hover' onClick={() => { Edit(item, index) }}>Edit</button></td>
                                <td className='col-3'><button className='btn btn-danger btn-hover' onClick={() => { Delete(item, index) }}>Delete</button></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                )
            })}
            {/* <h1>ArrayOperation</h1> */}
        </>
    )
}
export default App