/**
 * 最终版：无蹦出+流畅过渡
 * 核心：用.active类触发动画，无需修改display，过渡100%生效
 */
function initAnimation() {
  // 1. 获取所有行元素
  const lines = [
    document.getElementById('line1'),
    document.getElementById('line2'),
    document.getElementById('line3'),
    document.getElementById('line4')
  ];

  // 2. 逐行添加active类触发动画
  function animateLine(line, delay) {
    if (!line) return;
    setTimeout(() => {
      line.classList.add('active'); // 仅添加active类，过渡自动生效
      
      // 可选：动画完成后移除.text类（如需彻底摆脱初始样式）
      // setTimeout(() => line.classList.remove('text'), 500);
    }, delay);
  }

  // 3. 触发动画（间隔0.2s，速度快）
  animateLine(lines[0], 0);   // line1：立即
  animateLine(lines[1], 200); // line2：0.2s后
  animateLine(lines[2], 400); // line3：0.4s后
  animateLine(lines[3], 600); // line4：0.6s后
}

// 等待DOM加载完成执行
window.addEventListener('DOMContentLoaded', initAnimation);

// 兜底
window.addEventListener('load', () => {
  const line1 = document.getElementById('line1');
  if (line1 && !line1.classList.contains('active')) {
    initAnimation();
  }
});