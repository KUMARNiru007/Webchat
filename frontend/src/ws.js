import {io} from 'socket.io-client'

export function connectWS() {
    const url = import.meta.env.DEV ? 'http://localhost:3000' : window.location.origin
    return io(url)
}