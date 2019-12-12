import React, { Component } from 'react';
import './SecondPage.css'
import { YMaps, Map, GeoObject } from 'react-yandex-maps';
class SecondPage extends Component {
  clickHandler = () => {
    alert( 'Test !!' )
  }

  render () {
    return (
      <div className={ this.props.onClose } >
        <div className="vertBlockLeft">
          <div className="headerLeft">
            <div className="textHeader">
              Рабочее задание
                    </div>
            <div className="servBtn">
              <img src="img2/h1.png" alt="" onClick={ this.clickHandler } />
              <img src="img2/h2.png" alt="" />
              <img src="img2/h3.png" alt="" />
              <div className="upDown">
                <img src="img2/up.png" alt="" />
                <img src="img2/down.png" alt="" />
              </div>
              <img className="endDel"
                src="img2/h5.png" alt="" />
            </div>
          </div>
          <hr />
          <div className="imageLeft">
            <img src="img2/ImageLeft.png" alt="" />
          </div>
          <div className="serviceLeft">
            <div className="priority">
              <span>Приоритет</span>
              <div className="blText"
                 style={ { background: this.props.backGround} }
              >
                <span>{this.props.priority}</span>
              </div>
            </div>
            <div className="updated">
              <span>Обновлено: 05.10.2019 11:55</span>
            </div>
          </div>
          <div className="nameWork">
            <span>Течь трубы в здании - устранить</span>
          </div>
          <div className="tablParams">
            <table>
              <thead>
                <tr>
                  <th>
                    <select className="select">
                      <option>Выполнено</option>
                      <option>В работе</option>
                      <option>Выполнено</option>
                    </select>
                  </th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <td>Категория</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <td>Оборудование</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <td>Бригада</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <td>Исполнитель</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <td>Дата создания</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <td>Стоимость</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <td>Завершено</td>
                </tr>
              </thead>
            </table>
            <table>
              <thead>
                <tr>
                  <th><button className="btnTablRight">
                    <img src="img2/clock.png" alt="" />
                    Время: 1ч. 35 м.
                                </button></th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <td>Повреждение</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <td>Кран</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <td>{this.props.executor}</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <td>Иванов И.И</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <td>04.10.2019</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <td>1500</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <td>05.10.2019 11:00</td>
                </tr>
              </thead>
            </table>
          </div>
          <div className="footerLeft">
            <button>
              <img src="img2/arrowRight.png" alt="" />
            </button>
          </div>
        </div>
        <div className="vertBlockMiddle">
          <div className="block">
            <div className="tasks">
              <img src="img2/tasks.png" alt="" />
              <span>Задачи</span>
            </div>
            <hr />
            <div className="menegDevice">
              <div className="leftDev">
                <span>Отключить оборудование</span>
                <select>
                  <option>Выполнено</option>
                  <option>В работе</option>
                  <option>Выполнено</option>
                </select>
              </div>
              <div className="rightDev">
                <img src="img2/photo.png" alt="" />
                <img src="img2/pdf.png" alt="" />
              </div>
            </div>
            <hr />
            <div className="menegDevice">
              <div className="leftDev">
                <span>Провести осмотр оборудования</span>
                <select>
                  <option>Выполнено</option>
                  <option>В работе</option>
                  <option>Выполнено</option>
                </select>
              </div>
              <div className="rightDev">
                <img src="img2/photo.png" alt="" />
                <img src="img2/pdf.png" alt="" />
              </div>
            </div>
            <hr />
            <div className="menegDevice">
              <div className="leftDev">
                <span>Устранить неисправность</span>
                <select>
                  <option>Выполнено</option>
                  <option>В работе</option>
                  <option>Выполнено</option>
                </select>
              </div>
              <div className="rightDev">
                <img src="img2/photo.png" alt="" />
                <img src="img2/pdf.png" alt="" />
              </div>
            </div>
            <hr />
            <div className="menegDevice">
              <div className="leftDev">
                <span>Включить оборудование</span>
                <select>
                  <option>Выполнено</option>
                  <option>В работе</option>
                  <option>Выполнено</option>
                </select>
              </div>
              <div className="rightDev">
                <img src="img2/photo.png" alt="" />
                <img src="img2/pdf.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="vertBlockRight">
          <div className="blockR1">
            <div className="addExpenses">
              <img src="img2/r1.png" alt="" />
              <span>Допонительные затраты</span>
            </div>
            <hr />
            <div className="add">
              <span onClick={ this.clickHandler }>+ добавить</span>
            </div>
          </div>
          <div className="blockR1">
            <div className="addExpenses">
              <img src="img2/r2.png" alt="" />
              <span>Запчасти и МТР</span>
            </div>
            <hr />
            <div className="add">
              <span>+ добавить</span>
            </div>
          </div>
          <div className="mapRight">
            <div className="headMap">
              <span>Положение на карте</span>
            </div>
            <div className="yandex">
              <YMaps className="yandex"
                enterprise
                query={ {
                  apikey: 'eca0c5df-75ba-45fe-ba73-e6ee6cb6d453',
                } }

              >
                <Map state={ { center: [55.751574, 37.573856], zoom: 10 } }
                  height={ '180px' }
                  width={ '370px' }
                >
                  <GeoObject
                    geometry={ {
                      type: 'Point',
                      coordinates: [55.7, 37.7],
                    } }

                    options={ {
                      iconLayout: 'default#image',
                      iconImageHref: 'img2/point1.png',
                      iconImageSize: [30, 42],
                      iconImageOffset: [-3, -42],

                    } }
                  />

                </Map>
              </YMaps>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default SecondPage;
