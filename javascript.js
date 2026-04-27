// 1. 네비게이션 바 투명도 제어 (스크롤 시)
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('#navbar');
    if (window.scrollY > 150) {
        navbar.style.opacity = 0.9;
    } else {
        navbar.style.opacity = 1;
    }
});

// 2. 부드러운 스크롤 이동 (Smooth Scroll)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 3. 간단한 Contact Form 제출 알림
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 실제 백엔드 연동 대신 알림창으로 대체
    alert('감사합니다! 메시지가 성공적으로 전송되었습니다. (가상)');
    contactForm.reset();
});

// 4. 타이핑 효과 (Hero Section)
const text = "안녕하세요, 미래를 설계하는 AI 개발자입니다.";
const typewriterElement = document.querySelector('.typewriter');
let i = 0;

function typeWriter() {
    if (i < text.length) {
        if(i === 0) typewriterElement.innerHTML = "";
        typewriterElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// 페이지 로드 후 타이핑 시작
window.onload = () => {
    typewriterElement.innerHTML = "";
    typeWriter();
};