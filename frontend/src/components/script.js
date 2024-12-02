document.querySelectorAll('.activeButton').forEach(button => {
    button.addEventListener('click', () => {

        document.querySelectorAll('.activeButton').forEach(btn => btn.classList.remove('active'));

        button.classList.add('active');
    });
});
