const gap = 500;
function js() {
	var sections = $("section");
	var nav = $("nav");
	var sideNavAnc = $(".sideNav>li");
	var gnb = $(".gnb>li");

	function removeON(obj) {
		obj.each(function (i, o) {
			o.removeClass("on");
		});
	}
	/*
  scrollTop
	function smooth(el){
		$(el.eq(0).attr("href")getAttribute("href")).scrollIntoView({ behavior: "smooth" });
	}
*/
	$(window).scroll(function () {
		var scrollTop = $(this).scrollTop();
		animate(scrollTop);
	});

	function animate(sct) {
		sections.each(function (idx,el) {
			var sectionTop = $(el).offsetTop;
			if (sct > sectionTop - gap) {
			
				removeON(gnb);
				gnb[idx].classList.add("on");
				removeON(sideNavAnc);
				sideNavAnc[idx].classList.add("on");
			}
		});
		sct >= nav.clientHeight ? nav.classList.add("sticky") : nav.classList.remove("sticky");
	}
	gnb.forEach((el) => {
		el.addEventListener("click", function (e) {
			e.preventDefault();
			smooth(el);
			removeON(gnb);
			el.classList.add("on");
		});
	});
	sideNavAnc.forEach((el) => {
		el.addEventListener("click", function (e) {
			e.preventDefault();
			smooth(el);
			removeON(sideNavAnc);
			el.classList.add("on");
		});
	});
}
js();
