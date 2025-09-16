// ✅ تنفيذ الكود بعد تحميل الصفحة وكل الصور
window.addEventListener("load", () => {
  const scrollers = document.querySelectorAll(".scroller");

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation(scrollers);
  }
});

function addAnimation(scrollers) {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // ✅ تكرار المحتوى مرتين لحل مشكلة الغليتش
    for (let i = 0; i < 2; i++) {
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    }

    // ✅ إجبار المتصفح على إعادة الحساب (reflow)
    scrollerInner.scrollLeft = 0;

    // ✅ تأخير بسيط لتفادي مشاكل تحميل الصور
    setTimeout(() => {
      scrollerInner.style.animationPlayState = "running";
    }, 100);
  });
}
