import axios from 'axios'
export function newsApi() {
    return {
        getLatestNews,
    }

    async function getLatestNews(query) {
        try {
            const response = await axios({
                method: 'GET',
                url:'https://covid19api20200327232446.azurewebsites.net/api/covid19/news',
                params: { query }
            });
            if(response.status === 200) {
                return response.data
            }    
        } catch (error) {
            throw new Error(error)
        }
    }
}