function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('sidebar-active');
}
let pratoCount = 1;

function updateTotal() {
    const selects = document.querySelectorAll('.pratos');
    let total = 0;

    selects.forEach(select => {
        const selectedOption = select.options[select.selectedIndex];
        const price = selectedOption ? parseFloat(selectedOption.getAttribute('data-preco')) : 0;
        total += price;
    });

    document.getElementById('total').textContent = `R$${total.toFixed(2)}`;
}

function addPrato() {
    pratoCount++;
    const container = document.getElementById('pratos-container');
    const newPrato = document.createElement('div');
    newPrato.classList.add('field', 'prato-item');
    newPrato.innerHTML = `
        <label for="pratos-${pratoCount}">Seleção de Pratos:</label>
        <select class="input-field pratos" name="pratos[]" required>
            <option value="" disabled selected>Selecione um prato</option>
            <optgroup label="Pratos">
                <option value="feijoada" data-preco="15">Feijoada - R$15,00</option>
                <option value="arroz" data-preco="17">Arroz Carreteiro - R$17,00</option>
                <option value="moqueca" data-preco="28">Moqueca de Peixe - R$28,00</option>
                <option value="tacaca" data-preco="14">Tacacá - R$14,00</option>
                <option value="frango" data-preco="22">Frango com Quiabo - R$22,00</option>
            </optgroup>
            <optgroup label="Salgados">
                <option value="chipa" data-preco="10">Porção de Chipa - R$10,00</option>
                <option value="pastel" data-preco="10">Pastel de Carne - R$10,00</option>
                <option value="coxinha" data-preco="8">Coxinha - R$8,00</option>
                <option value="empadao" data-preco="12">Fatia de Empadão - R$12,00</option>
                <option value="pao" data-preco="3">Pão de Queijo - R$3,00</option>
                <option value="torta" data-preco="7">Fatia de Torta Salgada - R$7,50</option>
            </optgroup>
            <optgroup label="Sobremesas">
                <option value="rolo" data-preco="10">Fatia de Bolo de Rolo - R$10,00</option>
                <option value="pudim" data-preco="5">Fatia de Pudim - R$5,00</option>
                <option value="fuba" data-preco="4">Fatia de Bolo de Fubá - R$4,00</option>
                <option value="bolinho" data-preco="10">Porção de Bolinho de Chuva - R$10,00</option>
                <option value="pave" data-preco="12">Fatia de Pavê - R$12,00</option>
                <option value="milkshake" data-preco="24">Copo 700ml de Milkshake - R$24,00</option>
            </optgroup>
            <optgroup label="Bebidas">
                <option value="agua" data-preco="6">Garrafa 1,5L de Água - R$6,00</option>
                <option value="cocacola" data-preco="12">Garrafa 2,0L de Coca-Cola Zero - R$12,00</option>
                <option value="caldo" data-preco="6.50">Copo 500ml de Caldo de Cana - R$6,50</option>
                <option value="sprite" data-preco="10">Garrafa 2,0L de Sprite - R$10,00</option>
                <option value="fanta" data-preco="11">Garrafa 2,0L de Fanta Uva - R$11,00</option>
                <option value="limonada" data-preco="8">Jarra de Limonada Suiça - R$8,00</option>
            </optgroup>
        </select>
        <span class="remove-btn" onclick="removePrato(this)">X</span>
    `;
    container.appendChild(newPrato);
    updateTotal();
}

function removePrato(button) {
    button.parentElement.remove();
    updateTotal();
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('pratos-container').addEventListener('change', updateTotal);
});

