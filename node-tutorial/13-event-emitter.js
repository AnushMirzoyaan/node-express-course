const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`data received. Name: ${name}, Id:${id}`)
})

customEmitter.on('response', () => {
    console.log('another logic here');
})

customEmitter.emit('response', 'john', 34)



