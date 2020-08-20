let entries = [];
function handleSubmit(event) {
    event.preventDefault();
    const entry = Number(document.querySelector('#entry').value);
    if (!entry) return;
    document.querySelector('form').reset();
    entries.push(entry);
    
}

const form = document.querySelector("form").addEventListener("submit", handleSubmit);