import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()

    React.useEffect(() => {
        navigate("/login");
    }, [])

    return (
        <div>
            <span>
                Go to <Link to="/login">Login</Link>
            </span>
        </div>
    )
}
