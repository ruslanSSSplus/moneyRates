export const getCourses = () => {
    return fetch('https://www.cbr-xml-daily.ru/daily_json.js', {
        method: 'GET', 
    }).then(response => response.json())
        .then(response => response.Valute)
}