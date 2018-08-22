import React, { Component } from 'react'
import { Alert, Badge } from 'reactstrap'
class ChatConversa extends Component {
    render() {
        return (
            <div className="chat-conversa">
                <Badge color="primary">Você disse:</Badge>
                <Alert color="primary">Aqui vai a nossa conversa em....</Alert>
                
                <Badge color="warning">Chatbot disse:</Badge>
                <Alert color="warning">Aqui vai a nossa conversa em....</Alert>
            </div>
        )
    }
}

export default ChatConversa