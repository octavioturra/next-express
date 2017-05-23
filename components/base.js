import React from 'react';

export default ({ children }) => <main><style>{`
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
        font-style: normal;
        box-sizing: border-box;
    }
`}</style>{children}</main>;
