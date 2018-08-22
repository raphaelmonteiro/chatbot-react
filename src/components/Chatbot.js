import React, { Component } from 'react'
import ChatHeader from './chat/ChatHeader';
import ChatConversa from './chat/ChatConversa';
import ChatMensagem from './chat/ChatMensagem';
import './chat/chat.css'

class Chatbot extends Component {
    render() {
        return (
            <div className="chatbot">
                <div className="chat-conteudo">
                    <ChatHeader />
                    <ChatConversa />
                    <ChatMensagem />
                </div>
            </div>
        )
    }
}

export default Chatbot