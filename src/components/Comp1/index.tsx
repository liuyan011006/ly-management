// import './comp1.scss' //全局引入 

import styles from './comp1.module.scss'

const  Comp1 = ()=>{
  return (
    <div className={styles.box}>
      comp1
    </div>
  )
}
export default Comp1