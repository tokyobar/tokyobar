import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'
import { motion } from 'framer-motion'
import { variants } from '../library/framer'

const CardDeal = () => (
    <section className={layout.section}>
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={variants}
            className={layout.sectionInfo}
        >
            <h2 className={styles.heading2}>
            Quality Matters:  <br className="sm:block hidden" /> The TokyoBar Difference
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Each vape is crafted with precision and care, ensuring a premium experience for our valued customers.
            </p>

            <Button styles={`mt-10`} />
        </motion.div>

        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={variants}
            className={layout.sectionImg}
        >
            <img
                src={card}
                alt="billing"
                className="md:max-w-none max-w-lg w-[100%] h-auto"
            />
        </motion.div>
    </section>
)

export default CardDeal
