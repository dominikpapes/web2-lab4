const gallery = document.getElementById('gallery');

for (let i = 1; i <= 50; i++) {
    const img = document.createElement('img');
    img.src = `images/img${i}.jpg`;
    img.alt = `Image ${i}`;
    gallery.appendChild(img);
}
