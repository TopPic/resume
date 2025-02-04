'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/Carousel.module.css';

gsap.registerPlugin(ScrollTrigger);

 function ScrollableSections() {
  const pageWrapperRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const pageWrapper = pageWrapperRef.current;
    const items = sectionRefs.current.filter(Boolean); // Remove undefined values

    if (!items.length || !pageWrapper) return;

    setTimeout(() => {
      items.forEach((container) => {
        if (!container) return;
        let localItems = container.querySelectorAll('.item');
        if (localItems.length === 0) return;

        let distance = () => {
          let lastItemBounds = localItems[localItems.length - 1]?.getBoundingClientRect();
          let containerBounds = container?.getBoundingClientRect();
          if (!lastItemBounds || !containerBounds) return 0;
          return Math.max(100, lastItemBounds.right - containerBounds.right); // ป้องกันค่าเป็น 0
        };

        gsap.to(container, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top center',
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true
          }
        });
      });

      ScrollTrigger.refresh(); // Refresh after setup
    }, 300); // Delay to allow DOM to load
  }, []);

  return (
    <div ref={pageWrapperRef} className={styles.pageWrapper}>
      <header className={styles.header}>Pin and scroll section horizontally only when necessary to reveal content</header>
      <section className={styles.section}>
        <div className={styles.container}>
          <ul className={`${styles.items} ${styles.scrollxSection}`} ref={(el) => el && (sectionRefs.current[0] = el)}>
            {[...Array(15)].map((_, i) => (
              <li className={styles.item} key={i}>
                <img src="https://placehold.co/600x400" alt={`Placeholder ${i + 1}`} />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className={styles.nextSections}>
        <div className={styles.container}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nesciunt ut possimus est exercitationem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nesciunt ut possimus est exercitationem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nesciunt ut possimus est exercitationem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nesciunt ut possimus est exercitationem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nesciunt ut possimus est exercitationem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nesciunt ut possimus est exercitationem.  
          </p>
        </div>
      </section>
    </div>
  );
}
export default ScrollableSections;