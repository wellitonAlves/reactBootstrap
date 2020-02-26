import React, { Component } from 'react';
import HomeCard from '../ui/HomeCard';
import {hashHistory} from 'react-router';

class Home extends Component {


    homeCardRelease = {
        title:'Release',
        text:'Manager Release',
        action: () => hashHistory.push('/release')
    }
    homeCardBacklog= {
        title:'Backlog',
        text:'Manager Backlog',
        action: () => hashHistory.push('/backlog')
    }
    homeCardSprints= {
        title:'Sprints',
        text:'Manager Sprints',
        action: () => hashHistory.push('/sprint')
    }
    


    render() {
        return (
            <div className="container text-center">
                <div className="row">
                    <HomeCard {...this.homeCardBacklog}/>
                    <HomeCard {...this.homeCardRelease}/>
                    <HomeCard {...this.homeCardSprints}/>
                </div>
            </div>

        )
    }

}
export default Home;