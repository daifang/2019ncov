import React, { Component } from 'react'
import './City.css'
export default class City extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <div className='animated fadeIn' >
                            <h1 className='city' id={this.props.provinceShortName}>{this.props.provinceName}</h1>
                            <ul className='head'>
                                <li>确诊</li>
                                <li>{this.props.confirmedCount}</li>
                                <li>现存</li>
                                <li>{this.props.currentConfirmedCount}</li>
                                <li>治愈</li>
                                <li>{this.props.curedCount}</li>
                                <li>死亡</li>
                                <li>{this.props.deadCount}</li>
                            </ul>
                            <div className='container-citys'>
                                <ul className='citys'>
                                    {
                                        this.props.citys.map(val=>{
                                            return(
                                                <div id='citys'>
                                                    <h3>{val.cityName}</h3>
                                                    <ul>
                                                        <li>确诊:{val.confirmedCount}</li>
                                                        <li>现存:{val.currentConfirmedCount}</li>
                                                        <li>治愈:{val.curedCount}</li>
                                                        <li>死亡:{val.deadCount}</li>
                                                    </ul>
                                                </div>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
