import React, { Component } from 'react';

import './RightBlock.scss'

import WorkBlock from '../WorkBlock/WorkBlock'

class RightBlock extends Component {
    clickHandler = () => {
        alert( 'Test !!' )
    }
    render () {
        return (
            <div className="rightBl"  >
                <div className="containerHeader" onClick={ this.props.ClickPageHandler }>
                    <div className="headerRight">
                        <h1>Рабочие задания</h1>
                        <div className="notice" onClick={ this.clickHandler }>
                            <img src="img/bellPr.png" alt="" />
                            <div className="circles">
                                <div className="circle">
                                    <div className="circle__number">1</div>
                                </div>
                            </div>
                        </div>
                        <div className="avatar">
                            <img src="img/Avat.png" alt="" />
                        </div>
                    </div>
                    <hr />
                    <div className="right1">
                        <div className="but1">
                            <button onClick={ this.clickHandler }><img src="img/bbt2.png" alt="" /></button>
                            <button><img src="img/bbt3.png" alt="" /></button>
                            <button><img src="img/bbt11.png" alt="" /></button>
                        </div>
                        <div className="search">
                            <div className="submit"></div>
                            <input className="input"
                                type="text"
                                name=""
                                defaultValue=""
                                placeholder="Поиск..." >
                            </input>
                        </div>
                        <div className="workTasks">
                            <span>Найдено 5 рабочих заданий</span>
                        </div>
                        <div className="btnBlockWorktask">
                            <button className="btnWorktask" onClick={ this.clickHandler }>
                                <img src="img/plus.png" alt="" />
                                <span>Новое рабочее <br />задание</span>
                            </button>
                        </div>
                    </div>
                    <hr />
                    <div className="right2">
                        <div className="btBlock">
                            <button onClick={ this.clickHandler }><span>Дополнительные<br />фильтры</span></button>
                            <button><span> Ремонтный<br />персонал</span></button>
                            <button><span>Обьекты<br />обслуживания</span></button>
                            <button><span>Дата и срок<br />обслуживания</span></button>
                            <button><span>Статус рабочего<br />задания</span></button>
                            <button><span>Приоритет<br />выполнения</span></button>
                        </div>
                    </div>
                    <div className="right3">
                        <div className="tabHeader">
                            <span>Срок завершения</span>
                        </div>
                        <div className="tabHeader">
                            <span>Номер задания</span>
                        </div>
                        <div className="tabHeader">
                            <span>Статус задания</span>
                        </div>
                        <div className="tabHeader">
                            <span>Наименование работ</span>
                        </div>
                        <div className="tabHeader">
                            <span>Приоритет</span>
                        </div>
                        <div className="tabHeader">
                            <span>Бригада/исполнитель</span>
                        </div>
                        <div className="tabHeader">
                            <span>Обьект</span>
                        </div>
                    </div>
                </div>
                <WorkBlock
                    SecondPageHandler={ this.props.SecondPageHandler }
                />
            </div >
        );
    }
}

export default RightBlock;
