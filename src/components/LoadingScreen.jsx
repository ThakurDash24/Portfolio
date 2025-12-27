import { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete, onFadeOutStart }) => {
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        // Start fading out after a short delay to ensure the user sees the text
        const fadeTimer = setTimeout(() => {
            setIsFading(true);
            if (onFadeOutStart) onFadeOutStart(); // Trigger content animation
        }, 3000); // Display for 3 seconds (allow time for staggered entrance)

        // Notify parent that animation is complete after the fade transition
        const completeTimer = setTimeout(() => {
            onComplete();
        }, 4500); // 3s display + 1.5s fade

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    return (
        <div className={`loading-screen ${isFading ? 'fade-out' : ''}`}>
            <div className="loading-content">
                <div className="loading-subtitle">
                    Welcome to the portfolio
                </div>
                <div className="loading-text">
                    TDash
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
