import Api from "../data/api";
export class Repository {
    getOpeningCrawl = async () => {
        const responseData = await Api.getRandomChapter();
        console.log(responseData);
        const opening = await responseData.opening_crawl;
        return opening;
    }

    getChapter = async () => {
        const responseData = await Api.getRandomChapter();
        const chapter = await responseData.id;
        return chapter;
    }
}