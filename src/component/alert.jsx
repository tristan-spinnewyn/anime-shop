import React from 'react'
import { Alert } from 'react-bootstrap'

export default function AlertShow({ show, title, message, alert }) {
    if (show) {
        return (
            <Alert variant={alert} onClose={() => show=false} dismissible>
                <Alert.Heading>{title}</Alert.Heading>
                <p>
                    {message}
                </p>
            </Alert>
        )
    }

    return null
}
