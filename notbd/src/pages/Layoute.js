import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { Navbar, NavbarBrand, NavLink } from 'reactstrap';

export class Layout extends Component {
    static displayName = Layout.name;

    render () {
        return (
            <div>
                <header>
                    <Navbar className="navbar navbar-expand-lg navbar-light bg">
                        <NavbarBrand tag={Link} to="/">
                            <img className="header-logo" src={"#href"} alt="logo" />
                        </NavbarBrand>
                        <form className="form">
                            <div className="btn-group" role="group" aria-label="Basic example" id="m">
                                <NavLink tag={Link} to="/auth">
                                    <button type="button" className="btn btn-primary" id="buttons">Авторизация</button>
                                </NavLink>
                                <NavLink tag={Link} to="/">
                                    <button type="button" className="btn btn-primary" id="buttons">Главная</button>
                                </NavLink>
                                <NavLink tag={Link} to="/modelrow">
                                    <button type="button" className="btn btn-primary" id="buttons">Новый документ</button>
                                </NavLink>
                                <NavLink tag={Link} to="/production">
                                    <button type="button" className="btn btn-primary" id="buttons">Новое событие</button>
                                </NavLink>
                                <NavLink tag={Link} to="/profile">
                                    <button type="button" className="btn btn-primary" id="buttons">Профиль</button>
                                </NavLink>
                                <NavLink tag={Link} to="/register">
                                    <button type="button" className="btn btn-primary" id="buttons">Зарегестрироваться</button>
                                </NavLink>
                                <NavLink tag={Link} to="/report">
                                    <button type="button" className="btn btn-primary" id="buttons">Даты</button>
                                </NavLink>
                            </div>
                        </form>
                    </Navbar>
                </header>
                <div className="main-content">
                    {this.props.children}
                </div>
                <footer>
                    <p className="text text-center">2020</p>
                </footer>
            </div>
        );
    }
}