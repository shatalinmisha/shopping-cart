const conteinerEl = document.querySelector('.conteiner');
const pushBtnEl = document.querySelector('.pushBtn');

const basketProducts = ['Яблоко', 'Книга', 'Макароны', 'Кофе', 'Арбуз', 'Сахар', 'Молоко'];


function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function renderList(arr) {
    listEl.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        const liEl = document.createElement('li');
        liEl.classList.add('item');
        liEl.textContent = `${i + 1}) ${arr[i]}`;
        listEl.append(liEl);
    }
}

const result = sort(basketProducts);

const listEl = document.createElement('ul');
listEl.classList.add('list');
conteinerEl.append(listEl)
renderList(result);


pushBtnEl.onclick = function () {
    const newProducts = prompt('Введите название товара');

    if (newProducts === '') {
        alert('Название товара не введено!');
    } else {
        basketProducts.push(newProducts);
    }
    const result = sort(basketProducts);
    renderList(result);
}

