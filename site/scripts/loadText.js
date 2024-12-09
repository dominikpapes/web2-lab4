fetch('lorem.txt')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('loremText').textContent = data;
    })
    .catch(error => {
        console.error('There was a problem with fetching the text file:', error);
    });

