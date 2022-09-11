import React from 'react';

const FullScreenLoader = () => {
    return (
        <div>
            <div className={"LoadingOverlay d-none"}>
                <div className="Line-Progress">
                    <div className="indeterminate"></div>
                </div>
            </div>
        </div>
    );
};

export default FullScreenLoader;