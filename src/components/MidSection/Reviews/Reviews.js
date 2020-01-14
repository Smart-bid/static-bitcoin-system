import React, {Component} from 'react'

//Images
import Joey from './images/joey.jpg'
import Laura from './images/laura.jpg'
import Lewis from './images/lewis.jpg'
import Paulo from './images/paulo.jpg'
import Chris from './images/chris.jpg'
import Daniel from './images/daniel.jpg'
import Magda from './images/magda.jpg'
import Carl from './images/carl.jpg'

export default class Reviews extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: {
                Joey,
                Laura,
                Lewis,
                Paulo,
                Chris,
                Daniel,
                Magda,
                Carl
            }
        }
    }

    render() {
        let languageManager = this.props.languageManager();

        return(
            <section className="Reviews">
                <div className="container">
                    <h3 className="section-heading">
                        {languageManager.reviews_title}
                    </h3>
                    <div className="wrapper-flex">
                        {
                            languageManager.reviews_list.map((item,i)=>{
                                return(
                                    <div className="review-item" key={i}>
                                        <div className="heading">
                                            <img src={this.state.images[item.img]} alt=""/>
                                            <h4>
                                                {item.name}
                                            </h4>
                                        </div>
                                        <div className="descr">
                                            <p>{item.descr}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}