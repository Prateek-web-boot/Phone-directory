// 'Header' as a functional component to display the heading text
// DONE 2: Styled Header component using styles written in external stylesheet (external styling)
import React from 'react';

const Header = function(props) {

    const headerStyle = {
        textAlign: 'center',
        color: '#fff',
        background: '#000',
        padding: 20,
        fontSize :20,
        letterSpacing: 2,
        textTransform: 'uppercase'
    }

    return (
        <div style = {headerStyle}>
            {props.heading}
        </div>

    );
}

export default Header;





















// const Header = function () {
//     return (
//         <div className='header-container'>
//             <h2 className='heading'>Password Strength Meter</h2>
//         </div>
//     );
// }

// export default Header;



















