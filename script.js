// script.js

// Document တည်ငြိမ်ပြီးမှသာ စကရစ်ပ်ကိုစတင်မည်
document.addEventListener('DOMContentLoaded', function() {
    // အခြေခံအပြန်အလှန်အကျိုးသက်ရောက်မှုများ
    initBasicInteractions();
    
    // Hydroponic အကြောင်း အသေးစိတ်ပြသမည့်အပိုင်း
    setupHydroponicSection();
    
    // အရောင်ပြောင်းခလုတ်
    setupThemeToggle();
    
    // ဘောလုံးနှင့်ပတ်သက်သော အပြန်အလှန်အကျိုးသက်ရောက်မှု
    setupFootballSection();
});

// အခြေခံအပြန်အလှန်အကျိုးသက်ရောက်မှုများ
function initBasicInteractions() {
    // Navigation ခလုတ်များအတွက် smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Section တစ်ခုချင်းစီကို ဖြေးညှင်းစွာပေါ်လာစေရန်
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
}

// Hydroponic အကြောင်း အသေးစိတ်ပြသမည့်အပိုင်း
function setupHydroponicSection() {
    const hydroponicBtn = document.getElementById('hydroponic-btn');
    const hydroponicInfo = document.getElementById('hydroponic-info');
    
    if (hydroponicBtn && hydroponicInfo) {
        hydroponicBtn.addEventListener('click', function() {
            // အချက်အလက်များကို toggle လုပ်မည်
            hydroponicInfo.classList.toggle('expanded');
            
            // ခလုတ်စာသားပြောင်းလဲမည်
            if (hydroponicInfo.classList.contains('expanded')) {
                hydroponicBtn.textContent = 'မြေမဲ့စိုက်ပျိုးနည်း အချက်အလက်များကို ပိတ်ရန်';
            } else {
                hydroponicBtn.textContent = 'မြေမဲ့စိုက်ပျိုးနည်း အကြောင်း ပိုမိုသိရှိရန်';
            }
        });
    }
    
    // Hydroponic အကျိုးကျေးဇူးများကို slideshow အဖြစ်ပြသခြင်း
    const benefits = [
        "ရေကို 90% အထိ သက်သာစေသည်",
        "မြေဆီလွှာမလိုအပ်ပါ",
        "ပိုးမွှားနှင့်ရောဂါကင်းစင်သည်",
        "ပုံမှန်ထက် 30-50% ပိုမိုမြန်ဆန်စွာကြီးထွားသည်",
        "မြို့ပြဧရိယာများတွင်လည်းစိုက်ပျိုးနိုင်သည်"
    ];
    
    let currentBenefit = 0;
    const benefitElement = document.getElementById('hydroponic-benefit');
    
    if (benefitElement) {
        // 5 စက္ကန့်တိုင်း အကျိုးကျေးဇူးတစ်ခုကိုပြောင်းလဲပြမည်
        setInterval(() => {
            benefitElement.textContent = benefits[currentBenefit];
            benefitElement.style.opacity = 0;
            
            setTimeout(() => {
                currentBenefit = (currentBenefit + 1) % benefits.length;
                benefitElement.textContent = benefits[currentBenefit];
                benefitElement.style.opacity = 1;
            }, 500);
        }, 5000);
    }
}

// အရောင်ပြောင်းခလုတ်
function setupThemeToggle() {
    const themeBtn = document.getElementById('theme-toggle');
    
    if (themeBtn) {
        themeBtn.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            
            // localStorage တွင် theme အခြေအနေကိုသိမ်းဆည်းမည်
            const isDark = document.body.classList.contains('dark-theme');
            localStorage.setItem('darkTheme', isDark);
            
            // ခလုတ်စာသားပြောင်းလဲမည်
            themeBtn.textContent = isDark ? 'အလင်းရောင်ပြန်ပြောင်းရန်' : 'မှောင်သောအရောင်ပြောင်းရန်';
        });
        
        // ယခင်ရွေးချယ်ထားသော theme ကိုပြန်လည်သတ်မှတ်မည်
        if (localStorage.getItem('darkTheme') === 'true') {
            document.body.classList.add('dark-theme');
            themeBtn.textContent = 'အလင်းရောင်ပြန်ပြောင်းရန်';
        }
    }
}

// ဘောလုံးနှင့်ပတ်သက်သော အပြန်အလှန်အကျိုးသက်ရောက်မှု
function setupFootballSection() {
    const footballBtn = document.getElementById('football-btn');
    const footballGallery = document.getElementById('football-gallery');
    
    if (footballBtn && footballGallery) {
        footballBtn.addEventListener('click', function() {
            footballGallery.classList.toggle('show');
            
            // ခလုတ်စာသားပြောင်းလဲမည်
            if (footballGallery.classList.contains('show')) {
                footballBtn.textContent = 'ဘောလုံးဓာတ်ပုံများကို ပိတ်ရန်';
                loadFootballImages();
            } else {
                footballBtn.textContent = 'ကျွန်တော့်ဘောလုံးဓာတ်ပုံများကိုကြည့်ရန်';
            }
        });
    }
}

// ဘောလုံးဓာတ်ပုံများကို တဖြည်းဖြည်းဖော်ပြမည်
function loadFootballImages() {
    const gallery = document.getElementById('football-gallery');
    if (!gallery) return;
    
    // ဓာတ်ပုံများကို array အဖြစ်သတ်မှတ်မည် (လက်တွေ့တွင် သင့်ဓာတ်ပုံများဖြင့်အစားထိုးပါ)
    const images = [
        { src: 'img/footballman.jpg', alt: 'ဘောလုံးကစားနေစဉ်' },
        { src: 'img/ballteam.jpg', alt: 'အသင်းနှင့်အတူ' },
        { src: 'img/bagateam.jpg', alt: 'ပြိုင်ပွဲတစ်ခုတွင်' }
    ];
    
    // gallery အတွင်းရှိ eski content များကိုရှင်းလင်းမည်
    gallery.innerHTML = '';
    
    // ဓာတ်ပုံတစ်ခုချင်းစီအတွက် HTML element များဖန်တီးမည်
    images.forEach((img, index) => {
        const imgContainer = document.createElement('div');
        imgContainer.className = 'gallery-item';
        imgContainer.style.opacity = 0;
        imgContainer.style.transition = `opacity 0.5s ease ${index * 0.2}s`;
        
        const imgElement = document.createElement('img');
        imgElement.src = img.src;
        imgElement.alt = img.alt;
        imgElement.loading = 'lazy';
        
        imgContainer.appendChild(imgElement);
        gallery.appendChild(imgContainer);
        
        // တဖြည်းဖြည်းပေါ်လာစေရန်
        setTimeout(() => {
            imgContainer.style.opacity = 1;
        }, 50);
    });
}