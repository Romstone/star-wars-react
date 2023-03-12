import {swBaseUrl, searchUrl, key} from "../utils/constants";

export default class Api
{
    static getRandomChapter = async () =>
    {
        const random = Math.ceil(Math.random() * 6);
        const response = await fetch(`${swBaseUrl}/films/${random}`);
        return response.json();
    }
    static getPerson = async (id) =>
    {
        const response = await fetch(`${swBaseUrl}/peoples/${id}`);
        return response.json();
    }
    static getPicture = async (pic) =>
    {
        const response = await fetch(`${searchUrl}key=${key}&cx=c21b0625b060b48c0&gl=us&q=${pic}`);
        return response.json();
    }
    static getPlanets = async () =>
    {
        const response = await fetch(`${swBaseUrl}/planets`);
        return response.json();
    }
}