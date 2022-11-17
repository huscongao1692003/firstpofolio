import React, { useState, useContext } from "react"
import { useAuth } from "./context/Context.js"
import { useNavigate } from "react-router-dom"
import { Avatar, Container, Row, Button } from '@nextui-org/react'
import styles from "./dashboard.module.css"
import { ChatContext } from "./context/ChatContext";
import { AuthContext } from './context/AuthContext'



export default function Dashboard() {
    const [error, setError] = useState(false)
    const { logout } = useAuth()
    const navigate = useNavigate()
    const { currentUser } = useContext(AuthContext)


    async function handleLogout() {
        setError("")

        try {
            await logout()
            navigate('/')
        } catch {
            setError("Failed to log out")
        }
    }

    return (
        <>

            <h2 className={styles.heading}>Profile</h2>
            {error && <h1 variant="danger">{error}</h1>}
            <Container>
                <Row className={styles.image}>
                    <Avatar zoomed src={currentUser.photoURL} css={{ size: "$40" }} />
                </Row>
            </Container>
            <div className={styles.gmail}>
                <strong >Email:</strong> {currentUser.email}
            </div>
            <strong className={styles.name}>Name:</strong>{currentUser.displayName}



            <div className={styles.log}>
                <Button onClick={handleLogout}>
                    Log Out
                </Button>
            </div>
        </>
    )
}