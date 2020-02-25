import React, { Component } from 'react';
import HomeCard from '../ui/HomeCard'

class Home extends Component {


    homeCardRelease = {
        title:'Release',
        text:'Manager Release',
        action: () => alert('release click')
    }
    homeCardBacklog= {
        title:'Backlog',
        text:'Manager Backlog',
        action: () => alert('Backlog click')
    }
    homeCardSprints= {
        title:'Sprints',
        text:'Manager Sprints',
        action: () => alert('Sprints click')
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