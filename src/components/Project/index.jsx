import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import navigator from "../../js/navigator"
import imageInfo from "../../js/imageInfo"
import DemoLineNYT from "../DemoLineNYT"
import DemoLineSnippets from "../DemoLineSnippets"
import SlideAnimation from "../SlideAnimation"
import githubIcon from "../../images/github.png"

const Project = ({ fade, index }) => {
  const [mouseIn, hoverChange] = useState(false)
  const hoverAnimation = useSpring({
    opacity: mouseIn ? 0.9 : 0,
    transform: mouseIn ? "scale(1, 1)" : "scale(0.2,0.2)",
  })
  return (
    <React.Fragment className="hiddenImage" key={index}>
      <animated.div style={fade} className="projectOpaqueBackground">
        <div>
          <div className="repoImageWrapper">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={imageInfo[index].deployLink}
            >
              <img
                onMouseEnter={() => hoverChange(true)}
                onMouseLeave={() => hoverChange(false)}
                className="repoImages"
                // src={[...Images][index]}
                src={imageInfo[index].image}
                alt={imageInfo[index].appName}
              />
              {!navigator() ? (
                <SlideAnimation
                  index={index}
                  imageInfo={imageInfo}
                  hoverChange={hoverChange}
                  hoverAnimation={hoverAnimation}
                  animated={animated}
                />
              ) : (
                <div />
              )}
            </a>
          </div>
          <div className="repoUrlDiv">
            <a
              id="noDecoration"
              target="_blank"
              rel="noopener noreferrer"
              href={imageInfo[index].deployLink}
            >
              <span className="repoUrlLinks">{imageInfo[index].appName}</span>
            </a>
            <span id="paddingDivider">|</span>
            <a
              target="_blank"
              id="noDecoration"
              rel="noopener noreferrer"
              href={imageInfo[index].repoLink}
            >
              <span className="repoUrlLinks">
                <img className="projectIcon" src={githubIcon} alt="github" />
              </span>
            </a>
            <div className="shortBio">{imageInfo[index].shortBio}</div>
          </div>
          <div>
            <br />
            {imageInfo[index].appName === "NYT Searcher" && <DemoLineNYT />}
            {imageInfo[index].appName === "Snippets." && <DemoLineSnippets />}
          </div>
        </div>
      </animated.div>
    </React.Fragment>
  )
}

export default Project
