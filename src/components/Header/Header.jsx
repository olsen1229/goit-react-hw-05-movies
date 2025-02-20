import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
    return (
        <header className={css.header}>
            <nav className={css.nav}>
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? css.linkActive : css.link)}
                    end
                >
                    Home
                </NavLink>
                <NavLink
                    to="/movies"
                    className={({ isActive }) => (isActive ? css.linkActive : css.link)}
                >
                    Movies
                </NavLink>
    
            </nav>
        </header>
    );
};