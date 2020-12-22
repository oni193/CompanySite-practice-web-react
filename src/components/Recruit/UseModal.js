import { useState } from 'react';

// Creating a Custom Modal Hook
const UseModal = () => {
    const [isShowing, setIsShowing] = useState(false);
    // state values to store the current view state of the modal

    function toggle() {
        setIsShowing(!isShowing);
    }
    // function toggle that changes the value of isShowing to be the opposite of what it is currently

    return(
        isShowing,
        toggle
    // components has access to them
    )
};

export default UseModal;