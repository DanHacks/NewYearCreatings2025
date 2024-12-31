document.addEventListener('DOMContentLoaded', () => {
    const nameForm = document.getElementById('nameForm');
    const userNameInput = document.getElementById('userName');
    const greetingMessage = document.getElementById('greetingMessage');
    const personalGreeting = document.getElementById('personalGreeting');
    const generateLinkButton = document.getElementById('generateLink');
    const invitationLink = document.getElementById('invitationLink');

    // Handle form submission
    document.getElementById('submitName').addEventListener('click', () => {
        const userName = userNameInput.value.trim();
        if (userName) {
            nameForm.style.display = 'none';
            greetingMessage.style.display = 'block';
            personalGreeting.textContent = `Happy New Year 2025, ${userName}!`;
        } else {
            alert('Please enter your name.');
        }
    });

    // Generate invitation link
    generateLinkButton.addEventListener('click', () => {
        const userName = userNameInput.value.trim();
        const currentUrl = window.location.href;
        const inviteUrl = `${currentUrl}?ref=${encodeURIComponent(userName)}`;
        invitationLink.style.display = 'block';
        invitationLink.textContent = `Share this link: ${inviteUrl}`;
        invitationLink.style.color = 'blue';
        invitationLink.style.cursor = 'pointer';

        // Make the link clickable
        invitationLink.onclick = () => {
            navigator.clipboard.writeText(inviteUrl);
            alert('Invitation link copied to clipboard!');
        };
    });
});
