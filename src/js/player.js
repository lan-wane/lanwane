// 等待DOM完全加载后执行
document.addEventListener('DOMContentLoaded', function() {
    // 获取核心元素
    const toggleBtn = document.getElementById('toggleBtn');
    const playerContainer = document.querySelector('.player');
    
    // 1. 核心：初始状态直接设为关闭（closed）
    let isPlayerOpen = false;
    
    // 动画时长（与CSS中的--player-animation-duration保持一致）
    const playerAnimationDuration = 0.3; 
    const animationDelay = playerAnimationDuration * 1000;

    // 2. 初始化：直接设置关闭态样式 + 提示文本（无动画、无过渡）
    initClosedState();

    // 3. 绑定点击事件（切换逻辑）
    toggleBtn.addEventListener('click', function() {
        if (isPlayerOpen) {
            closePlayer(); // 展开 → 关闭
        } else {
            openPlayer();  // 关闭 → 展开
        }
    });

    /**
     * 初始化关闭状态（页面加载直接生效，无动画）
     */
    function initClosedState() {
        // 播放器容器：添加closed类，移除open类
        playerContainer.classList.add('player--closed');
        playerContainer.classList.remove('player--open');
        // 切换按钮：添加旋转类（右箭头），设置提示文本
        toggleBtn.classList.add('rotated');
        toggleBtn.setAttribute('title', toggleBtn.dataset.tooltipOpen);
    }

    /**
     * 更新提示文本（根据状态同步）
     */
    function updateTooltipText() {
        const tooltipText = isPlayerOpen 
            ? toggleBtn.dataset.tooltipClose 
            : toggleBtn.dataset.tooltipOpen;
        toggleBtn.setAttribute('title', tooltipText);
    }

    /**
     * 关闭播放器（带动画）
     */
    function closePlayer() {
        // 触发关闭动画
        playerContainer.classList.remove('player--open');
        playerContainer.classList.add('player--closed');
        // 旋转图标为右箭头
        toggleBtn.classList.add('rotated');
        
        // 动画结束后更新状态 + 同步提示文本
        setTimeout(() => {
            isPlayerOpen = false;
            updateTooltipText();
        }, animationDelay);
    }

    /**
     * 打开播放器（带动画）
     */
    function openPlayer() {
        // 触发打开动画
        playerContainer.classList.remove('player--closed');
        playerContainer.classList.add('player--open');
        // 恢复图标为左箭头
        toggleBtn.classList.remove('rotated');
        
        // 动画结束后更新状态 + 同步提示文本
        setTimeout(() => {
            isPlayerOpen = true;
            updateTooltipText();
        }, animationDelay);
    }
});