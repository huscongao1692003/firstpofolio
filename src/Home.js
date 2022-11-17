import { Avatar } from "@nextui-org/react";
import "./App.css"
import Spline from "@splinetool/react-spline";
import Header from "./Header.js";
import AvatarMe from "./AvatarMe.js";
import Aboutme from "./Aboutme.js";
import Infome from "./Infome.js";
import { Spacer } from '@nextui-org/react';
import Fbimage from './asset/facebook.png';
import Email from './asset/email.png';
import Github1 from './asset/github1.svg';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, MoveOut, } from "react-scroll-motion";
import React, { Suspense } from 'react';
import Wavevy from "./Wavevy.js";


const ParalaxLazy = React.lazy(() => import("./Paralax"))
const SkillLazy = React.lazy(() => import("./Skill"))

const Home = () => {
    return (

        <>
            <ScrollContainer>
                <ScrollPage>
                    <Animator animation={Fade()}>
                        <div className="spline">
                            <Spline scene="https://prod.spline.design/qRgZrEmQikeggD8a/scene.splinecode" />
                        </div>
                        <div className="head">
                            <Header />
                        </div>

                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={batch(FadeIn(), MoveOut())}>

                        <div >
                            <h1 className="aboutme"> {<Aboutme />}</h1>
                        </div>
                        <div className="profile">
                            <AvatarMe />
                            <div>
                                <h1 className="profile_my_name">Thanh Nguyen</h1>
                                <Infome />
                                <div className="wrapper">
                                    <div className="facebook">
                                        <a href="https://www.facebook.com/isekai2003" target="_blank" rel="noreferrer">
                                            <Avatar
                                                animated
                                                size="xl"
                                                pointer
                                                zoomed
                                                src={Fbimage}
                                                color="gradient"
                                                bordered
                                            />
                                        </a>
                                    </div>
                                    <div className="github">
                                        <a href="https://github.com/raidenshogun1692003" target="_blank" rel="noreferrer">
                                            <Avatar
                                                animated
                                                size="xl"
                                                pointer
                                                zoomed
                                                src={Github1}
                                                color="gradient"
                                                bordered

                                            />
                                        </a>
                                    </div>
                                    <div className="email">
                                        <a href="look1692003@gmail.com" target="_blank" rel="noreferrer">
                                            <Avatar
                                                animated
                                                size="xl"
                                                pointer
                                                zoomed
                                                src={Email}
                                                color="gradient"
                                                bordered
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Animator>
                </ScrollPage>
                <Spacer y={15} />
            </ScrollContainer>
            <div className="color">
                <Suspense fallback={<h1>Loading...</h1>}>
                    <ParalaxLazy />
                </Suspense>
            </div>
            <Spacer y={25} />
            <Suspense fallback={<h1>Loading...</h1>}>
                <SkillLazy />
            </Suspense>
            <Spacer y={15} />
            <Wavevy />

        </>)
}
export default Home;