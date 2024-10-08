
import React, { useRef, useState, useEffect, Fragment, useContext } from "react";
import classes from "./Login.module.css";
import { authenticate, updateUserActive,getUserId } from "../../services/api";
import { Link,useNavigate  } from "react-router-dom";
import AuthContext from "../context/AuthProvider";



function Login() {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const [id, setId] = useState();

    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate



    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg("");
    }, [user, pwd]);

    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => {
                navigate('/shop'); // Redirect to /shop after 5 seconds
            }, 2000); // Wait for 2 seconds

            return () => clearTimeout(timer); // Cleanup timer on component unmount
        }
    }, [success, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userBody = {
                username: user,
                password: pwd,
            };
            const response = await authenticate(userBody);

            const userSecondBody = {
                username: user,
                active: 1
            };

            updateUserActive(userSecondBody);
            const userId = await (await getUserId(user)).data;
            setId(userId);
            setSuccess(true);
            setAuth(response.data.jwt)
            setUser(user);
            setPwd("");


        } catch (err) {
            if (!err.response) {
                setErrMsg("No Server Response");
            } else if (err.response.status === 403) {
                setErrMsg("Incorrect Username Or Password");
            } else {
                setErrMsg("Authentication Failed");
            }
            errRef.current.focus();
        }

    };

    return (
        <Fragment>
            <div className={classes.all}><br></br><br></br><br></br>
                {success ? (
                    <section  className={classes.loggedInMessage}>
                        <h1>You are logged in!</h1>
                        <br />
                        {sessionStorage.setItem('id', JSON.stringify(id))}
                        {sessionStorage.setItem('username', JSON.stringify(user))}
                        {sessionStorage.setItem('isActive', JSON.stringify(true))}
                    </section>
                )
                    : (
                        <section>
                            <p ref={errRef} className={errMsg ? classes.error_mes : "offscreen"}>
                                {errMsg}
                            </p>
                            <h1>Sign In</h1>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="userName">Username:</label>
                                <input
                                    className={classes.inputs}
                                    type="text"
                                    id="username"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setUser(e.target.value)}
                                    value={user}
                                    required
                                />
                                <label htmlFor="password">Password:</label>
                                <input
                                    className={classes.inputs}
                                    type="password"
                                    id="password"
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={pwd}
                                    required
                                />
                                <button  className={classes.btnsignup} type="submit" disabled={!user || !pwd} >
                                    Sign In
                                </button>
                            </form>
                            <p >
                                <div class="account"  className={classes.account}>
                                    {/* Need an Account? */}
                                    Don't have an account?
                                </div>
                                {/* <br /> */}
                                <span className="line">
                                    <Link to="/signUp">Sign Up</Link>
                                </span>
                            </p>
                        </section>
                    )}
            </div>
        </Fragment>
    );
}

export default Login;




