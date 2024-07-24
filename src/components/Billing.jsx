
import styles, { layout } from '../style'
import { motion } from 'framer-motion'
import { variants } from '../library/framer'

const Billing = () => (
    <section id="product" className={layout.sectionReverse}>
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={variants}
            className={layout.sectionImgReverse}
        >
            <img
                src={bill}
                alt="billing"
                className="md:max-w-none max-w-lg w-[100%] h-auto relative z-[5]"
            />

            {/* gradient start */}
            <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
            <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
            {/* gradient end */}
        </motion.div>

        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={variants}
            className={layout.sectionInfo}
        >
            <h2 className={styles.heading2}>
                Easily control your <br className="sm:block hidden" /> billing &
                invoicing
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Elit enim sed massa etiam. Mauris eu adipiscing ultrices
                ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor
                integer platea placerat.
            </p>


        </motion.div>
    </section>
)

export default Billing
