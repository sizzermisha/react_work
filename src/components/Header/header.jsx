import React from "react";
import './header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="header-input-container">
                <img src="/images/Search.svg" className="header-search-svg" alt="" />
                <input placeholder="Введите текст" className="header-input" type="text" />
            </div>

            <div className="header-icon-container">
                <img src="/images/Envelope.svg" alt="" className="header-icon" />
                <img src="/images/Bell.svg" alt="" className="header-icon" />
            </div>

            <div className="header-user-container">
                <h1 className="header-user-name">Иван Иванов</h1>
                <img className="header-user-img" />
            </div>
        </header>
    )
}