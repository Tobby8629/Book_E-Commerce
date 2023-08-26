import React, { useState } from 'react'
import styles from '@/styles/nav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faBars, faTimes, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Search from './search/search';
import Searchpage from './search/searchpage';
import {useRouter} from 'next/router'
import { useDispatch } from 'react-redux';
import { useSession } from 'next-auth/react'
import {signIn, signOut} from 'next-auth/react'

interface SidebarProps {
  side: boolean;
  changeicon: () => void;
}

function Sidebar({ side,changeicon }: SidebarProps) {
  const book = [
    {
      id: 1,
      title: "tears of the sun",
      author: "chinua achebe",
      image: 'book1.png'
    },
    {
      id: 2,
      title: "tears of the sun",
      author: "popoola samuel",
      image: 'book2.png'
    },
    {
      id: 3,
      title: "tears of the sun",
      author: "chinua achebe",
      image: 'book3.png'
    },
    {
      id: 4,
      title: "tears of the sun",
      author: "chinua achebe",
      image: 'book4.png'
    },
    {
      id: 5,
      title: "tears of the sun",
      author: "chinua achebe",
      image: 'book1.png'
    },
    {
      id:6,
      title: "tears of the sun",
      author: "chinua achebe",
      image: 'book1.png'
    },
    {
      id: 7,
      title: "tears of the sun",
      author: "chinua achebe",
      image: 'book2.png'
    },
    {
      id: 8,
      title: "tears of the sun",
      author: "chinua achebe",
      image: 'book3.png'
    }
    
  ]

  // const route = useRouter()
  // const dispatch = useDispatch()

  // const signIn = () => {
  //  route.push('/login')
  // }

  // const signOut = () => {
  //   dispatch(logout)
  // }

  const {data: session} = useSession()

  const [open, setopen] = useState(false)
  const [off, setoff] = useState(true)
  const [text, settext] = useState('')
  const free = (event: string) => {
    event === "" ? setoff(true) : setoff(false)
    event === "" ? setopen(false) : setopen(true)
    settext(event)
  } 
  const reel = book.filter((b)=> b.author.includes(text.toLocaleLowerCase()) || b.title.includes(text.toLocaleLowerCase()))
  return (
    <>
      <div className='desktop'>
        <Search free = {free} off = {off} />
        {open ? <Searchpage reel={reel} /> : null}
      </div>
      <div className='mobile drag' onClick={changeicon}>
          <FontAwesomeIcon icon={side ? faBars : faTimes} />
      </div>
      <nav id ='nav' className={side ? styles.sideoff : styles.sideon}>
      <div className={styles.wrapper}>
      <div className={styles.all}>
        <div className={styles.logo} onClick={()=>signOut()}>
          {/* <a href='/'> */}
            <img src='/logo.png' alt='logo' />
          {/* </a> */}
        </div>
        <div className={styles.menu}>
          <div>
            <a href='/'>
              <img src='/home.png' alt='home' />
            </a>
          </div>
          <div>
            <a href='/books'>
              <img src='/books.png' alt='books' />
            </a>
          </div>
          <div>
            <a href='/schedule'>
              <img src='/schedule.png' alt='schedule' />
            </a>
          </div>
          <div className={styles.book}>
              <a href='/scheduled'>
                <img src='/vector.png' alt='Vector' />
              </a>
          </div>
          <div>
            <a href='/profile'>
            <img src='/settings.png' alt='settings' />
            </a>
          </div>
        </div>
      </div>
      <div>
        {session ? 
        <div className={styles.logout} onClick={()=>signOut()}>
          <FontAwesomeIcon icon={faRightFromBracket} />
        </div> :
        <div className={styles.logout} onClick={()=>signIn()}>
          <FontAwesomeIcon icon={faRightToBracket} />
        </div>}
      </div>
      </div>
      </nav>
    </>
    
  )
}

Sidebar.propTypes = {
  side: PropTypes.bool.isRequired,
  changeicon: PropTypes.func.isRequired
};

export default Sidebar
