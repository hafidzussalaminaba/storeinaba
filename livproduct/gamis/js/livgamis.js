const products = [
    {
        title: "Gamis Kurtah Kain Toyobo Dewasa Abu Abu",
        price: "Rp 125.000",
        image: "../../assets/gamis/kurtah1.jpeg",
        link: "../../../../produk/gamiskurtah/kurtah1/kurtah1.html"
    },
    {
        title: "Gamis Kurtah Kain Toyobo Dewasa Silver",
        price: "Rp 125.000",
        image: "../../assets/gamis/kurtah2.jpeg",
        link: "../../../../produk/gamiskurtah/kurtah2/kurtah2.html"
    },
    {
        title: "Gamis Kurtah Kain Toyobo Dewasa Biru Dongker",
        price: "Rp 125.000",
        image: "../../assets/gamis/kurtah3.jpeg",
        link: "../../../../produk/gamiskurtah/kurtah3/kurtah3.html"
    },
    {
        title: "Gamis Kurtah Kain Toyobo Dewasa Hitam",
        price: "Rp 125.000",
        image: "../../assets/gamis/kurtah4.jpeg",
        link: "../../../../produk/gamiskurtah/kurtah4/kurtah4.html"
    },
    {
        title: "Gamis Kurtah Kain Toyobo Dewasa Kuning kunyit",
        price: "Rp 125.000",
        image: "../../assets/gamis/kurtah5.jpeg",
        link: "../../../../produk/gamiskurtah/kurtah5/kurtah5.html"
    },
    {
        title: "Gamis Kurtah Kain Toyobo Dewasa Moca",
        price: "Rp 125.000",
        image: "../../assets/gamis/kurtah6.jpeg",
        link: "../../../../produk/gamiskurtah/kurtah6/kurtah6.html"
    },
    {
        title: "Gamis Kurtah Kain Toyobo Dewasa Sage",
        price: "Rp 125.000",
        image: "../../assets/gamis/kurtah7.jpeg",
        link: "../../../../produk/gamiskurtah/kurtah7/kurtah7.html"
    },
    {
        title: "Gamis Kurtah Kain Toyobo Dewasa Merah Marun",
        price: "Rp 125.000",
        image: "../../assets/gamis/kurtah8.jpeg",
        link: "../../../../produk/gamiskurtah/kurtah8/kurtah8.html"
    }
];

function displayProducts(filteredProducts) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    if (filteredProducts.length === 0) {
        productList.innerHTML = '<div style="grid-column:1/-1;text-align:center;color:#aaa;">Produk tidak ditemukan.</div>';
        return;
    }
    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <div class="product-title">${product.title}</div>
            <div class="product-price">${product.price}</div>
        `;
        // Event click diarahkan ke link masing-masing
        if (product.link) {
            card.style.cursor = "pointer";
            card.addEventListener('click', function() {
                window.location.href = product.link;
            });
        }
        productList.appendChild(card);
    });
}

function normalize(str) {
    return str.toLowerCase().replace(/\s+/g, '');
}

function searchProducts() {
    const query = normalize(document.getElementById('searchInput').value);
    const filtered = products.filter(p => normalize(p.title).includes(query));
    displayProducts(filtered);
}

// Tampilkan semua produk saat halaman dibuka
displayProducts(products);

// Enter key support
document.getElementById('searchInput').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') searchProducts();
});