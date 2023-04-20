/* 1단계: 스크롤양 확인하기 */
const gap = 500;
function js() {
  const sections = $("section");

  let scrollTop;
  const h2 = $("h2");
  $(window).scroll(function () {
    scrollTo = $(this).scrollTop();
    animate(scrollTop);
  });
  console.log("이벤트함수외부", scrollTop);

  const animate = (sct) => {
    sections.each((idx, el) => {
      let sectionTop = $(el).offset().Top;
      if (sct > sectionTop - gap) {
        $(el).addClass("sectionIn");
      }
    });
  };
  /*   console.log(sections[0].offsetTop);
  console.log(sections[1].offsetTop);
  console.log(sections[2].offsetTop);
  console.log(sections[3].offsetTop);
  console.log(sections[4].offsetTop); */
}
js();
