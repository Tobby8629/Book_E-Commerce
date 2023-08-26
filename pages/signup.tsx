import { RootState } from "@/redux/store";
import { createUser } from "@/redux/user/UserSlice";
import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from '@/styles/profile.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
    const dispatch = useDispatch<any>();
    const status = useSelector((state: RootState)=> state.users.status)
    const error = useSelector((state: RootState)=> state.users.error)
    const[user, setuser] = useState({firstname: '', username: '',
     lastname: '', email: '', password: '', description: ''})
     useEffect(() => {
      if (status === true) {
          setuser({
              firstname: "",
              lastname: "",
              username: "",
              description: "",
              password: "",
              email: ""
          });
      }
  }, [status]);
     const submituser = async (event: FormEvent) => {
        event.preventDefault()
        const propertiesToCheck = [user.email, user.description, user.firstname, user.lastname,user.password,user.username];
        if (propertiesToCheck.some(property => property === '')) {
          console.log("fill all empty input")
          return
        }
        else {
          await dispatch(createUser(user))
        }
     }
     console.log(error, status)
    return (  
     <div className={styles.wrapper}>
        <FontAwesomeIcon icon={faUser} style={{fontSize:"8rem", color: "grey", justifyContent: "center"}} />
        <form onSubmit={(event)=>submituser(event)} className={styles.form}>
          <input required type="text" placeholder="enter your first name" value={user.firstname} onChange={(e) => setuser({...user, firstname: e.target.value })} />
          <input required type="text" placeholder="enter your last name"  value={user.lastname} onChange={(e) => setuser({...user, lastname: e.target.value })}/>
          <input required type="text" placeholder="choose a username" value={user.username} onChange={(e) => setuser({...user, username: e.target.value })}/>
          <input required type="email" placeholder="enter your email" value={user.email}  onChange={(e) => setuser({...user, email: e.target.value })}/>
          <input required type='password' placeholder="password" value={user.password}  onChange={(e) => setuser({...user, password: e.target.value })}/>
          <textarea required placeholder="Share a little description about yourself" value={user.description}  onChange={(e)=> setuser({...user, description: e.target.value})}/>
          <button type='submit'>sign up</button>
        </form>
        {status ? null : 
        <ul>
          {error.map((e: string)=> (
            <li key={e}>{e}</li>
          ))}
        </ul>}
     </div>
    );
}
 
export default Profile;