import { dataprocessor } from "./dataprocessor"
import displayData from "./displayData"
export default function search(pageloader) {

    if(pageloader) {
        async function init() {
            const pageLoadLocation = await dataprocessor('Vilnius')
            displayData(pageLoadLocation)
            console.log(pageLoadLocation)
        }
        init();
    }

    const searchbtn = document.getElementById('search')
    const input = document.getElementById('location')

    searchbtn.addEventListener('click', async () => {
        const processedData = await dataprocessor(input.value)
        displayData(processedData);
    })
}