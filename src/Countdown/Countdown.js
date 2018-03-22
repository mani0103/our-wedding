import React, { Component } from 'react';
import './Countdown.css';
import LocalizedText from '../Translations/LocalizedText'

const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

class Countdown extends Component {
    constructor(props) {
        super(props);

        this.tick = this.tick.bind(this);

        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
    }
    componentWillMount(){
        this.tick();
    }

    componentDidMount(){
        this.timer = setInterval(this.tick, second);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    tick() {
        const weddingDate = new Date('Jul 7, 2018 16:00:00').getTime(),
              now = new Date().getTime();
        const distance = weddingDate - now;
        this.setState({
            days: Math.floor(distance / (day)),
            hours: Math.floor((distance % (day)) / (hour)),
            minutes: Math.floor((distance % (hour)) / (minute)),
            seconds: Math.floor((distance % (minute)) / second),
        });
    }

    render(){
        //console.log(this.props)
        return(        
            <div class="container">
                <h1 id="head"><LocalizedText stringUN='countdownToOurWedding' {...this.props}/></h1>
                <ul className='countdown'>
                    <li><span id="days">{this.state.days}</span><LocalizedText stringUN='days' {...this.props}/></li>
                    <li><span id="hours">{this.state.hours}</span><LocalizedText stringUN='hours' {...this.props}/></li>
                    <li><span id="minutes">{this.state.minutes}</span><LocalizedText stringUN='minutes' {...this.props}/></li>
                    <li><span id="seconds">{this.state.seconds}</span><LocalizedText stringUN='seconds' {...this.props}/></li>
                </ul>
            </div>
        )

    }
}

export default Countdown;