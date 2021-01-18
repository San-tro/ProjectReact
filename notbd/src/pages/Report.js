
import React, { Component } from 'react';
import {NavLink} from "reactstrap";
import {Link} from "react-router-dom";
export class Report extends Component {
    static displayName = Report.name;

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 m-3" >
                        <h1>Даты</h1>
                        <form>
                            <div className="form-group row">
                                <label className="col-sm col-form-label">Начальная дата</label>
                                <div className="col-sm">
                                    <input type="date" className="form-control-sm" id=""/>
                                </div>
                                <label className="col-sm col-form-label">С1 дата</label>
                                <div className="col-sm">
                                    <input type="date" className="form-control-sm" id=""/>
                                </div>
                                <label className="col-sm col-form-label">С1+1 дата</label>
                                <div className="col-sm">
                                    <input type="date" className="form-control-sm" id=""/>
                                </div>
                                <label className="col-sm col-form-label">Финальная дата</label>
                                <div className="col-sm">
                                    <input type="date" className="form-control-sm" id=""/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm offset-sm">
                                    <button type="submit" className="btn btn-primary">Ок</button>
                                </div>
                                <div className="col-sm offset-sm">
                                    <button type="submit" className="btn btn-primary">Закрыть</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Report;