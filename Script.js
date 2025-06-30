window.onload = () => {
  gsap.from(".hero h1", { y: -50, opacity: 0, duration: 1 });
  gsap.from(".hero p", { y: 50, opacity: 0, duration: 1, delay: 0.5 });
  gsap.from("section", {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
      trigger: "section",
      toggleActions: "restart pause resume reset"
    }
  });
};
