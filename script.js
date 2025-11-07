function convertTime() {
    const minutesInput = document.getElementById('minutes');
    const resultDiv = document.getElementById('result');
    
    // Get the input value
    const totalMinutes = parseInt(minutesInput.value);
    
    // Check if input is valid
    if (isNaN(totalMinutes) || totalMinutes < 0) {
        resultDiv.textContent = 'Please enter a valid number of minutes!';
        resultDiv.style.animation = 'none';
        void resultDiv.offsetWidth; // Trigger reflow
        resultDiv.style.animation = 'slideUp 0.5s ease forwards';
        return;
    }
    
    // Calculate hours and remaining minutes
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    
    // Create the result message
    let message = '';
    if (hours === 0) {
        message = `You have ${minutes} minute${minutes !== 1 ? 's' : ''}`;
    } else {
        message = `You have ${hours} hour${hours !== 1 ? 's' : ''} and ${minutes} minute${minutes !== 1 ? 's' : ''}`;
    }
    
    // Update the result with animation
    resultDiv.style.animation = 'none';
    void resultDiv.offsetWidth; // Trigger reflow
    resultDiv.textContent = message;
    resultDiv.style.animation = 'slideUp 0.5s ease forwards';
    
    // Clear input
    minutesInput.value = '';
}