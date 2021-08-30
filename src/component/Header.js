import React from 'react';
import "./header.css";

function Header() {
    return (
        <div className="header">
            <picture>
                <source media="(min-width: 900px)" srcSet="/images/bg-header-desktop.svg" />
                <source media="(max-width: 768px)" srcSet="/images/bg-header-mobile.svg" />
                <img src="/images/bg-header-mobile.svg" className="header__img"/>
            </picture>
        </div>
    )
}
export default Header;
