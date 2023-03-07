export default class Api {
    static getRandomChapter = async () => {
        const random = Math.ceil(Math.random() * 6);
        const response = await fetch(`https://sw-info-api.herokuapp.com/v1/films/${random}`);
        return response.json();
    }
}