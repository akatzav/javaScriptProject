
const searchInput = document.getElementById("input")
const arr = [];
const output = document.getElementById('output');
const output1 = document.getElementById('output1');

searchInput.addEventListener('keyup', (e) => {
    const seartchString = e.target.value;
    const filtera = arr.filter((a) => {
        return (
            a.includes(seartchString)
        );
    })

    output1.innerHTML = filtera.join(`<br>`);
    console.log(filtera); 
    output1.style.display = 'block';
    output.style.display = 'none';

    if (searchInput.value === "") {
        output1.style.display = "none";
    }
    sort.output = '';
})

document.getElementById('btn1').onclick = function () {

    let found = arr.find(e => e === searchInput.value);
    console.log(found);
    if (found === undefined) {
        arr.push(searchInput.value)
    }
    else
        return arr;
    console.log(arr);

    searchInput.value = '';
    output.innerHTML = "";
}

let anyBtn = document.getElementById('anyBtn');

const sort = document.getElementById('btn2');
sort.addEventListener('click', () => {
    arr.sort();
    output1.style.display = "none";
    output.style.display = 'block';
    searchInput.value = '';
    arr.forEach(e => {

        output.innerHTML += `<button id="anyBtn" style="width:200px;border:none;padding:5px;background:white;cursor:pointer;margin:7px"><a>${e}</a></button><br>`;
    })
})
sort.output = '';


