import  React from 'react'
import  { SkiDayList }  from './SkiDayList'
import  { SkiDayCount }  from './SkiDayCount'
import { AddDayForm } from './AddDayFormStateless'
import { Menu } from './Menu'

var createReactClass = require('create-react-class');

export class App extends React.Component {
//export const App = createReactClass({

    constructor(props) {
        super(props);
        this.state = {
            allSkiDays:  [
                {
                    resort: "Squaw Valley",
                    date: "1/1/2018",
                    powder: true,
                    backcountry: false
                },
                // {
                //     resort: "Kirkwood",
                //     date: new Date("12/20/2017"),
                //     powder: false,
                //     backcountry: false
                // },
                // {
                //     resort: "Mt Tallac",
                //     date: new Date("08/28/2016"),
                //     powder: false,
                //     backcountry: true
                // }
            ]
        }
        this.addDay = this.addDay.bind(this);
    }

    addDay(newDay) {
        this.setState({
            allSkiDays: [
                ...this.state.allSkiDays,
                newDay
            ]
        });
    }

    countDays(filter) {
        const { allSkiDays } = this.state;
        return allSkiDays.filter((day) => filter ? day[filter] : day).length
    }

    render() {
        return (
            <div className="app">
            <Menu />
            {
                (this.props.location.pathname === "/") ? 

                <SkiDayCount total={this.countDays()}
                    backcountry={this.countDays("backcountry")}
                    powder={this.countDays("powder")}/>
                    :
            
                    (this.props.location.pathname === "/add-day") ?
                    <AddDayForm onNewDay={this.addDay}/> :
                    <SkiDayList days={this.state.allSkiDays }  filter={ this.props.match.params.filter} />
            }
                
            </div>
        )
    }
}
//)
