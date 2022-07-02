const dataSet = JSON.parse(data);
const tableSearch = document.getElementById('search-input')
const btn = document.getElementById('search-btn')

tableSearch.addEventListener('keydown', function(){
    let value = document.getElementById('search-input').value


    const filterDataSet = dataSet.filter(function(data) {
        value = value.toLowerCase()
   
        return data.first_name.toLowerCase().includes(value) ||
            data.last_name.toLowerCase().includes(value) ||
            data.bvn.includes(value) ||
            data.avaliable_balance.toString().includes(value) ||
            data.account_opened_at.includes(value) 
    })
    loadTable(filterDataSet)
})

// TODO: Implement Search
// TODO: Implement: Sort

loadTable(dataSet)

function loadTable(dataSet){
    const tableData = document.getElementById('tableData')
    let dataHtml = '';

    for (let data of dataSet){
        dataHtml += `
        <tr>
            <td>${data._id}</td>
            <td>${data.first_name}</td>
            <td>${data.last_name}</td>
            <td>${data.bvn}</td>
            <td>${data.account_opened_at}</td>
            <td>${data.avaliable_balance}</td>
            <td>${data.status}</td>
        </tr>`
    }
    tableData.innerHTML = dataHtml;

}

const arrow = document.getElementById('arrow')



arrow.addEventListener('click', filterByFirstName)


function filterByFirstName(){
    const sortData = dataSet.sort(function(name1, name2) {
    const nameA = name1.first_name
    const nameB = name2.first_name
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
        return 0
    })
    loadTable(sortData)

}
const accountOpened = document.getElementById('open')

accountOpened.addEventListener('click', filterByAccountOpen)
function filterByAccountOpen(){
    const sortDataByDateOpened = dataSet.sort(function(name1, name2) {
    const nameA = name1.account_opened_at
    const nameB = name2.account_opened_at
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
        return 0
    })
    loadTable(sortDataByDateOpened)
}