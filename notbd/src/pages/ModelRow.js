
import React, { Component } from 'react';
import {NavLink} from "reactstrap";
import {Link} from "react-router-dom";
export class ModelRow extends Component {
    static displayName = ModelRow.name;

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 m-3" >
                        <h1>Новый документ</h1>
                        <form>
                            <div className="form-group row">
                                <label className="col-sm col-form-label">Название документа</label>
                                <div className="col-sm">
                                    <input type="text" className="form-control-sm" id=""/>
                                </div>
                                <label className="col-sm col-form-label">Дата</label>
                                <div className="col-sm">
                                    <input type="date" className="form-control-sm" id=""/>
                                </div>
                                <label className="col-sm col-form-label">Докумпент контент</label>
                                <div className="col-sm">
                                    <input type="text" className="form-control-sm" id=""/>
                                </div>
                                <label className="col-sm col-form-label">Для кого</label>
                                <div className="col-sm">
                                    <input type="text" className="form-control-sm" id=""/>
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
export default ModelRow;