
document.addEventListener('DOMContentLoaded', function() {
    const messages = [
        "We're crafting something extraordinary just for you!",
        "Exciting things are brewing behind the scenes...",
        "Our team is hard at work on a fantastic update!",
        "Stay tuned - we're preparing something special!",
        "Good things come to those who wait... and we're almost ready!",
        "Innovation is in progress - check back soon!",
        "We're putting the finishing touches on our new creation!",
        "Something amazing is coming your way very soon!",
        "Our next big thing is just around the corner!",
        "The wait will be worth it - we promise!"
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const messageElement = document.querySelector('p.text-gray-500');
    if (messageElement) {
        messageElement.textContent = randomMessage;
    }
});
