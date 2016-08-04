var banner = document.getElementById('experience')
var scream = document.createElement('audio')
var title = document.getElementById('title')
var enter = document.getElementById('enter')

TweenLite.set('#monster', {x: 600, y: 700, xPercent: -50, yPercent: -50, rotation: -45, scale: 0.75});
TweenLite.set('#claws', {x: 150, y: 100, xPercent: -50, yPercent: -50});

timeline = new TimelineLite({
  paused: true
})
  .to('#firstBack', 0.6, {x:-300, y:0}, 'transition')
  .to('#secondBack', 0.6, {x:-300, y:0}, 'transition')
  .to('#monster', 0.1, {x:200, y:600})
  .to('#button', 0.9, {x:0, y:-400})

banner.addEventListener('mouseenter', function(){
  timeline.play()
  scream.setAttribute('src', 'sound/scream.mp3')
  scream.setAttribute('autoplay', '')
  title.style.visibility = 'hidden'
  enter.style.visibility = 'hidden'
  banner.appendChild(scream)
  banner.classList.add('darkScreen')
  banner.classList.remove('lightScreen')
})
banner.addEventListener('mouseleave', function(){
  timeline.reverse()
  title.style.visibility = 'visible'
  enter.style.visibility = 'visible'
  banner.classList.add('lightScreen')
  banner.classList.remove('darkScreen')
  scream.parentNode.removeChild(scream)
})

// banner.addEventListener('mouseleave', function(){
//     timeline.restart()
// })
