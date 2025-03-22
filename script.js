document.addEventListener('DOMContentLoaded', function() {
    const moodChips = document.querySelectorAll('.mood-chip');

    moodChips.forEach(chip => {
        chip.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });

    const playlistForm = document.getElementById('playlist-form');

    playlistForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // In a real application, you would send the form data to your backend
        // This is just a visual demo
        alert('Your playlist is being generated! In a real app, this would call your API.');
    });
});