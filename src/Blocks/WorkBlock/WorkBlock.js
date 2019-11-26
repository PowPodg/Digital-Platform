import React, { Component } from 'react';
import './WorkBlock.css'

class WorkBlock extends Component {
    
    render () {
        return (
            <div className="placeWork">
                <div className="workBlock" >
                    <button onClick={this.props.SecondPageHandler }>
                        <div className="data">
                            05.10.2019
                        </div>
                        <div className="numTask">
                            00007
                        </div>
                        <div className="status">
                            <img src="img/checkBox.png" alt="" />
                            <span>Выполнено</span>
                        </div>
                        <div className="nameWork">
                            <span>Течь тубы в здании - устранить</span>
                        </div>
                        <div className="priorityLabel">
                            <span>Высший</span>
                        </div>
                        <div className="numBrig">
                            <img src="img/overPerson.png" alt="" />
                            <span>Бригада номер 1</span>
                        </div>
                        <div className="object">
                            Задание номер 1
                        </div>
                    </button>
                    <button>
                        <div className="data">
                            06.10.2019
                        </div>
                        <div className="numTask">
                            00009
                        </div>
                        <div className="status">
                            <img src="img/statusWork.png" alt="" />
                            <span>Выполнено</span>
                        </div>
                        <div className="nameWork">
                            <span>Вибрация мотора</span>
                        </div>
                        <div className="priorityLabel"
                            style={ { background: '#f49948' } }>
                            <span>Средний</span>
                        </div>
                        <div className="numBrig">
                            <img src="img/overPerson.png" alt="" />
                            <span>Бригада номер 2</span>
                        </div>
                        <div className="object">
                            Задание номер 2
                        </div>
                    </button>
                    <button>
                        <div className="data">
                            05.10.2019
                        </div>
                        <div className="numTask">
                            00011
                        </div>
                        <div className="status">
                            <img src="img/timeOut.png" alt="" />
                            <span style={ { fontSize: '1.1em, font-weight: bold' } }>Просрочено</span>
                        </div>
                        <div className="nameWork">
                            <span>Течь тубы в здании - устранить</span>
                        </div>
                        <div className="priorityLabel"
                            style={ { background: '#f2c94d' } } >
                            <span>Средний</span>
                        </div>
                        <div className="numBrig">
                            <img src="img/overPerson.png" alt="" />
                            <span>Бригада номер 1</span>
                        </div>
                        <div className="object">
                            Задание номер 1
                        </div>
                    </button>
                    <button>
                        <div className="data">
                            05.10.2019
                        </div>
                        <div className="numTask">
                            00007
                        </div>
                        <div className="status">
                            <img src="img/checkBox.png" alt="" />
                            <span>Выполнено</span>
                        </div>
                        <div className="nameWork">
                            <span>Течь тубы в здании - устранить</span>
                        </div>
                        <div className="priorityLabel">
                            <span>Высший</span>
                        </div>
                        <div className="numBrig">
                            <img src="img/overPerson.png" alt="" />
                            <span>Бригада номер 1</span>
                        </div>
                        <div className="object">
                            Задание номер 1
                        </div>
                    </button>
                    <button>
                        <div className="data">
                            06.10.2019
                        </div>
                        <div className="numTask">
                            00009
                        </div>
                        <div className="status">
                            <img src="img/statusWork.png" alt="" />
                            <span>Выполнено</span>
                        </div>
                        <div className="nameWork">
                            <span>Вибрация мотора</span>
                        </div>
                        <div className="priorityLabel"
                            style={ { background: '#f49948' } }>
                            <span>Средний</span>
                        </div>
                        <div className="numBrig">
                            <img src="img/overPerson.png" alt="" />
                            <span>Бригада номер 2</span>
                        </div>
                        <div className="object">
                            Задание номер 2
                        </div>
                    </button>
                    <button>
                        <div className="data">
                            05.10.2019
                        </div>
                        <div className="numTask">
                            00011
                        </div>
                        <div className="status">
                            <img src="img/timeOut.png" alt="" />
                            <span style={ { fontSize: '1.1em, font-weight: bold' } }>Просрочено</span>
                        </div>
                        <div className="nameWork">
                            <span>Течь тубы в здании - устранить</span>
                        </div>
                        <div className="priorityLabel"
                            style={ { background: '#f2c94d' } } >
                            <span>Средний</span>
                        </div>
                        <div className="numBrig">
                            <img src="img/overPerson.png" alt="" />
                            <span>Бригада номер 1</span>
                        </div>
                        <div className="object">
                            Задание номер 1
                        </div>
                    </button>
                    <button>
                        <div className="data">
                            05.10.2019
                        </div>
                        <div className="numTask">
                            00011
                        </div>
                        <div className="status">
                            <img src="img/timeOut.png" alt="" />
                            <span style={ { fontSize: '1.1em, font-weight: bold' } }>Просрочено</span>
                        </div>
                        <div className="nameWork">
                            <span>Течь тубы в здании - устранить</span>
                        </div>
                        <div className="priorityLabel"
                            style={ { background: '#f2c94d' } } >
                            <span>Средний</span>
                        </div>
                        <div className="numBrig">
                            <img src="img/overPerson.png" alt="" />
                            <span>Бригада номер 1</span>
                        </div>
                        <div className="object">
                            Задание номер 1
                        </div>
                    </button>
                </div>
            </div>
        );
    }
}

export default WorkBlock;
