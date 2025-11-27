<script>
const dictionary = {
  bn: {
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
    "Login": "লগইন",
    "Logout": "লগআউট",
    "Register": "রেজিস্টার",
    "Sign Up": "সাইন আপ",
    "Sign In": "সাইন ইন",
    "Profile": "প্রোফাইল",
    "Settings": "সেটিংস",
    "Dashboard": "ড্যাশবোর্ড",
    "Premium": "প্রিমিয়াম",
    "Buy Now": "এখনই কিনুন",
    "Subscribe": "সাবস্ক্রাইব",
    "Latest News": "সর্বশেষ সংবাদ",
    "Trending": "ট্রেন্ডিং",
    "Popular": "জনপ্রিয়",
    "Comments": "মন্তব্য",
    "Write Comment": "মন্তব্য লিখুন",
    "Search": "অনুসন্ধান",
    "Search Here": "এখানে খুঁজুন",
    "Next": "পরবর্তী",
    "Previous": "পূর্ববর্তী",
    "Submit": "জমা দিন",
    "Cancel": "বাতিল",
    "Read More": "আরও পড়ুন",
    "Learn More": "আরও জানুন",
    "Help": "সহায়তা",
    "Support": "সহায়তা কেন্দ্র",
    "Download": "ডাউনলোড",
    "Upload": "আপলোড",
    "Gallery": "গ্যালারি",
    "Video": "ভিডিও",
    "Audio": "অডিও",
    "Category": "বিভাগ",
    "Categories": "বিভাগসমূহ",
    "View All": "সব দেখুন",
    "Back": "ফিরে যান",
    "Continue": "চালিয়ে যান",
    "Yes": "হ্যাঁ",
    "No": "না",
    "Ok": "ঠিক আছে",
    "Close": "বন্ধ করুন",
    "Open": "খুলুন",
    "Language": "ভাষা",
    "Blog": "ব্লগ",
    "News": "সংবাদ",
    "Story": "গল্প",
    "Share": "শেয়ার করুন",
    "Copy Link": "লিংক কপি করুন",
    "Read": "পড়ুন",
    "Download Now": "এখনই ডাউনলোড করুন",
    "Watch Now": "এখনই দেখুন",
    "Follow": "ফলো করুন",
    "Followers": "অনুসারী",
    "Following": "অনুসরণ করা হচ্ছে"
  },

  en: {
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
    "লগইন": "Login",
    "লগআউট": "Logout",
    "রেজিস্টার": "Register",
    "সাইন আপ": "Sign Up",
    "সাইন ইন": "Sign In",
    "প্রোফাইল": "Profile",
    "সেটিংস": "Settings",
    "ড্যাশবোর্ড": "Dashboard",
    "প্রিমিয়াম": "Premium",
    "এখনই কিনুন": "Buy Now",
    "সাবস্ক্রাইব": "Subscribe",
    "সর্বশেষ সংবাদ": "Latest News",
    "ট্রেন্ডিং": "Trending",
    "জনপ্রিয়": "Popular",
    "মন্তব্য": "Comments",
    "মন্তব্য লিখুন": "Write Comment",
    "অনুসন্ধান": "Search",
    "এখানে খুঁজুন": "Search Here",
    "পরবর্তী": "Next",
    "পূর্ববর্তী": "Previous",
    "জমা দিন": "Submit",
    "বাতিল": "Cancel",
    "আরও পড়ুন": "Read More",
    "আরও জানুন": "Learn More",
    "সহায়তা": "Help",
    "সহায়তা কেন্দ্র": "Support",
    "ডাউনলোড": "Download",
    "আপলোড": "Upload",
    "গ্যালারি": "Gallery",
    "ভিডিও": "Video",
    "অডিও": "Audio",
    "বিভাগ": "Category",
    "বিভাগসমূহ": "Categories",
    "সব দেখুন": "View All",
    "ফিরে যান": "Back",
    "চালিয়ে যান": "Continue",
    "হ্যাঁ": "Yes",
    "না": "No",
    "ঠিক আছে": "Ok",
    "বন্ধ করুন": "Close",
    "খুলুন": "Open",
    "ভাষা": "Language",
    "ব্লগ": "Blog",
    "সংবাদ": "News",
    "গল্প": "Story",
    "শেয়ার করুন": "Share",
    "লিংক কপি করুন": "Copy Link",
    "পড়ুন": "Read",
    "এখনই ডাউনলোড করুন": "Download Now",
    "এখনই দেখুন": "Watch Now",
    "ফলো করুন": "Follow",
    "অনুসারী": "Followers",
    "অনুসরণ করা হচ্ছে": "Following"
  }
};

function translateWords(lang) {
  const dict = dictionary[lang];
  if (!dict) return;
  document.querySelectorAll("body *:not(script):not(style)").forEach(el => {
    if (el.children.length === 0 && el.innerText.trim() !== "") {
      let text = el.innerText;
      for (const key in dict) {
        const regex = new RegExp("\\b" + key + "\\b", "g");
        text = text.replace(regex, dict[key]);
      }
      el.innerText = text;
    }
  });
}

function applyLang(lang) {
  if (lang === "en") {
    localStorage.removeItem("lang");
    location.reload();
  } else {
    localStorage.setItem("lang", lang);
    translateWords(lang);
  }
}

window.addEventListener("load", () => {
  const popup = document.getElementById("langPopup");
  const saved = localStorage.getItem("lang") || "en";
  if (saved !== "en") translateWords(saved);
  document.getElementById("langSelect").value = saved;
  document.getElementById("saveLang").addEventListener("click", () => {
    const lang = document.getElementById("langSelect").value;
    applyLang(lang);
    popup.classList.remove("show");
  });
});
</script>
