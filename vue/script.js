// 1. Создать кнопку "Перевернуть". При клике на кнопку текст кнопки, должен перевернуться и отобразиться в обратном порядке.
// 2. есть список элементов. Пользователь может добавлять новые элементы списка с текстом “Новый элемент списка” нажав на кнопку "Добавить".
// * При клике на элемент списка он должен быть удален. (по желанию)

const myFirstHomeWork = {
    data() {
        return {
            btnText: 'Перевернуть',
            btn2Text: 'Добавить',
            elementText: 'Новый элемент списка'
        }
    },
    methods: {
        reverseBtnText() {
            const text = document.querySelector('.btn').textContent;
            let array = text.split('');
            array = array.reverse();
            result = array.join('');
            document.querySelector('.btn').textContent = result;
        },

        addElementUl(elementText) {
            const ulEl = document.querySelector('.list');
            const liEl = document.createElement('li');
            liEl.textContent = elementText;
            ulEl.appendChild(liEl);
            this.deleteElement();
        },

        deleteElement() {
            const listElements = document.querySelectorAll('li');
            listElements.forEach(element => {
                element.addEventListener('click', function (e) {
                    if (element.parentNode) {
                        element.parentNode.removeChild(element);
                    }
                });
            });
        }

    },
}

Vue.createApp(myFirstHomeWork).mount('#app');