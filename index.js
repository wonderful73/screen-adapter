/*
 * @params uiWidth 设计稿的尺寸宽度
 * @description 通过比较设计稿和屏幕的尺寸，改变 <html /> 标签的 font-size 大小
 */ 

export default function adapter (uiWidth) {
  const docEl = document.documentElement;
  const fixedWidth = uiWidth / 2;
  let screenWidth = 0;
  screenWidth = docEl.clientWidth ? docEl.clientWidth : window.screen.width;

  // 假如屏幕分辨率宽度大于设计稿宽度，则使用设计稿宽度
  screenWidth = screenWidth > uiWidth ? uiWidth : screenWidth;

  const fontSize = (screenWidth / fixedWidth) * 20;
  docEl.style.fontSize = fontSize + 'px';
}