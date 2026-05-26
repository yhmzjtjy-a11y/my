// 简单的交互效果
document.addEventListener('DOMContentLoaded', function() {
    // 工具卡片点击效果
    const toolCards = document.querySelectorAll('.tool-card');
    toolCards.forEach(card => {
        card.addEventListener('click', function() {
            const toolName = this.querySelector('.tool-name').innerText;
            alert(`「${toolName}」正在开发中，即将上线！`);
        });
    });

    // CTA按钮点击
    const ctaBtn = document.querySelector('.cta .btn-primary');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', function() {
            alert('感谢您的关注！注册功能即将开放。');
        });
    }

    // 订阅按钮
    const subscribeBtns = document.querySelectorAll('.pricing-card .btn-primary');
    subscribeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('订阅功能即将上线，敬请期待！');
        });
    });

    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 12, 41, 0.98)';
        } else {
            navbar.style.background = 'rgba(15, 12, 41, 0.95)';
        }
    });
});