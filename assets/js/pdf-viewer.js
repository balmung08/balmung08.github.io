function changeCategory(category) {
    // 移除所有按钮的激活状态
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    
    // 激活当前按钮
    event.target.classList.add('active');
    
    // 隐藏所有文档组
    document.querySelectorAll('.doc-group').forEach(group => {
        group.classList.remove('active');
    });
    
    // 显示选中的文档组
    document.getElementById(category).classList.add('active');
    
    // 重置下拉菜单显示为第一个可选项
    const activeGroup = document.querySelector('.doc-group.active');
    const firstItem = activeGroup.querySelector('.select-item');
    if (firstItem) {
        const text = firstItem.textContent.trim();
        const value = firstItem.getAttribute('data-value');
        activeGroup.querySelector('.select-selected').textContent = text;
        document.getElementById('pdf-viewer').src = value;
    }
}

// 切换下拉菜单显示/隐藏
function toggleDropdown(element) {
    const selectItems = element.nextElementSibling;
    const allDropdowns = document.querySelectorAll('.select-items');
    
    // 关闭其他下拉菜单
    allDropdowns.forEach(dropdown => {
        if (dropdown !== selectItems) {
            dropdown.classList.remove('show');
            dropdown.previousElementSibling.classList.remove('active');
        }
    });
    
    // 切换当前下拉菜单
    selectItems.classList.toggle('show');
    element.classList.toggle('active');
}

// 初始化下拉菜单事件
document.addEventListener('DOMContentLoaded', function() {
    // 为每个选项添加点击事件
    document.querySelectorAll('.select-item').forEach(item => {
        item.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            const text = this.textContent.trim();
            
            // 找到所属的文档组
            const docGroup = this.closest('.doc-group');
            const selectedDiv = docGroup.querySelector('.select-selected');
            
            // 更新显示的文本
            selectedDiv.textContent = text;
            
            // 更新 PDF 查看器
            document.getElementById('pdf-viewer').src = value;
            
            // 关闭下拉菜单
            const selectItems = docGroup.querySelector('.select-items');
            selectItems.classList.remove('show');
            selectedDiv.classList.remove('active');
        });
    });
    
    // 点击外部关闭下拉菜单
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.custom-select')) {
            document.querySelectorAll('.select-items').forEach(dropdown => {
                dropdown.classList.remove('show');
            });
            document.querySelectorAll('.select-selected').forEach(selected => {
                selected.classList.remove('active');
            });
        }
    });
    
    // 初始化第一个文档
    const firstGroup = document.querySelector('.doc-group.active');
    if (firstGroup) {
        const firstItem = firstGroup.querySelector('.select-item');
        if (firstItem) {
            const text = firstItem.textContent.trim();
            const value = firstItem.getAttribute('data-value');
            firstGroup.querySelector('.select-selected').textContent = text;
            document.getElementById('pdf-viewer').src = value;
        }
    }
});