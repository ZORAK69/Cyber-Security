// script.js

document.addEventListener('DOMContentLoaded', () => {
    const keylogger = document.getElementById('keylogger');
    const saveLogButton = document.getElementById('save-log');
    const toggleThemeButton = document.getElementById('toggle-theme');

    let log = '';

    // Event listener to capture keystrokes
    document.addEventListener('keydown', (event) => {
        log += event.key;
        keylogger.value = log;
    });

    // Function to save log to a file
    const saveLogToFile = () => {
        const blob = new Blob([log], { type: 'text/plain' });
        const anchor = document.createElement('a');
        anchor.download = 'keylog.txt';
        anchor.href = window.URL.createObjectURL(blob);
        anchor.target = '_blank';
        anchor.style.display = 'none'; // just to be safe!
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    };

    // Event listener for save button
    saveLogButton.addEventListener('click', saveLogToFile);

    // Event listener for theme toggle button
    toggleThemeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});
