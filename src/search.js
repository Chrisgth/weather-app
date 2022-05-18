import { dataprocessor } from "./dataprocessor"
export default function search() {
    const searchbtn = document.getElementById('search')
    const input = document.getElementById('location')

    let procSearchData = 0

    searchbtn.addEventListener('click', async () => {
        procSearchData = await dataprocessor(input.value)
        console.log(procSearchData)
    })
}