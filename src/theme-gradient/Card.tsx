import style from './Card.module.css'

const Card = ({
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

export default Card
