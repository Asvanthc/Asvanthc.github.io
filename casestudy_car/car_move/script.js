gsap.set('#car-svg', { x: '150%' });
gsap.to('#car-svg', { x: '0', duration: 7 });

gsap.to('.rear-wheel', { rotation: -360, transformOrigin: 'center', duration: 7 });