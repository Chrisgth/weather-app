import { dataprocessor } from "./dataprocessor"
import displayData from "./displayData"
export default function search() {
    const searchbtn = document.getElementById('search')
    const input = document.getElementById('location')

    searchbtn.addEventListener('click', async () => {
        const processedData = await dataprocessor(input.value)
        displayData(processedData);
    })
}