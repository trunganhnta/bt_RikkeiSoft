
var datas = []
async function getData(){
    const res = await fetch('https://randomuser.me/api/')
    datas = await res.json()
    showData(datas.results)
    console.log(datas.results[0].name)
}
function showData(data){
    const content = data.map(() => (
        `
        <h2>Fullname : ${data[0].name.first} ${data[0].name.title} ${data[0].name.last}</h2>
        <h2>Email : ${data[0].email}</h2>
        <h2>DateOfBirth : ${data[0].dob.date}</h2>
        <h2>Location : ${data[0].location.street.number}, ${data[0].location.street.name}, ${data[0].location.city}, ${data[0].location.country}</h2>
        <h2>PhoneNumber : ${data[0].phone}</h2>
        `
    )
    )
    document.querySelector('#content').innerHTML = content
}
getData()
