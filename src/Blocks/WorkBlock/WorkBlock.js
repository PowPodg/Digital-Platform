import React, { Component } from 'react';
import './WorkBlock.css'

class WorkBlock extends Component {

    onSecondPageHandler = ( event, paramSecPage ) => {
        event.preventDefault();
        this.props.SecondPageHandler( paramSecPage );
    }

    renderButtons () {
        /*This data set is shown as an example - in a real application, these data are taken from back-end */
        const params = [
            {
                completeDate: '05.10.2019',
                numTask: '00007',
                status: 'Выполнено',
                img: "img/checkBox.png",
                nameWork: 'Течь тубы в здании - устранить',
                priority: 'Высший',
                background: '#eb5757',
                executor: 'Бригада номер 1',
                object: 'Задание номер 1'
            },
            {
                completeDate: '06.10.2019',
                numTask: '00009',
                status: 'Выполнено',
                img: "img/statusWork.png",
                nameWork: 'Вибрация мотора',
                priority: 'Средний',
                background: '#f49948',
                executor: 'Бригада номер 2',
                object: 'Задание номер 2'
            },
            {
                completeDate: '05.10.2019',
                numTask: '000011',
                status: 'Просрочено',
                img: "img/timeOut.png",
                nameWork: 'Течь тубы в здании - устранить',
                priority: 'Нормальный',
                background: '#f2c94d',
                executor: 'Бригада номер 1',
                object: 'Задание номер 1'
            },
            {
                completeDate: '05.10.2019',
                numTask: '00007',
                status: 'Выполнено',
                img: "img/checkBox.png",
                nameWork: 'Течь тубы в здании - устранить',
                priority: 'Высший',
                background: '#eb5757',
                executor: 'Бригада номер 1',
                object: 'Задание номер 1'
            },
            {
                completeDate: '05.10.2019',
                numTask: '000011',
                status: 'Просрочено',
                img: "img/timeOut.png",
                nameWork: 'Течь тубы в здании - устранить',
                priority: 'Нормальный',
                background: '#f2c94d',
                executor: 'Бригада номер 1',
                object: 'Задание номер 1'
            },
            {
                completeDate: '05.10.2019',
                numTask: '000011',
                status: 'Просрочено',
                img: "img/timeOut.png",
                nameWork: 'Течь тубы в здании - устранить',
                priority: 'Нормальный',
                background: '#f2c94d',
                executor: 'Бригада номер 1',
                object: 'Задание номер 1'
            },
            {
                completeDate: '06.10.2019',
                numTask: '00009',
                status: 'Выполнено',
                img: "img/statusWork.png",
                nameWork: 'Вибрация мотора',
                priority: 'Средний',
                background: '#f49948',
                executor: 'Бригада номер 2',
                object: 'Задание номер 2'
            },
            {
                completeDate: '05.10.2019',
                numTask: '00007',
                status: 'Выполнено',
                img: "img/checkBox.png",
                nameWork: 'Течь тубы в здании - устранить',
                priority: 'Высший',
                background: '#eb5757',
                executor: 'Бригада номер 1',
                object: 'Задание номер 1'
            },
        ]

        return params.map( ( param, i ) => {
            let par = {
                background: param.background,
                priority: param.priority,
                executor: param.executor
            }

            return (
                <button key={ i }
                    onClick={ ( event ) => { this.onSecondPageHandler( event, par ) } }>
                    <div className="data">
                        { param.completeDate }
                    </div>
                    <div className="numTask">
                        { param.numTask }
                    </div>
                    <div className="status">
                        <img src={ param.img } alt="" />
                        <span>{ param.status }</span>
                    </div>
                    <div className="nameWork">
                        <span>{ param.nameWork }</span>
                    </div>
                    <div className="priorityLabel"
                        style={ { background: param.background } }>
                        <span>{ param.priority }</span>
                    </div>
                    <div className="numBrig">
                        <img src="img/overPerson.png" alt="" />
                        <span>{ param.executor }</span>
                    </div>
                    <div className="object">
                        { param.object }
                    </div>
                </button>
            )
        } )
    }

    render () {
        return (
            <div className="placeWork">
                <div className="workBlock" >
                    { this.renderButtons() }
                </div>
            </div>
        );
    }
}

export default WorkBlock;
