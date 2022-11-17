import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React, { Component } from 'react';
const Footer = () => {
    return (
        <>

            <div>
                <Parallax pages={2} style={{ zIndex: "-1", top: '0', left: '0' }}>
                    <ParallaxLayer
                        offset={2}
                        speed={2.5}
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <p>Scroll down</p>
                    </ParallaxLayer>

                    <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#ff6d6d', }} />

                    <ParallaxLayer
                        offset={1}
                        speed={0.5}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'white',
                        }}>
                        <p>Scroll up</p>
                    </ParallaxLayer>
                </Parallax>
            </div>
        </>
    )
}
export default Footer;