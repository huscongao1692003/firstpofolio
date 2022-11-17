
import React, { useRef, useEffect } from 'react'
import styled from 'styled-components';
import { useSpring, animated, config, to } from 'react-spring';
import { useGesture } from 'react-use-gesture'
import "./paralax.css";

const Container = styled(animated.div)`
display: inline-block;
position: relative;
cursor: pointer;
`;

const calcY = (y, ly) => -(y - ly - window.innerHeight / 2) / 20
const calcX = (x, lx) => (x - lx - window.innerWidth / 2) / 20
const wheel = (y) => {
    const imgHeight = window.innerWidth * 0.3 - 20
    return `translateY(${-imgHeight * (y < 0 ? 6 : 1) - (y % (imgHeight * 5))}px`
}
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(800px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const Paralax = () => {
    useEffect(() => {
        const preventDefault = (e) => e.preventDefault()
        document.addEventListener('gesturestart', preventDefault)
        document.addEventListener('gesturechange', preventDefault)

        return () => {
            document.removeEventListener('gesturestart', preventDefault)
            document.removeEventListener('gesturechange', preventDefault)
        }
    }, [])

    const domTarget = useRef(null)
    const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
        () => ({
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            scale: 1,
            zoom: 0,
            x: 0,
            y: 0,
            config: { mass: 5, tension: 350, friction: 40 },
        })
    )
    const [{ wheelY }, wheelApi] = useSpring(() => ({ wheelY: 0 }))
    useGesture(
        {
            onDrag: ({ active, offset: [x, y] }) =>
                api({ x, y, rotateX: 0, rotateY: 0, scale: active ? 1 : 1.1 }),
            onPinch: ({ offset: [d, a] }) => api({ zoom: d / 200, rotateZ: a }),
            onMove: ({ xy: [px, py], dragging }) =>
                !dragging &&
                api({
                    rotateX: calcX(py, y.get()),
                    rotateY: calcY(px, x.get()),
                    scale: 1.1,
                }),
            onHover: ({ hovering }) =>
                !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
            onWheel: ({ event, offset: [, y] }) => {
                event.preventDefault()
                wheelApi.set({ wheelY: y })
            },
        },
        { domTarget, eventOptions: { passive: false } }
    )
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: config.default }))
    return (

        <div className="paral">
            <h1 className="text">My Hobby</h1>
            <p>Hover over the cards.</p>
            <section className="main">
                <animated.div
                    onMouseMove={({ clientX: x, clientY: y }) => (set({ xys: calc(x, y) }))}
                    onMouseLeave={() => set({ xys: [0, 0, 1] })}
                    style={{
                        transform: props.xys.interpolate(trans)
                    }}
                >
                    <div class="wrap wrap--1">
                        <div class="container container--1">
                            <p>01. Gamming</p>
                        </div>
                    </div>
                </animated.div>

                <div class="wrap wrap--2">
                    <animated.div

                        ref={domTarget}
                        style={{
                            transform: 'perspective(900px)',
                            x,
                            y,
                            scale: to([scale, zoom], (s, z) => s + z),
                            rotateX,
                            rotateY,
                            rotateZ,
                        }}>

                        <div class="container container--2">
                            <p>02. Music</p>
                        </div>

                    </animated.div>
                </div>

                <animated.div
                    onMouseMove={({ clientX: x, clientY: y }) => (set({ xys: calc(x, y) }))}
                    onMouseLeave={() => set({ xys: [0, 0, 1] })}
                    style={{
                        transform: props.xys.interpolate(trans)
                    }}
                >
                    <div class="wrap wrap--3">
                        <div class="container container--3">
                            <p>03. Code</p>

                        </div>
                    </div>
                </animated.div>
            </section>

        </div>

    )
};

export default Paralax;