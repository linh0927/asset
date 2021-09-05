const toggleSwitch = document.querySelector('#theme-switch input[type="checkbox"]');

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
document.documentElement.setAttribute('data-theme', currentTheme);

if (currentTheme === 'dark') {
toggleSwitch.checked = true;
$('#theme').html('<i class="fa fa-moon-stars fa-beat"></i>');
$('meta[name="theme-color"]').attr('content', '#282958');

} else {
toggleSwitch.checked = false;
$('#theme').html('<i class="fa fa-sun fa-beat"></i>');
$('meta[name="theme-color"]').attr('content', '#8fbc8f');
}
}

function switchTheme(e) {

if (e.target.checked) {
document.documentElement.setAttribute('data-theme', 'dark');
localStorage.setItem('theme', 'dark');
$('#theme').html('<i class="fa fa-moon-stars fa-beat"></i>');
$('meta[name="theme-color"]').attr('content', '#282958');

} else {
        document.documentElement.setAttribute('data-theme', 'light');
localStorage.setItem('theme', 'light');
$('#theme').html('<i class="fa fa-sun fa-beat"></i>');
$('meta[name="theme-color"]').attr('content', '#8fbc8f');
}

}

toggleSwitch.addEventListener('change', switchTheme);
