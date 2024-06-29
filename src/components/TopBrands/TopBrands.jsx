import React from 'react'
import styles from './TopBrands.module.css'
import { brands } from '../../assets/assets'
import BestSeller from '../BestSeller/BestSeller'

const TopBrands = () => {

  return (
    <>

      <div className={styles["brand-section"]}>
        <div className={styles["heading"]}>
          <hr className={styles["hr-left"]} />
          <h2>Top Brands</h2>
          <hr className={styles["hr-right"]} />
        </div>
        <div className={styles["brand-background"]}>
          <div className={styles["bar"]}>
            {brands.map((item, index) => (
              <div key={index} className={styles["card"]}>
                <img src={item} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className={styles["heading-2"]}>
          <div class={`${styles["spot"]} ${styles["spot1"]}`}></div>
          <div class={`${styles["spot"]} ${styles["spot2"]}`}></div>
          <div class={`${styles["spot"]} ${styles["spot3"]}`}></div>
          <h1>Get Div coins on every order</h1>
        </div>


      </div>
    </>
  )
}

export default TopBrands
