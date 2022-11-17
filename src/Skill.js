import React from 'react';
import "./skill.css"
import reactPic from "./asset/react.jpeg"
import javaPic from "./asset/java.jpeg"
import flutterPic from "./asset/flutter.png"
import swiftPic from "./asset/sw.png"
import backendPic from "./asset/backend.jpeg"

const Skill = () => {
    return (
        <>
            <div class="content-skill">

                <ul class="team">
                    <li class="member co-funder">
                        <div class="thumb"><img src={reactPic} /></div>
                        <div class="description">
                            <h3>REACT</h3>
                            <p>React is a JavaScript library created by Facebook, React is a tool for building UI components, React is multi-platform applications.<a href="https://reactjs.org/">@react</a></p>
                        </div>
                    </li>
                    <li class="member co-funder">
                        <div class="thumb"><img src="https://assets.codepen.io/2/internal/avatars/users/default.png?height=120&width=120" /></div>
                        <div class="description">
                            <h3>FRAMEWORK</h3>
                            <p>I've learn many frameworks like Nodejs, Nextjs, Nextui, Chackra-ui, Electronjs,Spring boot, Vantajs, Ionic Framework, Astro,...<a href="https://google.com">@Framework</a></p>
                        </div>
                    </li>
                    <li class="member">
                        <div class="thumb"><img src={javaPic} /></div>
                        <div class="description">
                            <h3>JAVA</h3>
                            <p>Marie wears a lot of hats. She is our documentation lead, customer support mádasdasdaestra, editor, and community manager...<a href="https://codepen.io/mariemosley/">@mariemosley</a></p>
                        </div>
                    </li>

                    <li class="member">
                        <div class="thumb"><img src={flutterPic} /></div>
                        <div class="description">
                            <h3>Flutter & Dart</h3>
                            <p>Dee is a full stack developer who started her career in finance. She can jump from Rails to React to Go, and also manage our finances.<a href="https://codepen.io/deequez/">@deequez</a></p>
                        </div>
                    </li>
                    <li class="member">
                        <div class="thumb"><img src={swiftPic} /></div>
                        <div class="description">
                            <h3>Swift</h3>
                            <p>Dee is a full stack developer who started her career in finance. She can jump from Rails to React to Go, and also manage our finances.<a href="https://codepen.io/deequez/">@deequez</a></p>
                        </div>
                    </li>

                    <li class="member">
                        <div class="thumb"><img src={backendPic} /></div>
                        <div class="description">
                            <h3>Back-End</h3>
                            <p>To be a full-stack developer, I also have to learn about back-end, How to use Sql, Expressjs, Spring boot, Nextjs and many more.<a href="https://www.google.com/search?q=backend&oq=backend&aqs=chrome.0.35i39j69i59j69i65j69i60j69i65l2j69i61l2.964j0j7&sourceid=chrome&ie=UTF-8">@back-end</a></p>
                        </div>
                    </li>

                </ul>

            </div>
        </>
    );
}
export default Skill;