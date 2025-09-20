import { useAnimation } from '../hooks/useAnimation'
import catSvg from '../assets/images/cat.svg'
import '../styles/animations.css'

function DancingCat() {
  const { isAnimating, toggleAnimation } = useAnimation()

  const handleCatClick = () => {
    toggleAnimation()
  }

  return (
    <div className="dancing-cat-container">
      <div
        className={`cat-wrapper ${isAnimating ? 'dancing' : ''}`}
        onClick={handleCatClick}
      >
        <img
          src={catSvg}
          alt="Dancing Cat"
          className="cat-image"
          tabIndex="0"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              handleCatClick()
            }
          }}
        />
      </div>

      <div className="controls">
        <button
          className="dance-button"
          onClick={toggleAnimation}
        >
          {isAnimating ? '🛑 멈추기' : '💃 춤추기'}
        </button>
      </div>

      <div className="description">
        <p>고양이를 클릭해서 춤을 춰보세요! 🐱✨</p>
      </div>
    </div>
  )
}

export default DancingCat