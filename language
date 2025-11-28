Reportnctionnctionnst dictionary = {
  bn: {
    "HridoyTV": "হৃদয়টিভি",
    "Save": "সেভ করুন ভালো",
    "Cancel": "বাতিল করুন",
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
    "More Menu": "আরও মেনু"
  },
  en: {
    "হৃদয়টিভি": "HridoyTV",
    "বাতিল করুন": "Cancel",
    "সেভ করুন ভালো": "Save",
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
    "আরও মেনু": "More Menu"
  }
};

function translateWords(lang) {
  const dict = dictionary[lang];
  if (!dict) return;

  document.querySelectorAll("hridoytv").forEach(el => {
    const text = el.innerText.trim();
    if (dict[text]) el.innerText = dict[text];
  });

  document.querySelectorAll("button").forEach(el => {
    const text = el.innerText.trim();
    if (dict[text]) el.innerText = dict[text];
  });
}

function applyLang(lang) {
  localStorage.setItem("lang", lang);
  translateWords(lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("langPopup");
  const openBtn = document.getElementById("changeLangBtn");
  const closeBtn = document.getElementById("closeLang");

  openBtn.addEventListener("click", () => {
    popup.style.display = "flex";
    setTimeout(() => popup.classList.add("show"), 10);
    const lang = localStorage.getItem("lang") || "en";
    translateWords(lang);
  });

  closeBtn.addEventListener("click", () => {
    popup.classList.remove("show");
    setTimeout(() => popup.style.display = "none", 300);
  });

  const savedLang = localStorage.getItem("lang") || "en";
  if (savedLang !== "en") translateWords(savedLang);
  document.getElementById("langSelect").value = savedLang;

  document.getElementById("saveLang").addEventListener("click", () => {
    const lang = document.getElementById("langSelect").value;
    applyLang(lang);
    popup.classList.remove("show");
    setTimeout(() => popup.style.display = "none", 300);
  });
});

const observer = new MutationObserver(() => {
  const lang = localStorage.getItem("lang") || "en";
  if (lang !== "en") translateWords(lang);
});

observer.observe(document.body, { childList: true, subtree: true });


function translateWords(lang) {
  const dict = dictionary[lang];
  if (!dict) return;

  document.querySelectorAll("hridoytv, button, a, span, p, li, h1, h2, h3, h4, h5, h6").forEach(el => {
    if (el.children.length === 0 && el.innerText.trim() !== "") {
      let text = el.innerText;

      // প্রতিটি শব্দ আলাদা আলাদা করে খোঁজা হচ্ছে
      for (const key in dict) {
        // 🔥 word boundary (space বা punctuation অনুযায়ী)
        const regex = new RegExp(`\\b${key}\\b`, "g");
        text = text.replace(regex, dict[key]);
      }

      el.innerText = text.trim();
    }
  });
}
