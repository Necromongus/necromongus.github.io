const fb = document.querySelector('img[data-original="https://static.tildacdn.com/tild6264-6462-4134-a362-386234376662/facebook-logo.png"]');
const vk = document.querySelector('img[data-original="https://static.tildacdn.com/tild6534-6137-4334-b039-636138393039/vk-social-network-lo.png"]');
const ig = document.querySelector('img[data-original="https://static.tildacdn.com/tild3132-3837-4138-a335-626637633330/instagram-logo.png"]');

fb.addEventListener('mouseover', fbMouseOver);
fb.addEventListener('mouseout', fbMouseOut);
vk.addEventListener('mouseover', vkMouseOver);
vk.addEventListener('mouseout', vkMouseOut);
ig.addEventListener('mouseover', igMouseOver);
ig.addEventListener('mouseout', igMouseOut);

function fbMouseOver() {
    console.log('enter');
    this.src = "https://facebookbrand.com/wp-content/themes/fb-branding/assets/images/fb-logo.png?v2";
}

function fbMouseOut() {
    console.log('leave');
    this.src = "https://static.tildacdn.com/tild6264-6462-4134-a362-386234376662/facebook-logo.png";
}

function vkMouseOver() {
    console.log('enter');
    this.src = "http://pngimg.com/uploads/vkontakte/vkontakte_PNG24.png";
}

function vkMouseOut() {
    console.log('leave');
    this.src = "https://static.tildacdn.com/tild6534-6137-4334-b039-636138393039/vk-social-network-lo.png";
}

function igMouseOver() {
    console.log('enter');
    this.src = "https://hire10.net/wp-content/uploads/2019/01/IG-logo-.png";
}

function igMouseOut() {
    console.log('leave');
    this.src = "https://static.tildacdn.com/tild3132-3837-4138-a335-626637633330/instagram-logo.png";
}