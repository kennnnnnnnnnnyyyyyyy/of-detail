// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取tab按钮和面板
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    // 为每个tab按钮添加点击事件
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            switchTab(targetTab);
        });
    });
    
    // 切换tab函数
    function switchTab(targetTab) {
        // 移除所有active类
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanels.forEach(panel => panel.classList.remove('active'));
        
        // 添加active类到目标元素
        document.querySelector(`[data-tab="${targetTab}"]`).classList.add('active');
        document.getElementById(`${targetTab}-tab`).classList.add('active');
    }
    
    // 隐藏Manus悬浮标的函数
    function hideManusBadge() {
        // 查找右下角的悬浮标
        const links = document.querySelectorAll('a[href*="manus.space"]');
        links.forEach(link => {
            if (link.textContent.includes('Made with Manus')) {
                link.style.display = 'none !important';
            }
        });
    }
    
    // 延迟执行隐藏函数
    setTimeout(hideManusBadge, 1000);
    setTimeout(hideManusBadge, 3000);
});;

