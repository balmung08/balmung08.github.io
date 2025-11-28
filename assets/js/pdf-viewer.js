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
    
    // 显示第一个文档
    changePDF();
}

function changePDF() {
    const activeGroup = document.querySelector('.doc-group.active select');
    const iframe = document.getElementById('pdf-viewer');
    if (activeGroup) {
        iframe.src = activeGroup.value;
    }
}