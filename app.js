        lucide.createIcons();

        const products = [
            { id: 1, name: 'Website Company Profile Basic', price: 2500000, category: 'Web Development', packageType: 'Basic', rating: 4.8, reviews: 120, image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format&fit=crop', newArrival: true, trending: true, images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop', 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop', 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop'], features: ['1 Halaman Utama', 'Desain Responsif', 'Revisi 2 Kali', 'Hosting 1 Tahun Gratis'] },
            { id: 2, name: 'Toko Online Standard', price: 5500000, category: 'Web Development', packageType: 'Standard', rating: 4.9, reviews: 85, image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=500&auto=format&fit=crop', trending: true, images: ['https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop', 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=800&auto=format&fit=crop', 'https://images.unsplash.com/photo-1556740749-887f6717defa?q=80&w=800&auto=format&fit=crop'], features: ['Katalog Produk 50 Item', 'Sistem Pembayaran (Payment Gateway)', 'Dashboard Admin', 'Revisi 3 Kali'] },
            { id: 3, name: 'Aplikasi Web Custom Premium', price: 15000000, category: 'Web Development', packageType: 'Premium', rating: 5.0, reviews: 210, image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=500&auto=format&fit=crop', trending: true, images: ['https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop', 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=800&auto=format&fit=crop', 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop'], features: ['Pengembangan Fullstack', 'Arsitektur Scalable', 'Integrasi API External', 'Support Maintenance 3 Bulan'] },
            { id: 4, name: 'Manajemen Instagram Basic', price: 1500000, category: 'Social Media', packageType: 'Basic', rating: 4.7, reviews: 350, image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=500&auto=format&fit=crop', newArrival: true, images: ['https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop', 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop', 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=800&auto=format&fit=crop'], features: ['12 Feed Post per Bulan', 'Desain Grafis Standar', 'Riset Hashtag', 'Laporan Bulanan'] },
            { id: 5, name: 'Sosmed Branding Standard', price: 3000000, category: 'Social Media', packageType: 'Standard', rating: 4.8, reviews: 95, image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=500&auto=format&fit=crop', trending: true, images: ['https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=800&auto=format&fit=crop', 'https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=800&auto=format&fit=crop', 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=800&auto=format&fit=crop'], features: ['20 Feed Post + 5 Reels', 'Manajemen Interaksi (Balas Komen)', 'Desain Premium', 'Copywriting Engaging'] },
            { id: 6, name: 'Iklan Meta (FB & IG) Basic', price: 2000000, category: 'Digital Marketing', packageType: 'Basic', rating: 4.5, reviews: 60, image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=500&auto=format&fit=crop', newArrival: true, images: ['https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop', 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800&auto=format&fit=crop', 'https://images.unsplash.com/photo-1611162617263-44306c5291aa?q=80&w=800&auto=format&fit=crop'], features: ['Setup Kampanye Iklan', 'Targeting Audience', 'Budgeting & Bidding', 'Belum termasuk Saldo Iklan'] },
            { id: 7, name: 'SEO Optimalisasi Standard', price: 4000000, category: 'SEO', packageType: 'Standard', rating: 4.9, reviews: 150, image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=500&auto=format&fit=crop', trending: true, images: ['https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=800&auto=format&fit=crop', 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=800&auto=format&fit=crop', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'], features: ['Audit SEO Website', 'Optimasi On-Page', 'Riset Keyword Kompetitif', 'Laporan Kenaikan Ranking'] },
            { id: 8, name: 'Brand Identity Premium', price: 7500000, category: 'Social Media', packageType: 'Premium', rating: 5.0, reviews: 77, image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=500&auto=format&fit=crop', newArrival: true, images: ['https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop', 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop', 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800&auto=format&fit=crop'], features: ['Pembuatan Logo Eksklusif', 'Guidelines Visual Brand', 'Desain Kartu Nama & Kop Surat', 'Aset Sosmed (Highlight, Cover)'] },
        ];

        const categories = [
            { name: 'Web Development', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=500&auto=format&fit=crop' },
            { name: 'Digital Marketing', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=500&auto=format&fit=crop' },
            { name: 'Social Media', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=500&auto=format&fit=crop' },
            { name: 'SEO', image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=500&auto=format&fit=crop' },
        ];

        let cart = [];

        function renderProductCard(product) {
            return `
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group transition-transform transform hover:-translate-y-2 flex flex-col">
                <div class="zoom-container relative">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover cursor-pointer" onclick="navigateTo('product-detail', ${product.id})">
                    <div class="absolute top-3 left-3 bg-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        ${product.category}
                    </div>
                </div>
                <div class="p-4 flex flex-col flex-grow">
                    <h3 class="font-bold text-lg text-gray-800 dark:text-gray-100 mb-1 flex-grow">${product.name}</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">Paket: ${product.packageType}</p>
                    <div class="flex justify-between items-center mb-4">
                        <p class="text-xl font-bold text-black dark:text-white">Rp${product.price.toLocaleString('id-ID')}</p>
                        <div class="flex items-center">
                            <i data-lucide="star" class="w-4 h-4 text-yellow-500 fill-current"></i>
                            <span class="text-sm ml-1 text-gray-600 dark:text-gray-400">${product.rating}</span>
                        </div>
                    </div>
                    <button class="w-full bg-black text-white py-2 rounded-md hover:bg-black transition font-medium" onclick="addToCart(${product.id})">Tambahkan ke Pesanan</button>
                </div>
            </div>
        `;
        }

        function renderProducts(productsToRender) {
            const productGrid = document.getElementById('product-grid');
            if(productGrid) {
                productGrid.innerHTML = productsToRender.map(renderProductCard).join('');
                lucide.createIcons();
            }
        }

        function renderCategories() {
            const categoryGrid = document.getElementById('category-grid');
            if(categoryGrid) {
                categoryGrid.innerHTML = categories.map(cat => `
                <div class="text-center group cursor-pointer" onclick="navigateTo('products', { category: '${cat.name}' })">
                    <div class="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden shadow-lg transform transition group-hover:scale-105 border-4 border-transparent group-hover:border-black">
                        <img src="${cat.image}" alt="${cat.name}" class="w-full h-full object-cover">
                    </div>
                    <h3 class="mt-4 font-semibold text-lg text-gray-800 dark:text-gray-100 group-hover:text-black dark:group-hover:text-[#ffffff] transition-colors">${cat.name}</h3>
                </div>
            `).join('');
            }
        }

        function renderCarousels() {
            const newArrivalsCarousel = document.getElementById('new-arrivals-carousel');
            const trendingCarousel = document.getElementById('trending-carousel');
            const newArrivals = products.filter(p => p.newArrival);
            const trending = products.filter(p => p.trending);

            if(newArrivalsCarousel) newArrivalsCarousel.innerHTML = newArrivals.map(p => `<div class="carousel-item">${renderProductCard(p)}</div>`).join('');
            if(trendingCarousel) trendingCarousel.innerHTML = trending.map(p => `<div class="carousel-item">${renderProductCard(p)}</div>`).join('');
            lucide.createIcons();
        }

        function renderProductDetail(productId) {
            const product = products.find(p => p.id === productId);
            const content = document.getElementById('product-detail-content');
            if (!product) {
                content.innerHTML = `<p>Layanan tidak ditemukan.</p>`;
                return;
            }
            content.innerHTML = `
            <div class="flex flex-col gap-4">
                 <div class="aspect-w-16 aspect-h-9">
                    <img id="main-product-image" src="${product.images[0]}" alt="${product.name}" class="w-full h-96 object-cover rounded-xl shadow-lg">
                </div>
                <div class="grid grid-cols-3 gap-4">
                    ${product.images.map((img, index) => `
                        <img src="${img}" alt="Thumbnail ${index + 1}" class="w-full h-24 object-cover rounded-md cursor-pointer border-2 hover:border-black transition ${index === 0 ? 'border-black' : 'border-transparent'}" onclick="changeMainImage('${img}', this)">
                    `).join('')}
                </div>
            </div>
            <div>
                <div class="inline-block bg-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                    ${product.category}
                </div>
                <h1 class="text-4xl font-bold mb-4 text-gray-900 dark:text-white">${product.name}</h1>
                <div class="flex items-center mb-6">
                    <div class="flex text-yellow-500">
                        ${[...Array(5)].map((_, i) => `<i data-lucide="star" class="w-5 h-5 ${i < Math.round(product.rating) ? 'fill-current' : ''}"></i>`).join('')}
                    </div>
                    <span class="ml-2 text-gray-600 dark:text-gray-400">(${product.reviews} ulasan klien)</span>
                </div>
                <p class="text-4xl font-bold text-black dark:text-white mb-6">Rp${product.price.toLocaleString('id-ID')}</p>
                <p class="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">Tingkatkan performa bisnis digital Anda dengan layanan ${product.name}. Tim profesional kami siap membantu Anda mencapai target yang diinginkan dengan strategi terbukti dan hasil maksimal.</p>

                <div class="mb-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <h3 class="font-bold text-xl mb-4 text-gray-900 dark:text-white">Fitur Paket ${product.packageType}:</h3>
                    <ul class="space-y-3">
                        ${product.features.map(feature => `
                            <li class="flex items-start">
                                <i data-lucide="check-circle" class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"></i>
                                <span class="text-gray-700 dark:text-gray-300">${feature}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>

                <div class="flex flex-col sm:flex-row gap-4">
                     <button class="flex-1 bg-black text-white py-4 rounded-lg text-lg font-bold hover:bg-black shadow-lg transition-transform transform hover:-translate-y-1" onclick="addToCart(${product.id})">Tambahkan ke Pesanan</button>
                     <button class="flex-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-4 rounded-lg text-lg font-bold hover:bg-gray-800 dark:hover:bg-gray-100 shadow-lg transition-transform transform hover:-translate-y-1" onclick="buyNow(${product.id})">Pesan Sekarang</button>
                </div>
            </div>
        `;
            lucide.createIcons();
        }

        function renderCart() {
            const cartContent = document.getElementById('cart-content');
            if (cart.length === 0) {
                cartContent.innerHTML = `
                <div class="text-center py-16">
                    <i data-lucide="shopping-bag" class="mx-auto h-24 w-24 text-gray-400"></i>
                    <h2 class="mt-6 text-2xl font-semibold">Daftar Pesanan Anda Kosong</h2>
                    <p class="mt-2 text-gray-500">Anda belum memilih layanan apapun.</p>
                    <button class="mt-6 bg-black text-white px-8 py-3 rounded-full hover:bg-black text-lg font-medium shadow-lg transition-transform transform hover:scale-105" onclick="navigateTo('products')">Jelajahi Layanan</button>
                </div>
            `;
                lucide.createIcons();
                return;
            }

            const cartItemsHTML = cart.map(item => {
                const product = products.find(p => p.id === item.id);
                return `
                <div class="flex items-center gap-4 sm:gap-6 border-b border-gray-200 dark:border-gray-700 py-6">
                    <img src="${product.image}" alt="${product.name}" class="w-24 h-24 object-cover rounded-lg shadow-sm">
                    <div class="flex-grow">
                        <h3 class="font-bold text-lg text-gray-900 dark:text-white">${product.name}</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-2">Rp${product.price.toLocaleString('id-ID')}</p>
                         <button class="text-red-500 text-sm hover:text-red-600 font-medium flex items-center transition-colors" onclick="removeFromCart(${item.id})">
                            <i data-lucide="trash-2" class="w-4 h-4 mr-1"></i> Hapus
                         </button>
                    </div>
                    <div class="flex items-center gap-2">
                        <button class="w-8 h-8 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center transition-colors" onclick="updateQuantity(${item.id}, ${item.quantity - 1})"><i data-lucide="minus" class="w-4 h-4"></i></button>
                        <span class="w-8 text-center font-semibold text-gray-900 dark:text-white">${item.quantity}</span>
                        <button class="w-8 h-8 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center transition-colors" onclick="updateQuantity(${item.id}, ${item.quantity + 1})"><i data-lucide="plus" class="w-4 h-4"></i></button>
                    </div>
                    <p class="font-bold w-32 text-right hidden sm:block text-black dark:text-white text-lg">Rp${(product.price * item.quantity).toLocaleString('id-ID')}</p>
                </div>
            `;
            }).join('');

            const subtotal = cart.reduce((sum, item) => {
                const product = products.find(p => p.id === item.id);
                return sum + product.price * item.quantity;
            }, 0);

            cartContent.innerHTML = `
            <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                ${cartItemsHTML}
                <div class="mt-8 text-right">
                    <p class="text-xl text-gray-600 dark:text-gray-400">Total Estimasi: <span class="font-bold text-3xl ml-3 text-gray-900 dark:text-white">Rp${subtotal.toLocaleString('id-ID')}</span></p>
                    <p class="text-sm text-gray-500 mt-2">Harga belum termasuk PPN 11% (Dihitung saat checkout)</p>
                    <button class="mt-6 bg-black text-white py-4 px-10 rounded-lg text-lg font-bold hover:bg-[#333333] shadow-lg transition-transform transform hover:-translate-y-1" onclick="navigateTo('checkout')">Lanjut ke Checkout</button>
                </div>
            </div>
        `;
            lucide.createIcons();
        }

        function renderCheckoutSummary() {
            const summaryDiv = document.getElementById('checkout-summary');
            const totalPriceEl = document.getElementById('checkout-total-price');

            if(!summaryDiv) return;

            const subtotal = cart.reduce((sum, item) => {
                const product = products.find(p => p.id === item.id);
                return sum + product.price * item.quantity;
            }, 0);

            const tax = subtotal * 0.11;
            const total = subtotal + tax;

            summaryDiv.innerHTML = cart.map(item => {
                const product = products.find(p => p.id === item.id);
                return `
                 <div class="flex justify-between items-center py-2">
                    <span class="text-gray-700 dark:text-gray-300 font-medium">${product.name} <span class="text-sm text-gray-500">(×${item.quantity})</span></span>
                    <span class="font-semibold">Rp${(product.price * item.quantity).toLocaleString('id-ID')}</span>
                </div>
            `;
            }).join('') + `
                <div class="border-t border-gray-200 dark:border-gray-700 mt-4 pt-4 flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>Subtotal</span>
                    <span>Rp${subtotal.toLocaleString('id-ID')}</span>
                </div>
                <div class="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
                    <span>PPN (11%)</span>
                    <span>Rp${tax.toLocaleString('id-ID')}</span>
                </div>
            `;

            totalPriceEl.textContent = `Rp${total.toLocaleString('id-ID')}`;
        }

        function addToCart(productId) {
            const existingItem = cart.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ id: productId, quantity: 1 });
            }
            updateCartCount();
            showToast(`Layanan berhasil ditambahkan!`);
        }

        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCartCount();
            renderCart();
        }

        function updateQuantity(productId, quantity) {
            if (quantity < 1) {
                removeFromCart(productId);
                return;
            }
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity = quantity;
            }
            updateCartCount();
            renderCart();
        }

        function updateCartCount() {
            const cartCount = document.getElementById('cart-count');
            if(!cartCount) return;
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
            cartCount.classList.toggle('hidden', totalItems === 0);
        }

        function buyNow(productId) {
            addToCart(productId);
            navigateTo('checkout');
        }

        const pages = document.querySelectorAll('.page');
        const spinner = document.getElementById('loading-spinner');

        function navigateTo(pageId, data) {
            const targetPage = document.getElementById(`${pageId}-page`);
            const isAlreadyOnPage = targetPage && !targetPage.classList.contains('hidden');

            if (isAlreadyOnPage && typeof data === 'string' && data.startsWith('#')) {
                const element = document.querySelector(data);
                if (element) {
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerOffset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
                const mobileMenu = document.getElementById('mobile-menu');
                if(mobileMenu) mobileMenu.classList.add('hidden');
                return;
            }

            if(spinner) spinner.style.display = 'flex';

            setTimeout(() => {
                pages.forEach(page => page.classList.add('hidden'));
                if (targetPage) {
                    targetPage.classList.remove('hidden');
                    window.scrollTo(0, 0);
                }

                if (pageId === 'home' && typeof data === 'string' && data.startsWith('#')) { 
                    const element = document.querySelector(data);
                    if (element) {
                        const headerOffset = 80;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.scrollY - headerOffset;
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth"
                        });
                    }
                }

                if (pageId === 'products') {
                    renderProducts(products);
                    if (data && data.category) {
                        const catFilter = document.getElementById('filter-category');
                        if(catFilter) {
                            catFilter.value = data.category;
                            applyFilters();
                        }
                    }
                } else if (pageId === 'product-detail') {
                    renderProductDetail(data);
                } else if (pageId === 'cart') {
                    renderCart();
                } else if (pageId === 'checkout') {
                    renderCheckoutSummary();
                }

                const mobileMenu = document.getElementById('mobile-menu');
                if(mobileMenu) mobileMenu.classList.add('hidden');

                if(spinner) spinner.style.display = 'none';
            }, 300);
        }

        function applyFilters() {
            const categoryEl = document.getElementById('filter-category');
            const packageEl = document.getElementById('filter-package');

            if(!categoryEl || !packageEl) return;

            const category = categoryEl.value;
            const packageType = packageEl.value;

            let filteredProducts = products.filter(p => {
                const categoryMatch = category === 'all' || p.category === category;
                const packageMatch = packageType === 'all' || p.packageType === packageType;
                return categoryMatch && packageMatch;
            });

            applySorting(filteredProducts);
        }

        function applySorting(productsToSort) {
            const sortEl = document.getElementById('sort-products');
            if(!sortEl) return;
            const sortValue = sortEl.value;

            if (sortValue === 'price-asc') {
                productsToSort.sort((a, b) => a.price - b.price);
            } else if (sortValue === 'price-desc') {
                productsToSort.sort((a, b) => b.price - a.price);
            } else {
                productsToSort.sort((a, b) => (b.rating * b.reviews) - (a.rating * a.reviews));
            }

            renderProducts(productsToSort);
        }

        function placeOrder() {
            const form = document.getElementById('checkout-form');
            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }
            const modal = document.getElementById('success-modal');
            if(modal) modal.classList.remove('hidden');
            cart = [];
            updateCartCount();
        }

        function closeModal() {
            const modal = document.getElementById('success-modal');
            if(modal) modal.classList.add('hidden');
            navigateTo('home');
        }

        document.addEventListener('DOMContentLoaded', () => {
            renderCategories();
            renderCarousels();
            updateCartCount();

            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            if(mobileMenuButton && mobileMenu) {
                mobileMenuButton.addEventListener('click', () => {
                    mobileMenu.classList.toggle('hidden');
                });
            }

            setupCarousel('new-arrivals-carousel', 'prev-btn-new', 'next-btn-new');
            setupCarousel('trending-carousel', 'prev-btn-trending', 'next-btn-trending');

            const filterCategory = document.getElementById('filter-category');
            const filterPackage = document.getElementById('filter-package');
            const sortProducts = document.getElementById('sort-products');

            if(filterCategory) filterCategory.addEventListener('change', applyFilters);
            if(filterPackage) filterPackage.addEventListener('change', applyFilters);
            if(sortProducts) sortProducts.addEventListener('change', applyFilters);

            if(spinner) setTimeout(() => spinner.style.display = 'none', 500);
        });

        function setupCarousel(carouselId, prevId, nextId) {
            const carousel = document.getElementById(carouselId);
            const prevBtn = document.getElementById(prevId);
            const nextBtn = document.getElementById(nextId);
            if (!carousel || !prevBtn || !nextBtn) return;

            nextBtn.addEventListener('click', () => {
                carousel.scrollBy({ left: carousel.clientWidth * 0.8, behavior: 'smooth' });
            });

            prevBtn.addEventListener('click', () => {
                carousel.scrollBy({ left: -carousel.clientWidth * 0.8, behavior: 'smooth' });
            });
        }

        function showToast(message) {
            const toast = document.createElement('div');
            toast.textContent = message;
            toast.className = 'fixed bottom-5 right-5 bg-green-500 text-white px-6 py-3 rounded-lg shadow-xl transform translate-y-20 opacity-0 transition-all duration-300 font-medium z-50 flex items-center';
            toast.innerHTML = `<i data-lucide="check-circle" class="w-5 h-5 mr-2"></i> ${message}`;
            document.body.appendChild(toast);
            lucide.createIcons({root: toast});

            setTimeout(() => {
                toast.classList.remove('translate-y-20', 'opacity-0');
            }, 10);

            setTimeout(() => {
                toast.classList.add('translate-y-20', 'opacity-0');
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }

        function changeMainImage(newSrc, thumbElement) {
            const mainImg = document.getElementById('main-product-image');
            if(mainImg) mainImg.src = newSrc;

            const thumbnails = document.querySelectorAll('#product-detail-content img.cursor-pointer');
            thumbnails.forEach(thumb => thumb.classList.replace('border-black', 'border-transparent'));
            thumbElement.classList.replace('border-transparent', 'border-black');
        }

        const themeToggle = document.getElementById('theme-toggle');
        const htmlEl = document.documentElement;

        const savedTheme = localStorage.getItem('theme') || 'light';
        htmlEl.classList.toggle('dark', savedTheme === 'dark');

        if(themeToggle) {
            themeToggle.addEventListener('click', () => {
                htmlEl.classList.toggle('dark');
                const isDark = htmlEl.classList.contains('dark');
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
            });
        }