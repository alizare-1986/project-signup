import React,{useState,useEffect} from 'react';
import { validate } from './validate';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { notify } from './toast';
  import styles from "./SignUp.module.css"
import { Link } from 'react-router-dom';
const SignUp = () => {
    const[data,setData]= useState({
        name:"",
        email:"",
        password:"",
        confirmpassword:"",
        isAccepted: false,
    })
    const[errors,setErrors]=useState({})
    const [touched,setTouched] = useState({})
    
    useEffect(()=>{
   setErrors(validate(data, "signup"))
  
},[data,touched])


    const changeHandler = (event) =>{
        if (event.target.name === "isAccepted"){
            setData({...data, [event.target.name]: event.target.checked})
        } else {
            setData({...data, [event.target.name]: event.target.value })
        }
        
    }
    const focusHandler = event => {
        setTouched({...touched , [event.target.name]: true })
    }
    const submitHandler = (event) =>{
        notify()
        event.preventDefault()
        if(!Object.keys(errors).length){
            notify("you signed in successfully", "success")
        } else{
            notify("validate", "error")
            setTouched({
                name:true,
                email:true,
                password:true,
                confirmpassword:true,
                isAccepted:true
               

            })
        }
    }
  
    return (
        <div className={styles.container}>
           <form onSubmit={submitHandler} className={styles.formcontainer} >
            <h1 className={styles.header} >SignUp</h1>
            <div className={styles.formField}>
            <label>Name</label>
            <input className={(errors.name && touched.name) ? styles.uncompleted : styles.formInput } 
            type="text" name="name" value={data.name} onChange={changeHandler} onFocus={focusHandler}/>
            {errors.name && touched.name && <span>{errors.name}</span>}
            </div>
            <div className={styles.formField}>
            <label>Email</label>
            <input className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput } 
            type="text" name="email" value={data.email} onChange={changeHandler} onFocus={focusHandler}/>
            {errors.email  &&   touched.email  &&  <span>{errors.email}</span>}
            </div>
            <div className={styles.formField}>
            <label>Password</label>
            <input className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput }  
            type="password" name="password" value={data.password} onChange={changeHandler} onFocus={focusHandler}/>
            {errors.password && touched.password && <span>{errors.password}</span>}
            </div>
            <div className={styles.formField}>
            <label>Confirm Password</label>
            <input className={(errors.confirmpassword && touched.confirmpassword) ? styles.uncompleted : styles.formInput }  
            type="password" name="confirmpassword" value={data.confirmpassword} onChange={changeHandler} onFocus={focusHandler}/>
            {errors.confirmpassword && touched.confirmpassword && <span>{errors.confirmpassword}</span>}
            </div>
            <div className={styles.formField}>
                <div className={styles.checkBoxContainer} >
                 <label>I accept terms of privacy policy</label>
                 <input  type="checkbox" name="isAccepted" value={data.isAccepted} onChange={changeHandler} onFocus={focusHandler}/>
                </div>
            {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
            </div>
            <div className={styles.formButton} >
                <Link to="/login" >Login</Link>
                <button type='submit'>SignUp</button>
            </div>
           </form>
           <ToastContainer />
        </div>
    );
};

export default SignUp;