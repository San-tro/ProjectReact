
import React, { Component } from 'react';
import {NavLink} from "reactstrap";
import {Link} from "react-router-dom";
export class Auth extends Component {
    static displayName = Auth.name;

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 m-3" >
                        <h1>Вход</h1>
                        <form>
                            <div className="form-group row">
                                <label className="col-sm col-form-label">Email</label>
                                <div className="col-sm">
                                    <input type="email" className="form-control-sm" id=""/>
                                </div>
                                <label className="col-sm col-form-label">Пароль</label>
                                <div className="col-sm">
                                    <input type="password" className="form-control-sm" id=""/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm offset-sm">
                                    <button type="submit" className="btn btn-primary">Войти</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}
export default Auth;