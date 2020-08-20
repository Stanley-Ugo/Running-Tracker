
function handleSubmit(event) {
    event.preventDefault();
    const entry = Number(document.querySelector('#entry').value);
    
}

const form = document.querySelector('form').addEventListener('submit', handleSubmit);