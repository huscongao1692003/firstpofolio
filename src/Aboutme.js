import React, { Component } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import './App.css'

const Aboutme = () => {



    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }

    return (

        <h1 style={{ paddingTop: '2rem', margin: 'auto 0', fontWeight: 'normal', }}>
            My life is  {' '}
            <span style={{ color: 'red', fontWeight: 'bold' }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                    words={['Eat', 'Sleep', 'Code', 'Repeat!']}
                    loop={100}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    onLoopDone={handleDone}

                />
            </span>
        </h1 >

    )
}
export default Aboutme;