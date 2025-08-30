// Mostrar/Ocultar carrito
const carrito = document.getElementById('carrito');
const carritoBtn = document.createElement('button');
carritoBtn.textContent = "🛒";
carritoBtn.classList.add('btn');
carritoBtn.style.position = "fixed";
carritoBtn.style.top = "20px";
carritoBtn.style.right = "20px";
carritoBtn.onclick = () => carrito.classList.toggle('abierto');
document.body.appendChild(carritoBtn);

// Manejo de carrito
let items = [];
const carritoItems = document.getElementById('carrito-items');
const totalEl = document.getElementById('total');

document.querySelectorAll('.agregar-carrito').forEach(btn => {
    btn.addEventListener('click', () => {
        const nombre = btn.dataset.nombre;
        const precio = parseInt(btn.dataset.precio);
        items.push({ nombre, precio });
        actualizarCarrito();
    });
});

function actualizarCarrito() {
    carritoItems.innerHTML = '';
    let total = 0;
    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio}`;
        carritoItems.appendChild(li);
        total += item.precio;
    });
    totalEl.textContent = `Total: $${total}`;
}

// Simulación de envío de pedido
document.getElementById('pedido-form').addEventListener('submit', e => {
    e.preventDefault();
    alert("✅ Gracias por tu compra, te contactaremos pronto.");
    items = [];
    actualizarCarrito();
    carrito.classList.remove('abierto');
});
