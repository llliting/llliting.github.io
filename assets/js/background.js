// 动态生成随机色块
function createRandomBlob() {
    const blob = document.createElement("div");
    blob.style.position = "absolute";
    blob.style.width = `${Math.random() * 200 + 100}px`; // 随机宽度
    blob.style.height = `${Math.random() * 200 + 100}px`; // 随机高度
    blob.style.backgroundColor = `rgba(179, 229, 252, ${Math.random() * 0.5 + 0.2})`; // 随机透明度
    blob.style.borderRadius = "50%"; // 圆形
    blob.style.filter = "blur(50px)"; // 模糊效果
    blob.style.left = `${Math.random() * 100}%`; // 随机水平位置
    blob.style.top = `${Math.random() * 100}%`; // 随机垂直位置
    document.body.appendChild(blob);

    // 移除色块以避免内存泄漏
    setTimeout(() => {
        blob.remove();
    }, 10000); // 10秒后移除
}

// 每500毫秒生成一个随机色块
setInterval(createRandomBlob, 500);