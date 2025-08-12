document.getElementById('expand-img').addEventListener('click', function() {
    var hr = document.getElementById('card-hr');
    var desc = document.getElementById('card-desc');
    var card = document.getElementById('process-card');
    var expanded = hr.style.display === 'block';
    if (!expanded) {
        hr.style.display = 'block';
        desc.style.display = 'block';
        card.style.boxShadow = '0 0 20px rgba(0,0,0,0.15)';
    } else {
        hr.style.display = 'none';
        desc.style.display = 'none';
        card.style.boxShadow = '';
    }
});