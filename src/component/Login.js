import React,{useState,useEffect} from 'react';
import { validate } from './validate';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { notify } from './toast';
  import styles from "./SignUp.module.css"
import { Link } from 'react-router-dom';

const Login = () => {
    const[data,setData]= useState({
      
        email:"",
        password:"",
        
    })
    const[errors,setErrors]=useState({})
    const [touched,setTouched] = useState({})
    
    useEffect(()=>{
   setErrors(validate(data,'login'))
   
},[data,touched])


    const changeHandler = (event) =>{
        
           
        
            setData({...data, [event.target.name]: event.target.value })
        
        
    }
    const focusHandler = event => {
        setTouched({...touched , [event.target.name]: true })
    }
    const submitHandler = (event) =>{
        notify()
        event.preventDefault()
        if(!Object.keys(errors).length){
            notify("you loged in successfully", "success")
        } else{
            notify("validate", "error")
            setTouched({
                
                email:true,
                password:true,
                

            })
        }
    }
  
    return (
        <div className={styles.container}>
           <form onSubmit={submitHandler} className={styles.formcontainer} >
            <h1 className={styles.header} >Login</h1>
            
            <div className={styles.formField}>
            <label>Email</label>
            <input className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput } type="text" name="email" value={data.email} onChange={changeHandler} onFocus={focusHandler}/>
            {errors.email  &&   touched.email  &&  <span>{errors.email}</span>}
            </div>
            <div className={styles.formField}>
            <label>Password</label>
            <input className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput }  type="password" name="password" value={data.password} onChange={changeHandler} onFocus={focusHandler}/>
            {errors.password && touched.password && <span>{errors.password}</span>}
            </div>
            
            
          
            <div className={styles.formButton} >
                <Link to="/signup" >SignUp</Link>
                <button type='submit'>Login</button>
            </div>
           </form>
           <ToastContainer />
        </div>
    );
};

export default Login;