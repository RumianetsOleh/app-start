function onAddMessage() {
    const inputElement= document.getElementById('MessageInput');
    const message=inputElement.value;
    
    const listElement= document.getElementById('messageList');

    const listItem=document.createElement('li');
    listItem.textContent=message;
    listElement.appendChild(listItem);
    inputElement.value=""

    let savedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    savedMessages.push(message);
    localStorage.setItem('messages', JSON.stringify(savedMessages));
    console.log('messageInput', savedMessages);
}
