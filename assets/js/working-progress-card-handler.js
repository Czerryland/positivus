document.querySelectorAll('.expand-icon').forEach(function(img) {
    img.addEventListener('click', function() {
        var card = img.closest('.card');
        var hr = card.querySelector('hr');
        var desc = card.querySelector('p');
        var expanded = hr.style.display === 'block';
        if (!expanded) {
            hr.style.display = 'block';
            desc.style.display = 'block';
            card.classList.add('bg-secondary');
            img.classList.add('expand-img-box-shadow');
            card.classList.remove('bg-primary');
            img.src = 'images/minus-icon.svg'; 
        } else {
            hr.style.display = 'none';
            desc.style.display = 'none';
            card.classList.remove('bg-secondary');
            img.classList.remove('expand-img-box-shadow');
            card.classList.add('bg-primary');
            img.src = 'images/plus-icon.svg'; 
        }
    });
});