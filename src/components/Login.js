import React ,{useState, useEffect} from 'react'
import './Login.css'
import { Button, Input } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import { Modal } from '@material-ui/core';
import {db, auth, storage} from '../firebase'
import { HighQuality } from '@material-ui/icons';
import Profile from './Profile';
import { useStateValue } from './StateProvider';


function getModalStyle() {
    const top = 50 ;
    const left = 50 ;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 500,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Login() {

    const [signUpWindow, setSignUpWindow] = useState(false)
    
    const [modalStyle] = React.useState(getModalStyle);

    const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const [user, setUser] = useState(null)

    const classes = useStyles()

    const [{state}, dispatch] = useStateValue()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if(authUser){
                setUser(authUser)
                dispatch({
                    type: 'UPDATE_USER',
                    item: {
                        user: user
                    }
                })
            } else {
                setUser(null)
                dispatch({
                    type: 'UPDATE_USER',
                    item: {
                        user: null
                    }
                })
            }
        })
        return () => {
            unsubscribe()
        }
    }, [user])
    
    const handleSignIn = (event) => {

        event.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then((authUser) => {
                console.log(`displayName: ${authUser.user.displayName}`);
            })
            .catch(error => {
                console.log("Bhidu sign in phat gaya");
                console.log(error);
            })
            
    }

    
    function handleSignUp(event) {

        event.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                return authUser
                    .user
                    .updateProfile({
                        displayName: username
                    })
            })
            .catch(error =>{
                console.log("Phata hain bidhu")
                console.log(error)
            })
        
            setSignUpWindow(false)

    }
    return (

        <div>
            <Link to="/">
                        <img 
                            className="header__logo"
                            src="http://pngimg.com/uploads/amazon/amazon_PNG21.png"
                            alt=""
                        />
            </Link>
            {
                user 
                    &&
                <div className="signOut"> 
                    <Button 
                        className="postStuff"
                        onClick={() => auth.signOut()}
                        variant="contained" 
                        color="secondary"
                    >
                        ➡ Sign out ⬅
                    </Button>   
                </div>
            }

            {
                !user 
                    &&
                
                <div className="loginContainer">
                    {/* amazon logo */}
                

                    <form className="signIn">
                        <Input className="email" type="text" placeholder="Email"/>
                        <Input className="password" type="password" placeholder="Password"/>
                        <Button className="signInButton" type="submit" variant="outlined" onClick={handleSignIn}>SignIn</Button>
                    </form>

                    <div className="signUp">
                        <span>New to Amazon</span>
                        <Button className="signUpButton" type="submit" variant="outlined" onClick = {() => setSignUpWindow(true)}>SignUp</Button>
                    </div>

                    {
                        signUpWindow 
                            && 
                        <Modal
                            open={signUpWindow}
                            onClose={() => setSignUpWindow(false)}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                        >
                            <div style={modalStyle} className={classes.paper}>
                                <form className="app__signup">
                                    <center className="app__modalContainer">
                                        <img 
                                            className="app__modalImage" 
                                            src="http://pngimg.com/uploads/amazon/amazon_PNG21.png"
                                            alt=""
                                        />
                                    </center>
                                    <Input type="text" placeholder="Username" value={username} onChange={event => setusername(event.target.value)}  />
                                    <Input type="text" placeholder="Email" value={email} onChange={event => setemail(event.target.value)} />
                                    <Input type="password" placeholder="Password" value={password} onChange={event => setpassword(event.target.value)}  />      
                                    <Button type="submit" variant="contained" color="primary" onClick={handleSignUp}>Signup</Button>    
                                </form>
                                
                            </div>
                        </Modal>           
                    }

                </div>
            }

        

        </div>
    )
}

export default Login
