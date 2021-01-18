
import React, { Component } from 'react';
import {NavLink} from "reactstrap";
import {Link} from "react-router-dom";
export class Register extends Component {
    static displayName = Register.name;

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-5 mt-3  m-auto">
                        <h1>Регистрация</h1>
                        <form>
                            <div className="form-group pt-5">
                                <label htmlFor="formGroupExampleInput">Логин</label>
                                <input type="text" className="form-control col-1" id=""/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput2">E-mail</label>
                                <input type="email" className="form-control col-1" id=""/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput2">Пароль</label>
                                <input type="password" className="form-control col-1" id=""/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput2">Код доступа</label>
                                <input type="number" className="form-control col-1" id=""/>
                            </div>
                            <div className="btn-group" role="group" aria-label="Basic example" id="">
                                <input type="submit" className="btn btn-primary" id="" value="Зарегистрироваться"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Register;