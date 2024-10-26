function invertColor(hex) {
    // Convert hex to RGB
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    r = 255 - r;
    g = 255 - g;
    b = 255 - b;

    r = r.toString(16).padStart(2, '0');
    g = g.toString(16).padStart(2, '0');
    b = b.toString(16).padStart(2, '0');

    return `#${r}${g}${b}`;
}

document.addEventListener('mousemove', function (e) {
    var cursor = document.getElementById('custom-cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

document.querySelectorAll('.box').forEach(function (box) {
    box.addEventListener('mouseenter', function () {
        var cursor = document.getElementById('custom-cursor');
        cursor.style.backgroundColor = invertColor(this.getAttribute('data-color'));

        var video = this.querySelector('.video');
        var image = this.querySelector('.image');
        image.style.transform = 'scale(1.1)';

        video.style.display = 'block';
        video.play();
    });

    box.addEventListener('mouseleave', function () {
        var cursor = document.getElementById('custom-cursor');
        cursor.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';

        var video = this.querySelector('.video');
        var image = this.querySelector('.image');
        image.style.transform = 'scale(1)';

        video.style.display = 'none';
        video.pause();
    });
});
