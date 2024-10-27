import style from './Card2.module.css'

const Card2 = ({
  children,
  isBtn,
}: {
  children: React.ReactNode
  isBtn?: boolean
}) => {
  return (
    <div className={style.card + ' ' + (isBtn ? style.btn : '')}>
      {children}
    </div>
  )
}

export default Card2
