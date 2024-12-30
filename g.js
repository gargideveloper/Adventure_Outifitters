
            function connectPayPal() {
                alert('Redirecting to PayPal connection page...');
            }

            function toggleCart() {
                const cart = document.getElementById('cart');
                cart.classList.toggle('active');
            }

            const imageSets = {
                'suitcase': ['suitcase1.jpg', 'suitcase2.jpg', 'suitcase3.jpg'],
                'waterbottle': ['waterbottle1.jpg', 'waterbottle2.jpg', 'waterbottle3.jpg'],
                'shoes': ['shoes1.jpg', 'shoes2.jpg', 'shoes3.jpg'],
                'shoesw': ['shoesw1.jpg', 'shoesw2.jpg', 'shoesw3.jpg'],
                'backpack': ['backpack1.jpg', 'backpack2.jpg', 'backpack3.jpg'],
                'soaks': ['soaks.jpg', 'soaks2.jpg', 'soaks3.jpg'],
                'slippers': ['slippers1.jpg','slippers2.jpg','slippers3.jpg'],
                'stick': ['stick1.jpg','stick2.jpg','stick3.jpg'],
                'wheelchair': ['wheelchair1.jpg','wheelchair2.jpg','wheelchair3.jpg']
            };

            function nextImage(button) {
                const product = button.closest('.product');
                const imgElement = product.querySelector('.product-image');
                const productKey = imgElement.alt.toLowerCase().replace(/ /g, '-');
                const images = imageSets[productKey];
                let index = images.indexOf(imgElement.src.split('/').pop());
                index = (index + 1) % images.length;
                imgElement.src = images[index];
            }

            function prevImage(button) {
                const product = button.closest('.product');
                const imgElement = product.querySelector('.product-image');
                const productKey = imgElement.alt.toLowerCase().replace(/ /g, '-');
                const images = imageSets[productKey];
                let index = images.indexOf(imgElement.src.split('/').pop());
                index = (index - 1 + images.length) % images.length;
                imgElement.src = images[index];
            }
        