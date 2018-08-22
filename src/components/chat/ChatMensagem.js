import React from 'react'
import { InputGroup, Input, InputGroupAddon, Button } from 'reactstrap'

const ChatMensagem = props => {
    return (
        <div className="chat-mensagem">
            <hr />
            <InputGroup>
                <Input placeholder="Digite aqui" />
                <InputGroupAddon addonType="append">
                    <Button color="success">Enviar</Button>
                </InputGroupAddon>
            </InputGroup>
        </div>
    )
}

export default ChatMensagem