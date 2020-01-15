import React, {Component} from 'react'

//Images
import steve from './Steve-McKay.jpeg'
import steveSign from './sign.png'
import Regform from "../TopSection/Regform/Regform";

export default class BottomSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currYear: ''
        }
    }

    getCurrentYear() {
        let currYear = new Date().getFullYear();
        this.setState({
            currYear: currYear,
        })
    }

    componentDidMount() {
        this.getCurrentYear()
    }

    render() {
        let languageManager = this.props.languageManager();

        return (
            <section className="BottomSection">

                <section className="about">
                    <div className="container xxl">
                        <div className="wrapper-flex">
                            <div className="img">
                                <img src={steve} alt=""/>
                            </div>
                            <div className="description">
                                <h3>
                                    <strong>{languageManager.about_title}</strong>
                                </h3>
                                <p>
                                    <span className="blue">{languageManager.about_description[0]}</span><br/>
                                    {languageManager.about_description[1]}<br/><br/>
                                    {languageManager.about_description[2]}<br/><br/>
                                    {languageManager.about_description[3]}<br/>
                                    {languageManager.about_description[4]}<br/>
                                    {languageManager.about_description[5]}
                                </p>
                                <div className="steve-sign">
                                    <img src={steveSign} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="get-access-form">
                    <div className="container">
                        <Regform {...this.props} />
                    </div>
                </section>

                <footer>
                    <div className="container">
                        <h4>&copy; {languageManager.copyright}{this.state.currYear}</h4>
                        <p>
                            {languageManager.copyright_info}
                        </p>
                    </div>
                </footer>

            </section>

        )
    }
}
