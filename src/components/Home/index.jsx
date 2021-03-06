import React, { useContext, useState } from "react"
import { useSpring, animated, config } from "react-spring"
import { Waypoint } from "react-waypoint"
import { GlobalContext } from "../../pages"
import "./home.css"

const Home = () => {
  const { setValue, allRefs } = useContext(GlobalContext)
  const [on, toggle] = useState(true)
  const fadeInOut = useSpring({
    opacity: on ? 1 : 0.3,
    transform: on ? "scale(1, 1)" : "scale(0.9,0.95)",
    config: config.molasses,
  })
  const fade = useSpring({
    from: { opacity: 0 },
    opacity: 1,
    config: config.molasses,
  })

  return (
    <div ref={allRefs[0]}>
      <Waypoint bottomOffset="0%" onEnter={() => setValue(0)} />
      <animated.div style={fade} className="homeBody" />
      <Waypoint
        bottomOffset="50%"
        onEnter={() => {
          if (on) toggle(false)
        }}
        onLeave={() => {
          if (!on) toggle(true)
        }}
      />
      <animated.div style={fade} className="home-title">
        <animated.div style={fadeInOut}>Matt Zuckermann</animated.div>
      </animated.div>
      <animated.div style={fade} className="arrow">
        <span />
      </animated.div>
    </div>
  )
}

export default Home
