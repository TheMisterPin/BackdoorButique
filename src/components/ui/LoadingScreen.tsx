import './animations.css'
const loadingText = "LOADING";   
export default function LoadingScreen() {
  return (
    
    <>  
  <section>
   

<div className='loadingScreen'>
    <div className="waviy loadingTitle">
        {loadingText.split('').map((char, index) => (
            <span key={index} style={{ animationDelay: `${0.1 * (index + 1)}s` }}>{char}</span>
        ))}
    </div>
</div>
          
 
   </section>
</>
  )
}
