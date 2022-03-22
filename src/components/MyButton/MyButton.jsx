import './MyButton.scss'

const MyButton = ({text, outline, Icon}) => {
  return (
    <button className={`mybutton ${outline ? 'outline' : 'normal'}`}>
      {Icon && <Icon />} {text}
    </button>
  )
}

export default MyButton
