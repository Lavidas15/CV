var from = $("#header").height();
$(document).ready(function () {
  $("ul.nav").on("click", "a", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top - from - 30,
      },
      1500
    );
  });
});

window.sr = ScrollReveal();
sr.reveal(".myname, .nav-link", {
  duration: 1000,
  origin: "top",
  rotate: { x: 100, y: 200, z: 200 },
});

sr.reveal(".jas", {
  duration: 2000,
  origin: "left",
  distance: "200px",
  delay: 500,
});
sr.reveal(".contact-detail", {
  duration: 2000,
  origin: "right",
  distance: "200px",
  delay: 500,
});
sr.reveal(".social", {
  duration: 800,
  origin: "bottom",
  distance: "50px",
  delay: 500,
});
sr.reveal(".intro", {
  duration: 1500,
  origin: "top",
  distance: "200px",
  viewFactor: 0.2,
});
sr.reveal("#exp", {
  rotate: { x: 100, y: 200, z: 0 },
  duration: 2000,
  viewFactor: 0.2,
});
sr.reveal(".exp-left", {
  duration: 1500,
  origin: "left",
  distance: "200px",
  viewFactor: 0.2,
});
sr.reveal(".exp-right", {
  duration: 1500,
  origin: "right",
  distance: "200px",
  viewFactor: 0.2,
});
sr.reveal("#edu", {
  rotate: { x: 200, y: 100, z: 0 },
  duration: 1500,
  viewFactor: 0.2,
});
sr.reveal("#skii", {
  rotate: { x: 100, y: 200, z: 0 },
  duration: 1500,
  viewFactor: 0.2,
});
sr.reveal(".ms1", {
  duration: 1500,
  origin: "right",
  rotate: { x: 190, y: 160, z: 190 },
  distance: "200px",
  viewFactor: 0.2,
});
sr.reveal(".ms2", {
  duration: 1500,
  origin: "right",
  rotate: { x: 160, y: 190, z: 160 },
  distance: "200px",
  viewFactor: 0.2,
});
sr.reveal(".ms3", {
  duration: 1500,
  origin: "right",
  rotate: { x: 210, y: 130, z: 210 },
  distance: "200px",
  viewFactor: 0.2,
});
sr.reveal(".ms4", {
  duration: 1500,
  origin: "right",
  rotate: { x: 130, y: 210, z: 130 },
  distance: "200px",
  viewFactor: 0.2,
});
sr.reveal(".ms5", {
  duration: 1500,
  origin: "right",
  rotate: { x: 160, y: 90, z: 160 },
  distance: "200px",
  viewFactor: 0.2,
});
sr.reveal(".ms6", {
  duration: 1500,
  origin: "right",
  rotate: { x: 90, y: 160, z: 90 },
  distance: "200px",
  viewFactor: 0.2,
});
sr.reveal("#proj", {
  duration: 1500,
  origin: "top",
  scale: 0.9,
  rotate: { x: 0, y: 360, z: 0 },
  easing: "cubic-bezier(0.6, 0.2, 0.1, 1)",
  distance: "100px",
  viewFactor: 0.2,
});
sr.reveal(".mp1", {
  duration: 1500,
  origin: "right",
  rotate: { x: 190, y: 160, z: 190 },
  distance: "200px",
  viewFactor: 0.2,
});
sr.reveal(".mp2", {
  duration: 1500,
  origin: "right",
  rotate: { x: 160, y: 190, z: 160 },
  distance: "200px",
  viewFactor: 0.2,
});
sr.reveal(".mp3", {
  duration: 1500,
  origin: "right",
  rotate: { x: 210, y: 130, z: 210 },
  distance: "200px",
  viewFactor: 0.2,
});
sr.reveal(".mp4", {
  duration: 1500,
  origin: "right",
  rotate: { x: 130, y: 210, z: 130 },
  distance: "200px",
  viewFactor: 0.2,
});
sr.reveal(".mp5", {
  duration: 1500,
  origin: "right",
  rotate: { x: 160, y: 90, z: 160 },
  distance: "200px",
  viewFactor: 0.2,
});
sr.reveal(".mp6", {
  duration: 1500,
  origin: "right",
  rotate: { x: 90, y: 160, z: 90 },
  distance: "200px",
  viewFactor: 0.2,
});
sr.reveal("#interest", {
  rotate: { x: 100, y: 200, z: 0 },
  duration: 1500,
  viewFactor: 0.2,
});
sr.reveal(".int-one", {
  duration: 1500,
  origin: "left",
  distance: "100px",
  viewFactor: 0.2,
});
sr.reveal(".int-two", {
  duration: 1500,
  origin: "bottom",
  distance: "100px",
  viewFactor: 0.2,
});
sr.reveal(".int-three", {
  duration: 1500,
  origin: "right",
  distance: "100px",
  viewFactor: 0.2,
});
sr.reveal("#contact-me", {
  rotate: { x: 100, y: 200, z: 0 },
  duration: 1500,
  viewFactor: 0.2,
});
sr.reveal("#form", {
  duration: 1500,
  origin: "left",
  distance: "100px",
  viewFactor: 0.2,
});
sr.reveal("#contact", {
  duration: 1500,
  origin: "right",
  distance: "100px",
  viewFactor: 0.2,
});
