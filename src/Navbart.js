
import React, { Component } from 'react';
import "./App.css"
import { SunIcon } from './SunIcon'
import { MoonIcon } from './MoonIcon'
import logoLoad from './subject/avata.jpg'
import { Navbar, Dropdown, Button, Text, Input, Avatar, Switch } from "@nextui-org/react";
import { Link as linkNext } from "@nextui-org/react"
import { Layout } from "./Layout.js";
import { icons } from "./Icon.js";
import { SearchIcon } from "./SearchIcon.js"
import { Link } from 'react-router-dom'
const Navbart = () => (

    <Layout>
        <Navbar shouldHideOnScroll onScrollPositionChange css={{ bg: "transparent" }} isBordered variant="floating" >
            <Navbar.Content variant="highlight-rounded"
                activeColor="error"
            >
                <Navbar.Brand css={{ mr: 20, ml: 0 }}>
                    <Text b color="inherit" hideIn="xl">
                        <Link to="/" ><Avatar
                            src={logoLoad}
                            size="lg"
                        /></Link>
                    </Text>
                </Navbar.Brand>
                <Navbar.Content
                    variant="underline"
                    enableCursorHighlight
                    activeColor="secondary"
                    hideIn="xs"
                >
                    <Dropdown isBordered>
                        <Navbar.Item>
                            <Dropdown.Button
                                auto
                                light
                                css={{
                                    mr: 15,
                                    px: 0,
                                    dflex: "center",
                                    svg: { pe: "none" },
                                }}
                                iconRight={icons.chevron}
                                ripple={false}
                            >
                                Features
                            </Dropdown.Button>
                        </Navbar.Item>
                        <Dropdown.Menu
                            aria-label="ACME features"
                            css={{
                                $$dropdownMenuWidth: "340px",
                                $$dropdownItemHeight: "70px",
                                "& .nextui-dropdown-item": {
                                    py: "$4",
                                    // dropdown item left icon
                                    svg: {
                                        color: "$secondary",
                                        mr: "$4",
                                    },
                                    // dropdown item title
                                    "& .nextui-dropdown-item-content": {
                                        w: "100%",
                                        fontWeight: "$semibold",
                                    },
                                },
                            }}
                        >
                            <Dropdown.Item
                                key="autoscaling"
                                showFullDescription
                                description="Auto Music Player"
                                icon={icons.scale}
                            >
                                Music
                            </Dropdown.Item>
                            <Dropdown.Item
                                key="usage_metrics"
                                showFullDescription
                                description="Real-time chat with login. No where to chat ? We’ll show you exactly where."
                                icon={icons.activity}
                            ><linkNext to="/chat">
                                    Message
                                </linkNext>
                            </Dropdown.Item>
                            <Dropdown.Item
                                key="production_ready"
                                showFullDescription
                                description="ACME runs on ACME, join us and others serving requests at web scale."
                                icon={icons.flash}
                            >
                                Production Ready
                            </Dropdown.Item>
                            <Dropdown.Item
                                key="99_uptime"
                                showFullDescription
                                description="Applications stay on the grid with high availability and high uptime guarantees."
                                icon={icons.server}
                            >
                                +99% Uptime
                            </Dropdown.Item>
                            <Dropdown.Item
                                key="supreme_support"
                                showFullDescription
                                description="Overcome any challenge with a supporting team ready to respond."
                                icon={icons.user}
                            >
                                +Supreme Support
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Navbar.Link href="/" css={{ mr: 15 }}>
                        About me
                    </Navbar.Link>
                    <Navbar.Link href="/applications" css={{ mr: 15 }}>Applications</Navbar.Link>
                    <Navbar.Link href="/study" css={{ mr: 200 }}>Study</Navbar.Link>
                </Navbar.Content>

                <div className="searchbar" >
                    <Input

                        clearable
                        contentLeft={<SearchIcon fill="var(--nextui-colors-accents6)" size={16} />}
                        contentLeftStyling={true}
                        css={{
                            mr: 10,
                            w: "70%",
                            "@xsMax": {
                                mw: 100,


                            },
                            "& .nextui-input-content--left": {
                                h: "50%",
                                ml: 10,
                                dflex: "right",
                            },
                        }}
                        placeholder="Search..."
                    />
                </div>

                <Switch
                    checked={true}
                    size="xl"
                    iconOn={<SunIcon filled />}
                    iconOff={<MoonIcon filled />}
                />

                <Navbar.Content css={{ ml: 10 }}>
                    <Navbar.Link color="inherit" href="/login">
                        Login
                    </Navbar.Link>
                    <Navbar.Item>
                        <Button auto flat as={linkNext} href="/login">
                            Sign Up
                        </Button>
                    </Navbar.Item>
                </Navbar.Content>
            </Navbar.Content>
        </Navbar>
    </Layout>
)
export default Navbart;

