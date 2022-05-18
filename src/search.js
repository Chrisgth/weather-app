import { dataprocessor } from "./dataprocessor"
export default function search() {
    const searchbtn = document.getElementById('search')
    const input = document.getElementById('location')

    searchbtn.addEventListener('click', () => {
       let data = dataprocessor(input.value)
       console.log(data)
    })
}