import React, {Component} from 'react';
import {Repository} from "../repository/repository";

class FarGalaxy extends Component {
    dataRepository = new Repository();
    constructor(props) {
        super(props);
        this.state =
            {
                isLoading: true,
                chapter: '',
                opening: ''
            };
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        const ch = sessionStorage.getItem('chapter');
        const opening_crawl = sessionStorage.getItem('opening_crawl');
        if(opening_crawl)
            this.setState({...this.state, isLoading: false, chapter: ch, opening: opening_crawl});
        else {
            const chapter = await this.dataRepository.getChapter();
            const opening = await this.dataRepository.getOpeningCrawl();
            sessionStorage.setItem('chapter', chapter);
            sessionStorage.setItem('opening_crawl', opening);
            this.setState({...this.state, isLoading: false, chapter: chapter, opening: opening});
        }
    }

    render() {
        if (this.state.isLoading)
            return <div>Loading...</div>;
        else
            return (
                <p>Chapter: {this.state.chapter}<br/>{this.state.opening}</p>
            );
    }
}

export default FarGalaxy;