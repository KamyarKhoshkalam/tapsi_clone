const hamburger = document.querySelector(".bx-menu");
const navItems = document.querySelector("#nav-items");
const tabSelector = document.querySelector(".tab-selector");
const tabs = tabSelector.querySelectorAll("a");
const tabInfo = document.querySelector(".tabs");

hamburger.addEventListener("click", () => {
  navItems.classList.toggle("active");
  console.log(navItems);
});

const tabsData = [
  {
    title: "تپسی کلاسیک",
    describe:
      "در سرویس باهمسفر تپسی، با یک مسافر دیگر هم مسیر می شوید. هزینه سفر شما با این سرویس ٪۳۵ به صرفه‌تر از سفبا سرویس تپسی کلاسیک، سریع، آسان و به‌صرفه به مقصد برسید. دراین سرویس می‌توانید به دو یا چند مقصد سفر کنید..",
    src: "../images/illus-wait-and-share.png",
  },
  {
    title: "باهمسفر",
    describe:
      "در سرویس باهمسفر تپسی، با یک مسافر دیگر هم مسیر می شوید. هزینه سفر شما با این سرویس ٪۳۵ به صرفه‌تر از سفر کلاسیک است.",
    src: "../images/illus-wait-and-share.png",
  },
  {
    title: "ارسال بسته",
    describe:
      "شما می‌توانید با استفاده از سرویس ارسال بسته تپسی مرسولات خود را با موتوپیک(بسته کوچک) یا اتوپیک (بسته بزرگ) ارسال کنید.",
    src: "../images/illus-wait-and-share.png",
  },
  {
    title: "تپسی تلفنی",
    describe:
      "سرویس تپسی تلفنی یا ۱۶۳۰، این امکان را به شما می‌دهد که بدون نیاز به اینترنت و اپلیکیشن، درخواست خودرو بدهید.کافیست با شماره ۱۶۳۰ تماس بگیرید.",
    src: "../images/illus-wait-and-share.png",
  },
  {
    title: "تپسی پلاس",
    describe:
      "سرویس تپسی پلاس با ماشین‌های مدل بالاتر و کارکرد کمتر ارائه می‌شود. در این سرویس امکان تعیین چند مقصد و توقف در مسیر وجود دارد.",
    src: "../images/illus-wait-and-share.png",
  },
  {
    title: "بین شهری",
    describe:
      "با تاکسی اینترنتی بین شهری تپسی می‌توانید با قیمت مناسب و امنیت بالا به شهرهای دور و نزدیک سفر کنید.",
    src: "../images/illus-wait-and-share.png",
  },
];

const changeTabs = function (tabs) {
  return tabsData[tabs - 1];
};

tabs.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    tabs.forEach((element) => {
      element.querySelector("img").classList.remove("active");
      element.querySelector("p").classList.remove("active");
    });
    element.querySelector("img").classList.add("active");
    element.querySelector("p").classList.add("active");
    const info = changeTabs(element.dataset.tab);
    tabInfo.querySelector("h3").innerText = info.title;
    tabInfo.querySelector("p").innerText = info.describe;
    tabInfo.querySelector("img").src = info.src;
  });
});
