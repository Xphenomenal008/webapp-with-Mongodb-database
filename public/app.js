const deleteForms = document.querySelectorAll('.handleform'); // Selects all delete forms

deleteForms.forEach(form => {
    form.addEventListener('submit', (event) => {
        console.log('Delete button clicked');  
        const confirmation = confirm('Are you sure you want to Delete?');
        if (!confirmation) {
            event.preventDefault(); // Prevents form submission if user clicks "Cancel"
        }
    });
});
