// Select the gallery container
const gallery = document.getElementById('gallery');

// Generate image file names and add to the gallery
for (let i = 1; i <= 50; i++) {
    const img = document.createElement('img');
    img.src = `images/img${i}.jpg`;
    img.alt = `Image ${i}`;
    gallery.appendChild(img);
}
