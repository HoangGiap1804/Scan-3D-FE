import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const ScrollReveal = ({ children, direction = 'left' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const getBaseClasses = () => {
        return isVisible
            ? 'opacity-100 translate-x-0'
            : `opacity-0 ${direction === 'left' ? '-translate-x-20' : 'translate-x-20'}`;
    };

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out transform ${getBaseClasses()}`}
        >
            {children}
        </div>
    );
};

ScrollReveal.propTypes = {
    children: PropTypes.node.isRequired,
    direction: PropTypes.oneOf(['left', 'right']),
};

export default ScrollReveal;
