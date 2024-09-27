function showAnimation(product) {
    product.style.transition = 'transform 0.5s';
    product.style.transform = 'scale(1.1)';
    setTimeout(() => {
        product.style.transform = 'scale(1)';
    }, 500);
}
