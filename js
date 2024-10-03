document.getElementById('saveNote').addEventListener('click', function() {
    const noteContent = document.getElementById('noteInput').value;
    fetch('/notes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ note: noteContent }),
    })
    .then(response => response.json())
    .then(data => {
        if(data.success) {
            const li = document.createElement('li');
            li.textContent = noteContent;
            document.getElementById('noteList').appendChild(li);
            document.getElementById('noteInput').value = ''; // Clear input
        } else {
            alert('Error saving note');
        }
    });
});
