// احرص على تنفيذ الكود بعد تحميل كل الصور والعناصر
window.addEventListener("load", () => {
  const scrollers = document.querySelectorAll(".scroller");

  // إذا لم يختار المستخدم reduced motion
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation(scrollers);
  }
});

function addAnimation(scrollers) {
  scrollers.forEach((scroller) => {
    // أضف data-animated="true"
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // عمل نسخة من كل عنصر وإضافتها
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });

    // 🔹 حل مشكلة ظهور الشعارات على الموبايل
    // إجبار المتصفح على إعادة حساب العرض (reflow)
    scrollerInner.scrollLeft = 0;

    // 🔹 اختياري: تأخير بدء الأنيميشن قليلًا حتى تتأكد الصور محملة
    setTimeout(() => {
      scrollerInner.style.animationPlayState = "running";
    }, 50);
  });
}
