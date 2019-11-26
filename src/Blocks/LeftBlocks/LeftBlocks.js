import React, { Component } from 'react';
import './LeftBlocks.css'
class LeftBlocks extends Component {
  clickHandler =()=>{
    alert('Test !!')
  }

  render () {
    return (
      <div className="leftBl" onClick={ this.props.ClickPageHandler }>
        <div className="headLeft">
          <img src="img/Logo.png" alt="" />
          <h3>Цифровая платформа</h3>
          <h2>i4.0</h2>
        </div>
        <hr />
        <div className="content1">
          <div className="contref">
            <img src="img/1-1.png" alt="" />
            <h4>Рабочие задания</h4>
          </div>
          <div className="contref" onClick ={this.clickHandler}>
            <img src="img/1-2.png" alt="" />
            <h4>Журнал дефектов</h4>
          </div>
          <div className="contref">
            <img src="img/1-3.png" alt="" />
            <h4>Запросы на работы</h4>
          </div>
          <div className="contref">
            <img src="img/1-4.png" alt="" />
            <h4>Отчеты и показатели</h4>
          </div>
        </div>
        <div className="content1">
          <div className="contref">
            <img src="img/2-1.png" alt="" />
            <h4>Обьекты</h4>
          </div>
          <div className="contref">
            <img src="img/2-2.png" alt="" />
            <h4>Оборудование</h4>
          </div>
          <div className="contref">
            <img src="img/2-3.png" alt="" />
            <h4>Запчасти и МТР</h4>
          </div>
          <div className="contref">
            <img src="img/2-4.png" alt="" />
            <h4>Счетчики</h4>
          </div>
          <div className="contref">
            <img src="img/2-5.png" alt="" />
            <h4>Заявки на закупку</h4>
          </div>
        </div>
        <div className="content1">
          <div className="contref">
            <img src="img/3-1.png" alt="" />
            <h4>Бригады</h4>
          </div>
          <div className="contref">
            <img src="img/3-2.png" alt="" />
            <h4>Контрагенты</h4>
          </div>
        </div>
        <div className="content1">
          <div className="contref">
            <img src="img/4-1.png" alt="" />
            <h4>Документы</h4>
          </div>
          <div className="contref">
            <img src="img/4-2.png" alt="" />
            <h4>Справочники</h4>
          </div>
        </div>
        <div className="footerLeft">
          <div className="footerLeft1">
            <img src="img/f-L1.png" alt="" />
            <h4>Настройки</h4>
          </div>
          <div className="footerLeft2"  onClick ={this.clickHandler}>
            <img src="img/f-L2.png" alt="" />
            <h4>Контакты</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default LeftBlocks;
