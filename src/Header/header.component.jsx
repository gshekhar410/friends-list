import React from 'react';
import './header.component.css'

function Header() {
        return (
                <div className="header">
                        <b><pre>F R I E N D S      L I S T</pre></b>
                </div>
        )
}

export default React.memo(Header);