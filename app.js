const tl = gsap.timeline({defaults: {ease: 'power2.out'}});

tl.to(".slider", {y: "-100%", duration: 1.2});
tl.to(".intro .hero", {y: "0%", duration: 1.2});