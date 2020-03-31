const API_URL = 'https://economia.awesomeapi.com.br/all'

export const doGet = () => {
    return fetch(API_URL).then(response => response.json())
}