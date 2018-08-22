export const enviaMensagem = (mensagem) => {
    return {
        type: 'ENVIA_MENSAGEM',
        payload: {messagem}
    }
}