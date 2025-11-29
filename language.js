// =========================
// 🌐 HridoyTV Language System
// =========================

const dictionary = {
  bn: {
    "Save": "সেভ করুন ভালো",
    "Cancel": "বাতিল করুন",
    "Search Channel": "সার্চ চ্যানেল",
    "Home": "হোম",
    "About": "সম্পর্কে",
    "Contact": "যোগাযোগ",
    "Advertise": "বিজ্ঞাপন",
    "Report": "রিপোর্ট",
    "Privacy Policy": "গোপনীয়তা নীতি",
    "Terms & Condition": "শর্তাবলী",
    "FAQ": "প্রশ্নোত্তর",
    "Sitemap": "সাইটম্যাপ",
    "Change Language": "ভাষা পরিবর্তন",
    "More Menu": "আরও মেনু",
    "HridoyTV": "হৃদয়টিভি"
  },
  en: {
    "সেভ করুন ভালো": "Save",
    "বাতিল করুন": "Cancel",
    "সার্চ চ্যানেল": "Search Channel",
    "হোম": "Home",
    "সম্পর্কে": "About",
    "যোগাযোগ": "Contact",
    "বিজ্ঞাপন": "Advertise",
    "রিপোর্ট": "Report",
    "গোপনীয়তা নীতি": "Privacy Policy",
    "শর্তাবলী": "Terms & Condition",
    "প্রশ্নোত্তর": "FAQ",
    "সাইটম্যাপ": "Sitemap",
    "ভাষা পরিবর্তন": "Change Language",
    "আরও মেনু": "More Menu",
    "হৃদয়টিভি": "HridoyTV"
  }
};

// 🔁 Translate all hridoytv tags
function translateWords(lang) {
  const dict = dictionary[lang];
  if (!dict) return;

  document.querySelectorAll("hridoytv").forEach(el => {
    const text = el.innerText.trim();
    if (dict[text]) el.innerText = dict[text];
  });

  // placeholder translate (যেমন Search box)
  document.querySelectorAll("input[placeholder]").forEach(el => {
    const text = el.getAttribute("placeholder");
    if (dict[text]) el.setAttribute("placeholder", dict[text]);
  });
}

// 💾 Save and apply language
function applyLang(lang) {
  localStorage.setItem("lang", lang);
  translateWords(lang);
}

// 🌍 Initial load
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  if (savedLang !== "en") translateWords(savedLang);
  const selector = document.getElementById("langSelect");
  if (selector) selector.value = savedLang;

  document.getElementById("saveLang")?.addEventListener("click", () => {
    const lang = selector.value;
    applyLang(lang);
    document.getElementById("langPopup")?.classList.remove("show");
  });
});

// 🔄 Dynamic update observer (auto translate if new element added)
const observer = new MutationObserver(() => {
  const lang = localStorage.getItem("lang") || "en";
  if (lang !== "en") translateWords(lang);
});
observer.observe(document.body, { childList: true, subtree: true });

console.log("✅ HridoyTV Language.js loaded");