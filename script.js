let currentPlatform = '';

function selectPlatform(platform) {
    currentPlatform = platform;
    document.getElementById('platform-title').textContent = `Dịch vụ cho ${platform.charAt(0).toUpperCase() + platform.slice(1)}`;
    document.getElementById('service-form').style.display = 'block';
    document.getElementById('result').textContent = '';
}

function submitRequest(event) {
    event.preventDefault();

    const link = document.getElementById('link').value;
    const service = document.getElementById('service').value;
    const quantity = document.getElementById('quantity').value;

    if (!currentPlatform) {
        alert('Vui lòng chọn nền tảng trước!');
        return;
    }

    const result = `Đã gửi yêu cầu cho ${currentPlatform}: ${service} (${quantity}) tại link ${link}. Vui lòng chờ xử lý!`;
    document.getElementById('result').textContent = result;

    document.getElementById('interaction-form').reset();
}