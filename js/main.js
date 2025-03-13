const steps = [
    {
        scroll: 0,
        description: "The launch and catch tower stands 469 feet tall, equipped with mechanical arms known as 'chopsticks'.",
        components: {
            booster: { bottom: '100%' },
            leftStick: { transform: 'translateX(-100%) rotate(0deg)' },
            rightStick: { transform: 'translateX(0%) rotate(0deg)' }
        }
    },
    {
        scroll: 0.33,
        description: "As the booster approaches, the chopsticks prepare to catch the vehicle using specialized catching points.",
        components: {
            booster: { bottom: '60%' },
            leftStick: { transform: 'translateX(-100%) rotate(-5deg)' },
            rightStick: { transform: 'translateX(0%) rotate(5deg)' }
        }
    },
    {
        scroll: 0.66,
        description: "The chopsticks extend and secure the booster, completing the catch maneuver.",
        components: {
            booster: { bottom: '40%' },
            leftStick: { transform: 'translateX(-100%) rotate(-15deg)' },
            rightStick: { transform: 'translateX(0%) rotate(15deg)' }
        }
    }
];

// Scroll event listener for animations
window.addEventListener('scroll', () => {
    const container = document.querySelector('.visualization-container');
    const containerTop = container.offsetTop;
    const scrollPosition = window.pageYOffset - containerTop;
    const containerHeight = container.offsetHeight - window.innerHeight;
    const scrollProgress = Math.max(0, Math.min(1, scrollPosition / containerHeight));

    // Update components based on scroll position
    steps.forEach((step, index) => {
        if (scrollProgress >= step.scroll && 
            (index === steps.length - 1 || scrollProgress < steps[index + 1].scroll)) {
            updateComponents(step);
        }
    });
});

// Parallax effect for hero image
window.addEventListener('scroll', () => {
    const offset = window.pageYOffset;
    document.querySelector('.hero-image').style.transform = `translateY(${offset * 0.5}px)`;
});

function updateComponents(step) {
    const descriptionBox = document.querySelector('.description-box');
    descriptionBox.textContent = step.description;
    descriptionBox.style.opacity = '1';

    Object.entries(step.components).forEach(([component, styles]) => {
        const element = document.querySelector(`.${component}`);
        Object.entries(styles).forEach(([property, value]) => {
            element.style[property] = value;
        });
    });
}
