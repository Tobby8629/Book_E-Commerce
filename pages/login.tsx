import { RootState } from "@/redux/store";
import { faPerson, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from '@/styles/profile.module.css'
import { signIn } from 'next-auth/react'
import { LogUser } from "@/redux/user/UserSlice";

const Registration = () => {
  const dispatch = useDispatch<any>();
  const status = useSelector((state: RootState)=> state.users.status)
  const error = useSelector((state: RootState)=> state.users.error)
  const[user, setuser] = useState({ email: '', password: ''})
   useEffect(() => {
    if (status === true) {
        setuser({
            password: "",
            email: ""
        });
    }
}, [status]);
   const submituser = async (event: FormEvent) => {
      event.preventDefault()
      const propertiesToCheck = [user.email,user.password];
      if (propertiesToCheck.some(property => property === '')) {
        return
      }
      else {
        signIn("credentials", 
        {email: user.email,
         password: user.password,
         redirect: true,
         callbackUrl: "/"
        }
        )
      }
   }

    return ( 
    <section className={styles.wrapper}> 
			<FontAwesomeIcon icon={faUser} style={{fontSize:"8rem", color: "grey"}} />
			<form onSubmit={(event)=>submituser(event)} className={styles.form}>
          <input required type="email" placeholder="enter your email" value={user.email}  onChange={(e) => setuser({...user, email: e.target.value })}/>
          <input required type='text' placeholder="password" value={user.password}  onChange={(e) => setuser({...user, password: e.target.value })}/>
          <button type='submit'>sign up</button>
        </form>
        {status ? null : 
        <ul>
          {error.map((e: string)=> (
            <li key={e}>{e}</li>
          ))}
        </ul>}
    </section>
  );
}
 
export default Registration;