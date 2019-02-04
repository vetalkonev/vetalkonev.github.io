let list_item = document.querySelectorAll('.tabs__item');
let tab_content = document.querySelectorAll('.tabs-content');

for (let i = 0; i < list_item.length; i++) {
    list_item[i].onclick = function () {
        document.querySelector('.tabs__item.active').classList.remove('active');
        this.classList.add('active');
        document.querySelector('.tabs-content.active').classList.remove('active');
        tab_content[i].classList.add('active');
    }
}

