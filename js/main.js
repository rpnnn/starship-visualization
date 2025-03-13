let currentStep = 0;
let isAnimating = false;

// Get DOM elements
const booster = document.querySelector('.booster');
const leftStick = document.querySelector('.left-stick');
const rightStick = document.querySelector('.right-stick');
const stepDescription = document.getElementById('step-description');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

// Update step indicators
function updateStepIndicators(step) {
    document.querySelectorAll('.step').forEach((el, index) => {
        el.classList.toggle('active', index < step);
    });
}

// Animation sequence
function startAnimation() {
    if (isAnimating) return;
    isAnimating = true;
    startBtn.disabled = true;
    resetBtn.disabled = true;

    // Reset position first
    resetAnimation(false);

    // Step 1: Booster approaches
    setTimeout(() => {
        currentStep = 1;
        updateStepIndicators(currentStep);
        booster.style.bottom = '60%';
        stepDescription.textContent = 'Step 1: Booster approaching catch arms...';

        // Step 2: Chopsticks extend
        setTimeout(() => {
            currentStep = 2;
            updateStepIndicators(currentStep);
            leftStick.style.transform = 'translateX(-100%) rotate(-15deg)';
            rightStick.style.transform = 'translateX(0%) rotate(15deg)';
            stepDescription.textContent = 'Step 2: Catch arms extending to capture position...';

            // Step 3: Catch and secure
            setTimeout(() => {
                currentStep = 3;
                updateStepIndicators(currentStep);
                booster.style.bottom = '40%';
                stepDescription.textContent = 'Step 3: Booster secured by catch arms!';
                
                // Enable reset button after animation completes
                resetBtn.disabled = false;
                isAnimating = false;
            }, 2000);
        }, 2000);
    }, 500);
}

// Reset animation
function resetAnimation(enableStart = true) {
    currentStep = 0;
    updateStepIndicators(currentStep);
    booster.style.bottom = '100%';
    leftStick.style.transform = 'translateX(-100%) rotate(0deg)';
    rightStick.style.transform = 'translateX(0%) rotate(0deg)';
    stepDescription.textContent = 'Click "Start Animation" to begin the recovery sequence.';
    
    if (enableStart) {
        startBtn.disabled = false;
        isAnimating = false;
    }
}

// Initialize
resetAnimation();
