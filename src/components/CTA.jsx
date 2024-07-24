import styles from '../style'
import Button from './Button'
import { motion } from 'framer-motion'
import { variants } from '../library/framer'

const CTA = () => (
    <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={variants}
    >
        <section
            className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
        >
            <div className="flex-1 flex flex-col">
                <h2 className={styles.heading2}>Let’s try Tokyobar!</h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                We are committed to delivering the highest quality and genuine products to our valued customers. 
                </p>
            </div>

            <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
                <Button />
            </div>
        </section>
    </motion.div>
)

export default CTA
