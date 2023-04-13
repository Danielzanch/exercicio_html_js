const form = document.getElementById('cont_geral');
const num1 = document.getElementById('valor_1');
const num2 = document.getElementById('valor_2');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const result = num1.value < num2.value
    const msg_estoque = `No estoque possui mais unidades desse item.`;
    const msg_sem_estoque = `O valor digitado esta acima do limite do estoque, compre mais para abastecer o estoque.`;

    if (result) {
        const cont_sucesso = document.querySelector('.msg_1');
        cont_sucesso.innerHTML = msg_estoque
        cont_sucesso.style.display = 'block';

        num1.value = '';
    }

    else {
        const cont_sucesso = document.querySelector('.msg_2');
        cont_sucesso.innerHTML = msg_sem_estoque
        cont_sucesso.style.display = 'block';
        num1.value = '';        
    }

    if (result) {
        const cont_sucesso = document.querySelector('.msg_2');
        cont_sucesso.innerHTML = msg_estoque
        cont_sucesso.style.display = 'none';
    }

    else {
        const cont_sucesso = document.querySelector('.msg_1');
        cont_sucesso.innerHTML = msg_sem_estoque
        cont_sucesso.style.display = 'none';        
    }
})

