import axios from 'axios';

export function covid19API() {
    return {
        getSupportedCountries,
        getLatestReportForLocation
    }

    async function getSupportedCountries() {
        try {
            const response = await axios({
                method: 'GET',
                url:'https://covid19api20200327232446.azurewebsites.net/api/covid19/locations',
            });
            if(response.status === 200) {
                return response.data
            }    
        } catch (error) {
            throw new Error(error)
        }   
    }

    async function getLatestReportForLocation(country) {
        try {
            const response = await axios({
                method: 'GET',
                url:'https://covid19api20200327232446.azurewebsites.net/api/covid19/latest',
                params: { country }
            });
            if(response.status === 200) {
                return response.data
            }    
        } catch (error) {
            
        }
    }
    

}