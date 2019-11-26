import React, { Component } from 'react';

import './RightBlock.css'

import WorkBlock from '../WorkBlock/WorkBlock'

class RightBlock extends Component {
    clickHandler =()=>{
        alert('Test !!')
      }
    render () {
        return (
            <div className="rightBl"  >
                <div className="containerHeader" onClick ={this.props.ClickPageHandler}>
                    <div className="headerRight">
                        <h1>Рабочие задания</h1>
                        <div className="notice" onClick ={this.clickHandler}>
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
                            <button onClick ={this.clickHandler}><img src="img/bbt2.png" alt="" /></button>
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
                            <button className="btnWorktask" onClick ={this.clickHandler}>
                                <img src="img/plus.png" alt="" />
                                <span>Новое рабочее <br />задание</span>
                            </button>
                        </div>
                    </div>
                    <hr />
                    <div className="right2">
                        <div className="btBlock">
                            <button onClick ={this.clickHandler}><span>Дополнительные<br />фильтры</span></button>
                            <button><span> Ремонтный<br />персонал</span></button>
                            <button><span>Обьекты<br />обслуживания</span></button>
                            <button><span>Дата и срок<br />обслуживания</span></button>
                            <button><span>Статус рабочего<br />задания</span></button>
                            <button><span>Приоритет<br />выполнения</span></button>
                        </div>
                    </div>
                    <table className="right3">
                        <thead>
                            <tr className="tabHeader">
                                <th><span>Срок завершения</span></th>
                                <th><span>Номер задания</span></th>
                                <th><span>Статус задания</span></th>
                                <th><span>Наименование работ</span></th>
                                <th><span>Приоритет</span></th>
                                <th><span>Бригада/исполнитель</span></th>
                                <th><span>Обьект</span></th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <WorkBlock
                 SecondPageHandler={this.props.SecondPageHandler } 
                />
            </div >
        );
    }
}

export default RightBlock;
