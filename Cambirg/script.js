// Til va matnlar
const translations = {
    uz: {
      heroTitle: "Biz nafaqat ingliz tilini o'rgatamiz, balki insonlar hayotini o'zgartiramiz!",
      heroSubtitle: "9 yil ichida Cambridge, 50 000 dan ortiq yoshlar hayotini o'zgartirishga hissa qo'shdi",
      ctaBtn: "Birinchi darsga yoziling",
      teachers: "O'qituvchilar",
      courses: "Kurslar",
      branches: "Filiallar",
      verify: "Sertifikat tekshirish",
    },
    ru: {
      heroTitle: "Мы не только учим английскому, но и меняем жизни людей!",
      heroSubtitle: "За 9 лет Cambridge помог изменить жизнь более 50 000 молодых людей",
      ctaBtn: "Запишитесь на первый урок",
      teachers: "Учителя",
      courses: "Курсы",
      branches: "Филиалы",
      verify: "Проверить сертификат",
    },
    en: {
      heroTitle: "We not only teach English but also change people's lives!",
      heroSubtitle: "In 9 years, Cambridge has helped over 50,000 young people transform their lives",
      ctaBtn: "Enroll in the first lesson",
      teachers: "Teachers",
      courses: "Courses",
      branches: "Branches",
      verify: "Verify Certificate",
    },
  };
  
  // Elementlarni olish
  const body = document.body;
  const themeToggleBtn = document.getElementById("theme-toggle");
  const languageSelect = document.getElementById("language-select");
  const heroTitle = document.getElementById("hero-title");
  const heroSubtitle = document.getElementById("hero-subtitle");
  const ctaBtn = document.getElementById("cta-btn");
  const navLinks = document.querySelectorAll(".nav-links li a");
  
  // Dark/Light rejimini almashtirish
  themeToggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");
  
    // Iconni o'zgartirish
    if (body.classList.contains("light-mode")) {
      themeToggleBtn.textContent = "☀️";
    } else {
      themeToggleBtn.textContent = "🌙";
    }
  });
  
  // Tilni almashtirish
  languageSelect.addEventListener("change", () => {
    const selectedLanguage = languageSelect.value;
    const translation = translations[selectedLanguage];
  
    heroTitle.textContent = translation.heroTitle;
    heroSubtitle.textContent = translation.heroSubtitle;
    ctaBtn.textContent = translation.ctaBtn;
  
    navLinks[0].textContent = translation.teachers;
    navLinks[1].textContent = translation.courses;
    navLinks[2].textContent = translation.branches;
    navLinks[3].textContent = translation.verify;
  });

  
  