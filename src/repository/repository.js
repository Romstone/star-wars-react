import Api from "../data/api";
export class Repository
{
    getOpeningCrawl = async () =>
    {
        const responseData = await Api.getRandomChapter();
        console.log(responseData);
        const opening = await responseData.opening_crawl;
        return opening;
    }

    getChapter = async () =>
    {
        const responseData = await Api.getRandomChapter();
        const chapter = await responseData.id;
        return chapter;
    }

    getPerson = async (id) =>
    {
        const responseData = await Api.getPerson(id);
        return responseData;
    }

    getPicture = async (pic) =>
    {
        if (pic === 'Obi-Wan Kenobi')
        {
            const responseData = await Api.getPicture(pic);
            const picture = await responseData.items[1].pagemap.cse_thumbnail[0].src;
            return picture;
        }
        else
        {
            const responseData = await Api.getPicture(pic);
            const picture = await responseData.items[0].pagemap.cse_thumbnail[0].src;
            return picture;
        }
    }

    getPlanets = async () =>
    {
        const responseData = await Api.getPlanets();
        return responseData;
    }
}