const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

button.addEventListener('click', () => createNotification())

const messages = [
    'message 1',
    'message 2', 
    'message 3'
]

function createNotification() {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.innerText = getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    },3000)
}


function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)
    ]
}