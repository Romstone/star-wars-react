import React, {Component} from 'react';
import {Repository} from "../repository/repository";

class FarGalaxy extends Component {
    dataRepository = new Repository();
    constructor(props) {
        super(props);
        this.state =
            {
                chapter: '',
                opening: ''
            };
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        const chapter = await this.dataRepository.getChapter();
        const opening = await this.dataRepository.getOpeningCrawl();
        this.setState({...this.state, chapter: chapter, opening: opening});
    }

    render() {
        return (
            <p>Chapter: {this.state.chapter}<br/>{this.state.opening}</p>
        );
    }
}

export default FarGalaxy;