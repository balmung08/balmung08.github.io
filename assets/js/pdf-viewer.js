// PDF.js 配置
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

let pdfDoc = null;
let pageNum = 1;
let pageRendering = false;
let pageNumPending = null;
let scale = 1.2;

const canvas = document.getElementById('pdf-canvas');
const ctx = canvas.getContext('2d');
const textLayerDiv = document.getElementById('text-layer');

// 渲染页面
function renderPage(num) {
    pageRendering = true;
    
    pdfDoc.getPage(num).then(function(page) {
        const viewport = page.getViewport({ scale: scale });
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // 清空文本层
        textLayerDiv.innerHTML = '';
        textLayerDiv.style.width = viewport.width + 'px';
        textLayerDiv.style.height = viewport.height + 'px';

        const renderContext = {
            canvasContext: ctx,
            viewport: viewport
        };
        
        const renderTask = page.render(renderContext);

        renderTask.promise.then(function() {
            // 渲染文本层，使文字可选择
            return page.getTextContent();
        }).then(function(textContent) {
            pdfjsLib.renderTextLayer({
                textContentSource: textContent,
                container: textLayerDiv,
                viewport: viewport,
                textDivs: []
            });
            
            pageRendering = false;
            if (pageNumPending !== null) {
                renderPage(pageNumPending);
                pageNumPending = null;
            }
        });
    });

    document.getElementById('page-num').textContent = num;
}

// 队列渲染
function queueRenderPage(num) {
    if (pageRendering) {
        pageNumPending = num;
    } else {
        renderPage(num);
    }
}

// 上一页
function onPrevPage() {
    if (pageNum <= 1) {
        return;
    }
    pageNum--;
    queueRenderPage(pageNum);
    updateButtons();
}

// 下一页
function onNextPage() {
    if (pageNum >= pdfDoc.numPages) {
        return;
    }
    pageNum++;
    queueRenderPage(pageNum);
    updateButtons();
}

// 放大
function onZoomIn() {
    scale += 0.25;
    queueRenderPage(pageNum);
}

// 缩小
function onZoomOut() {
    if (scale > 0.5) {
        scale -= 0.25;
        queueRenderPage(pageNum);
    }
}

// 更新按钮状态
function updateButtons() {
    document.getElementById('prev-page').disabled = (pageNum <= 1);
    document.getElementById('next-page').disabled = (pageNum >= pdfDoc.numPages);
}

// 加载 PDF
function loadPDF(url) {
    document.getElementById('pdf-loading').style.display = 'block';
    canvas.style.display = 'none';
    textLayerDiv.style.display = 'none';
    
    const loadingTask = pdfjsLib.getDocument(url);
    
    loadingTask.promise.then(function(pdfDoc_) {
        pdfDoc = pdfDoc_;
        document.getElementById('page-count').textContent = pdfDoc.numPages;

        document.getElementById('pdf-loading').style.display = 'none';
        canvas.style.display = 'block';
        textLayerDiv.style.display = 'block';
        
        pageNum = 1;
        renderPage(pageNum);
        updateButtons();
    }).catch(function(error) {
        console.error('加载 PDF 失败:', error);
        document.getElementById('pdf-loading').textContent = '加载失败：' + error.message;
    });
}

// 分组切换
function changeCategory(category) {
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    
    event.target.classList.add('active');
    
    document.querySelectorAll('.doc-group').forEach(group => {
        group.classList.remove('active');
    });
    
    document.getElementById(category).classList.add('active');
    
    changePDF();
}

// 文档切换
function changePDF() {
    const activeGroup = document.querySelector('.doc-group.active select');
    if (activeGroup) {
        loadPDF(activeGroup.value);
    }
}

// 绑定按钮事件
document.getElementById('prev-page').addEventListener('click', onPrevPage);
document.getElementById('next-page').addEventListener('click', onNextPage);
document.getElementById('zoom-in').addEventListener('click', onZoomIn);
document.getElementById('zoom-out').addEventListener('click', onZoomOut);

// 初始加载第一个 PDF
window.addEventListener('load', function() {
    const firstSelect = document.querySelector('.doc-group.active select');
    if (firstSelect) {
        loadPDF(firstSelect.value);
    }
});