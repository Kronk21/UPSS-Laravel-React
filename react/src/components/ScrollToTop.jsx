import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = function () {
    const { pathUrl } = useLocation();

    useEffect(
        function () {
            document.documentElement.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant", // Optional if you want to skip the scrolling animation
            });
        },
        [pathUrl]
    );

    return null;
};

export default ScrollToTop;
