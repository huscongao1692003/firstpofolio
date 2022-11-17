import { useNavigate } from "react-router-dom";
import "./login.css"
import { useState, useRef } from 'react';
import { useAuth } from "./context/Context"
import { Avatar, Grid, Tooltip, Button } from "@nextui-org/react";
import Github1 from './asset/github1.svg';
import Facebook1 from './asset/facebook.png'
import Google1 from './asset/google.png'
import { db, auth } from "./firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { ref, getDownloadURL, getStorage, uploadBytesResumable } from "firebase/storage";
import {
    serverTimestamp,
    doc,
    setDoc,
} from "firebase/firestore";



const Login = () => {
    const lEmailRef = useRef()
    const lPasswordRef = useRef()
    const { login } = useAuth()
    const [errorS, setErrorS] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const storage = getStorage();
    const [file, setFile] = useState("");
    const [data, setData] = useState({});
    const [per, setPerc] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const emailRef = e.target[1].value
        const passwordRef = e.target[2].value
        try {
            const res = await createUserWithEmailAndPassword(
                auth,
                emailRef,
                passwordRef
            );
            await setDoc(doc(db, "users", res.user.uid), {
                displayName,
                ...data,
                timeStamp: serverTimestamp(),
            });

            const uploadFile = () => {
                const name = new Date().getTime() + file.name;
                console.log(name);
                const storageRef = ref(storage, file.name);
                const uploadTask = uploadBytesResumable(storageRef, file);

                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        const progress =
                            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log("Upload is " + progress + "% done");
                        setPerc(progress);
                        switch (snapshot.state) {
                            case "paused":
                                console.log("Upload is paused");
                                break;
                            case "running":
                                console.log("Upload is running");
                                break;
                            default:
                                break;
                        }
                    },
                    (error) => {
                        console.log(error);
                    },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                            // setData((prev) => ({ ...prev, img: downloadURL }));

                            try {
                                //Update profile
                                await updateProfile(res.user, {
                                    displayName,
                                    photoURL: downloadURL,
                                });
                                //create user on firestore
                                await setDoc(doc(db, "users", res.user.uid), {
                                    uid: res.user.uid,
                                    displayName,
                                    emailRef,
                                    photoURL: downloadURL,
                                });

                                //create empty user chats on firestore
                                await setDoc(doc(db, "userChats", res.user.uid), {});
                                navigate("/dashboard");
                            } catch (err) {
                                console.log(err);

                                setLoading(false);
                            }
                        });
                    }
                );
            };
            file && uploadFile();

            console.log(data);
            //   navigate(-1)
        } catch (err) {
            console.log(err);
        }
    };

    async function handleSubmitLogin(e) {
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            await login(lEmailRef.current.value, lPasswordRef.current.value)
            navigate("/dashboard")
        } catch {
            setError('Fail to login')
        }
        setLoading(false)
    }
    const [rightPanel, setRightPanel] = useState(false);
    const handlerClick = event => {
        setRightPanel(current => !current)
    }
    return (
        <>
            <div className="body-login" >
                <div class={rightPanel ? "right-panel-active containerSos" : "containerSos"}>
                    <Tooltip content={errorS} color="error">
                        <Button auto flat color="invert">
                            This is Log
                        </Button>
                    </Tooltip>
                    <div class="form-container sign-up-container">
                        <form action="#" onSubmit={handleSubmit}>
                            <h1>Create Account</h1>
                            <div class="social-container">
                                <Grid.Container gap={2}>
                                    <Grid>
                                        <a href="#" class="social"><a href="https://github.com/raidenshogun1692003" target="_blank" rel="noreferrer">
                                            <Avatar
                                                animated
                                                size="xl"
                                                pointer
                                                zoomed
                                                src={Facebook1}
                                            />
                                        </a></a>
                                    </Grid>
                                    <Grid>
                                        <a href="#" class="social"><a href="https://github.com/raidenshogun1692003" target="_blank" rel="noreferrer">
                                            <Avatar
                                                animated
                                                size="xl"
                                                pointer
                                                zoomed
                                                src={Google1}

                                            />
                                        </a></a>
                                    </Grid>
                                    <Grid>
                                        <a href="#" class="social"><a href="https://github.com/raidenshogun1692003" target="_blank" rel="noreferrer">
                                            <Avatar
                                                animated
                                                size="xl"
                                                pointer
                                                zoomed
                                                src={Github1}

                                            />
                                        </a></a>
                                    </Grid>
                                </Grid.Container>
                            </div>
                            <span className="spanof">or use your email for registration</span>
                            <input required type="text" placeholder="Name" />
                            <input required type="email" placeholder="Email" />
                            <input required type="password" placeholder="Password" />
                            <input required type="file" id="file" onChange={(e) => setFile(e.target.files[0])} className="inputImage" />
                            <button disabled={loading}>Sign Up</button>
                        </form>
                    </div>
                    <div class="form-container sign-in-container">
                        <Tooltip content={error} color="error">
                            <Button auto flat>
                                This is Log
                            </Button>
                        </Tooltip>
                        <form action="#" onSubmit={handleSubmitLogin}>
                            <h1>Login</h1>
                            <div class="social-container">
                                <Grid.Container gap={2}>
                                    <Grid>
                                        <a href="#" class="social"><a href="https://github.com/raidenshogun1692003" target="_blank" rel="noreferrer">
                                            <Avatar
                                                animated
                                                size="xl"
                                                pointer
                                                zoomed
                                                src={Facebook1}
                                            />
                                        </a></a>
                                    </Grid>
                                    <Grid>
                                        <a href="#" class="social"><a href="https://github.com/raidenshogun1692003" target="_blank" rel="noreferrer">
                                            <Avatar
                                                animated
                                                size="xl"
                                                pointer
                                                zoomed
                                                src={Google1}

                                            />
                                        </a></a>
                                    </Grid>
                                    <Grid>
                                        <a href="#" class="social"><a href="https://github.com/raidenshogun1692003" target="_blank" rel="noreferrer">
                                            <Avatar
                                                animated
                                                size="xl"
                                                pointer
                                                zoomed
                                                src={Github1}

                                            />
                                        </a></a>
                                    </Grid>
                                </Grid.Container>
                            </div>
                            <span className="spanof">or use your account</span>
                            <input type="email" ref={lEmailRef} placeholder="Email" />
                            <input type="password" ref={lPasswordRef} placeholder="Password" />
                            <a href="#">Forgot your password?</a>
                            <button disabled={per !== null && per < 100}>Login</button>
                        </form>
                    </div>
                    <div class="overlay-container">
                        <div class="overlay">
                            <div class="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button class="ghost" id="signIn" onClick={handlerClick}>Sign In</button>
                            </div>
                            <div class="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button class="ghost" id="signUp" onClick={handlerClick}>Sign Up</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Login