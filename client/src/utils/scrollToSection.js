export const scrollToSection = (id) => {
  const target = document.getElementById(id);
  if (!target) return;

  const navbarOffset = 80; // ✅ Fixed navbar ka height adjust karne ke liye
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarOffset; // ✅ Offset Adjusted
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1500; // milliseconds
  let startTime = null;

  const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  // Easing function
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  requestAnimationFrame(animation);
};



// custome smoothness function
// export const scrollToSection = (id) => {
//   const target = document.getElementById(id);
//   if (!target) return;

//   const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
//   const startPosition = window.pageYOffset;
//   const distance = targetPosition - startPosition;
//   const duration = 1700; // milliseconds
//   let startTime = null;

//   const animation = (currentTime) => {
//       if (startTime === null) startTime = currentTime;
//       const timeElapsed = currentTime - startTime;
//       const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
//       window.scrollTo(0, run);
//       if (timeElapsed < duration) requestAnimationFrame(animation);
//   };

//   // Easing function
//   const easeInOutQuad = (t, b, c, d) => {
//     t /= d / 2;
//     if (t < 1) return (c / 2) * t * t + b;
//     t--;
//     return (-c / 2) * (t * (t - 2) - 1) + b;
//   };

//   requestAnimationFrame(animation);
// };




// export const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };


