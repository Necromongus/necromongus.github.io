const fb = document.querySelector('img[data-original="https://static.tildacdn.com/tild6264-6462-4134-a362-386234376662/facebook-logo.png"]');
const vk = document.querySelector('img[data-original="https://static.tildacdn.com/tild6534-6137-4334-b039-636138393039/vk-social-network-lo.png"]');
const ig = document.querySelector('img[data-original="https://static.tildacdn.com/tild3132-3837-4138-a335-626637633330/instagram-logo.png"]');

const cfb = document.querySelector('img[data-original="https://static.tildacdn.com/tild3336-3464-4535-a532-636530656433/facebook-logo_2.png"]');
const cvk = document.querySelector('img[data-original="https://static.tildacdn.com/tild3164-3061-4736-b032-376534633262/vk-social-network-lo.png"]');
const cig = document.querySelector('img[data-original="https://static.tildacdn.com/tild3739-3565-4833-a539-346235363739/instagram_1.png"]');

cfb.style="display:none";
cvk.style="display:none";
cig.style="display:none";

fb.addEventListener('mouseover', fbMouseOver);
fb.addEventListener('mouseout', fbMouseOut);
vk.addEventListener('mouseover', vkMouseOver);
vk.addEventListener('mouseout', vkMouseOut);
ig.addEventListener('mouseover', igMouseOver);
ig.addEventListener('mouseout', igMouseOut);

function fbMouseOver() {
    console.log('enter');
    this.src = "https://static.tildacdn.com/tild3336-3464-4535-a532-636530656433/facebook-logo_2.png";
}

function fbMouseOut() {
    console.log('leave');
    this.src = "https://static.tildacdn.com/tild6264-6462-4134-a362-386234376662/facebook-logo.png";
}

function vkMouseOver() {
    console.log('enter');
    this.src = "https://static.tildacdn.com/tild3164-3061-4736-b032-376534633262/vk-social-network-lo.png";
}

function vkMouseOut() {
    console.log('leave');
    this.src = "https://static.tildacdn.com/tild6534-6137-4334-b039-636138393039/vk-social-network-lo.png";
}

function igMouseOver() {
    console.log('enter');
    this.src = "https://static.tildacdn.com/tild3739-3565-4833-a539-346235363739/instagram_1.png";
}

function igMouseOut() {
    console.log('leave');
    this.src = "https://static.tildacdn.com/tild3132-3837-4138-a335-626637633330/instagram-logo.png";
}