import React, {Component} from 'react'

//Gallery Image
import cars from './images/cars.jpg'
import cars2 from './images/cars2.jpg'
import jet from './images/privatejet.jpg'
import yacht from './images/yacht.jpg'
import skiing from './images/skiing.jpg'
import euros from './images/euros.jpg'
import pool from './images/pool.jpg'
import nusret from './images/gols-steak.jpg'
import system from './images/system.jpg'

export default class Gallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imgIndex: 0,
            images: {
                cars,
                cars2,
                jet,
                yacht,
                skiing,
                euros,
                pool,
                nusret,
                system,
            }
        }
    }

    componentDidMount() {
        let counter = 0,
            interval = setInterval(()=>{
            let random = Math.floor(Math.random() * 9)
            this.setState({
                imgIndex: random
            });
            counter++
            if (counter >= 6) clearInterval(interval)
            }, 4000)
    }

    render() {
        let languageManager = this.props.languageManager();

        return (
            <div className="Gallery">
                <div className="heading">
                    <h4>{languageManager.gallery_title}</h4>
                    <div className="image-list">
                        <div className="item">
                            <img src={this.state.images[languageManager.gallery_images[this.state.imgIndex+1].img]} alt=""/>
                        </div>
                        <div className="item">
                            <img src={this.state.images[languageManager.gallery_images[this.state.imgIndex].img]} alt=""/>
                        </div>
                        <div className="item">
                            <img src={this.state.images[languageManager.gallery_images[this.state.imgIndex+2].img]} alt=""/>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
