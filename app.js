// PUT YOUR CODE HERE

const timeline = gsap.timeline();

timeline
  .from(".box.red", {
    top: -200,
    left: -200,
    transformOrigin: "left top",
    delay: 0.1,
  })
  .from(".box.green", {
    right: -200,
    top: -200,
    transformOrigin: "right top",
    delay: 0.1,
  })
  .from(".box.blue", {
    right: -200,
    bottom: -200,
    transformOrigin: "right bottom",
    delay: 0.1,
  })
  .from(".box.yellow", {
    left: -200,
    bottom: -200,
    transformOrigin: "left bottom",
    delay: 0.1,
  })
  .to(".box.red", {
    x: "-100%",
    left: "100vw",
    borderRadius: "50%",
  })
  .to(
    ".box.green",
    {
      y: "-100%",
      top: "100vh",
      borderRadius: "50%",
    },
    "<"
  )
  .to(
    ".box.blue",
    {
      x: "100vw",
      left: "-100%",
      bottom: "0",
      borderRadius: "50%",
    },
    "<"
  )
  .to(
    ".box.yellow",
    {
      y: "0",
      top: "0",
      borderRadius: "50%",
    },
    "<"
  )
  .to(".box.yellow", {
    x: "-200",
    delay: 1,
  })
  .to(
    ".box.red",
    {
      x: "200px",
    },
    "<"
  )
  .to(
    ".box.green",
    {
      x: "200",
    },
    "<"
  )
  .to(
    ".box.blue",
    {
      x: "-200px",
      left: "0px",
    },
    "<"
  );
