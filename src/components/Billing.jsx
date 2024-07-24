import { Blueberry, Grape, Lushkiwi, MangoIce, Mangostrawberry, MintIce, Peachice, Strawberrykiwi, Strawberrywatermelon, Watermelon } from '../assets';
import styles, { layout } from '../style';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { variants } from '../library/framer';

const images = [Blueberry, Grape, Lushkiwi, MangoIce, Mangostrawberry, MintIce, Peachice, Strawberrykiwi, Strawberrywatermelon, Watermelon];
const texts = ["Blueberry Ice", "Grape Ice", "Lush kiwi Ice", "Mango Ice", "Mango Strawberry Ice", "Mint Ice", "Peach Ice", "Strawberry Kiwi", "Strawberry Watermelon Ice", "Watermelon Ice"];

const Billing = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="product" className={layout.sectionReverse}>
            <motion.div
                initial="offscreen"
                animate="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants}
                className={layout.sectionImgReverse}
            >
                <img
                    src={images[currentIndex]}
                    alt={texts[currentIndex]}
                    className="md:max-w-none max-w-lg w-[100%] h-auto relative z-[5]"
                />

                {/* gradient start */}
                <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
                <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
                {/* gradient end */}
            </motion.div>

            <motion.div
                initial="offscreen"
                animate="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants}
                className={layout.sectionInfo}
            >
                <h2 className={styles.heading2}>
                    All new Flavours <br className="sm:block hidden" /> from TokyoBar
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    {texts[currentIndex]}
                </p>
            </motion.div>
        </section>
    );
};

export default Billing;
