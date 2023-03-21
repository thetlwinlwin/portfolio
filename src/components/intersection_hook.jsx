import { useEffect, useState } from "react";

function useInView(target, options) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [observer, setObserver] = useState(null);



    useEffect(() => {
        const callback = (entries) => {
            setIsIntersecting(entries[0].isIntersecting);
        };

        observer?.disconnect(); // Disconnect from the previous observer

        if (target.current) {
            const _observer = new IntersectionObserver(callback, options);
            _observer.observe(target.current);
            setObserver(_observer);
        }

        return () => {
            observer?.disconnect();
        };// eslint-disable-next-line
    }, [target.current, options.root, options.rootMargin, options.threshold]);

    useEffect(() => {
        return () => {
            observer?.disconnect();
        };// eslint-disable-next-line
    }, []);

    return isIntersecting;
}

export default useInView;