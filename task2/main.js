const btn = document.querySelector('.j-btn-test');

btn.addEventListener('click', () => {
  const windowHeight = document.documentElement.clientHeight;
  const windowWidth = document.documentElement.clientWidth;
  
  alert(`Ширина экрана ${windowWidth} пикселей, Высота экрана ${windowHeight} пикселей`)
})