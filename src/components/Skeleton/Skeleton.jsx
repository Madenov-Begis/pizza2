import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={420}
    height={480}
    viewBox="0 0 420 480"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="200" cy="132" r="130" /> 
    <rect x="65" y="280" rx="0" ry="0" width="285" height="19" /> 
    <rect x="65" y="320" rx="0" ry="0" width="285" height="84" /> 
    <rect x="65" y="420" rx="0" ry="0" width="125" height="27" /> 
    <rect x="200" y="435" rx="0" ry="0" width="150" height="44" /> 
  </ContentLoader>
)

export default MyLoader
