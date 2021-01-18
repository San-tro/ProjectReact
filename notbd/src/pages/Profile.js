
import React, { Component } from 'react';
import {NavLink} from "reactstrap";
import {Link} from "react-router-dom";
export class Profile extends Component {
    static displayName = Profile.name;

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8 m-3" >
                        <h1>Профиль</h1>
                            <div className="form-group row">
                                <label className="col-sm col-form-label">Имя</label>
                                <div className="col-sm">
                                    <input type="text" className="form-control-sm" id=""/>
                                </div>

                                <label className="col-sm col-form-label">Фамилия</label>
                                <div className="col-sm">
                                    <input type="text" className="form-control-sm" id=""/>
                                </div>
                                <label className="col-sm col-form-label">Страна</label>
                                <div className="col-sm">
                                    <input type="text" className="form-control-sm" id=""/>
                                </div>
                                <label className="col-sm col-form-label">О себе</label>
                                <div className="col-sm">
                                    <input type="text" className="form-control-sm" id=""/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm offset-sm">
                                    <button type="submit" className="btn btn-primary">Войти</button>
                                </div>
                            <div className="col-sm offset-sm">
                                <button type="submit" className="btn btn-primary">Закрыть</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default Profile;