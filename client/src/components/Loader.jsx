import React, { useEffect, useState } from 'react';
import { Triangle } from 'react-loader-spinner';
import '../styles/loader.css';
function Loader() {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`loader-wrapper ${showLoader ? '' : 'hidden'}`}>
            <Triangle
                visible={true}
                height="70"
                width="70"
                color="#fafafa"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
}

export default Loader;
