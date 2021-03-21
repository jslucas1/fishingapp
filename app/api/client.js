import cache from '../utility/cache';

const getData = async ({URL, cacheKey, setData}) => {
    fetch(URL)
        .then(res => res.json())
        .then(json => {
            cache.store(cacheKey, json);
            const resultData = {
                "resultOK": true,
                ...json
            }
            setData(resultData);
    }).catch((e) => {
        const data = cache.get(cacheKey);
        return {
            "resultOK": false,
            ...data
        }
    });
}

export default getData;