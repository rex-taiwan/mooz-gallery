import React, { useRef, useState, useEffect } from "react"
import debounce from "lodash.debounce"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const ChartsContainer = (props) => {
  const settings = {
    arrows: true,
    dots: false,
    speed: 500,
    infinite: true,
    slidesPerRow: 3,
    rows: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 478,
        settings: {
          slidesPerRow: 1,
          rows: 3,
        },
      },
    ],
  }
  const { top50TracksList, viral50TracksList } = props
  console.log(top50TracksList, "top50")
  const container = useRef(null)
  const [state, setstate] = useState({
    hasOverflow: false,
    canScrollLeft: false,
    canScrollRight: false,
  })

  const buildItems = () => {
    return (
      <Slider {...settings}>
        {top50TracksList.map((item, index) => {
          return (
            <div class="container">
              <div key={index} class="columns is-gapless is-mobile mt-2">
                <div
                  class="column is-1 has-text-left"
                  style={{ margin: "auto" }}
                >
                  <span>{index + 1}</span>
                </div>
                <div
                  class="column is-2 has-text-centered"
                  style={{
                    backgroundSize: "cover",
                    borderRadius: 5,
                    height: 50,
                    width: 50,
                    marginRight: "auto",
                    backgroundImage: `url(${
                      item.track && item.track.album.images[0].url
                    })`,
                  }}
                ></div>
                <div class="column is-6">
                  <span class="title is-7 has-text-white">
                    {item.track && item.track.name}
                    <br />
                    <span class="has-text-grey">
                      {item.track.artists[0].name}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    )
  }

  const buildItems2 = () => {
    return (
      <Slider {...settings}>
        {viral50TracksList.map((item, index) => {
          return (
            <div class="container">
              <div
                key={index}
                class="columns is-gapless is-mobile"
                style={{ marginTop: 20 }}
              >
                <div
                  class="column is-1 has-text-centered"
                  style={{ margin: "auto" }}
                >
                  <span>{index + 1}</span>
                </div>
                <div
                  class="column is-2"
                  style={{
                    backgroundSize: "cover",
                    borderRadius: 5,
                    height: 50,
                    width: 50,
                    marginRight: "auto",
                    backgroundImage: `url(${
                      item.track && item.track.album.images[0].url
                    })`,
                  }}
                ></div>
                <div class="column is-6">
                  <span class="title is-7 has-text-white">
                    {item.track && item.track.name}
                    <br />
                    <span class="has-text-grey">
                      {item.track.artists[0].name}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    )
  }

  return (
    <div class="mb4">
      <div class="ad__header">
        <h2 class="ad__headline title is-5 has-text-white">Charts</h2>
      </div>

      <TabsGroup buildItems={buildItems} buildItems2={buildItems2} />
    </div>
  )
}

export default ChartsContainer

//   <TabsGroup buildItems={buildItems} buildItems2={buildItems2} />

// const Tabs = (props) => {
//   const [selected, setSelected] = useState(props.selected || 0)
//   function handleChange(index) {
//     setSelected(index)
//   }

//   return (
//     <div>
//       <div className="tabs mt-4">
//         <ul>
//           {props.children.map((elem, index) => {
//             let style = index == selected ? "is-active" : ""
//             return (
//               <li
//                 className={style}
//                 key={index}
//                 onClick={() => {
//                   handleChange(index)
//                 }}
//               >
//                 {/* <img
//                   style={index == selected ? { filter: `invert(1)` } : {}}
//                   src={elem.props.icon}
//                   alt=""
//                 /> */}
//                 <a class="has-text-white">{elem.props.title}</a>
//               </li>
//             )
//           })}
//         </ul>
//       </div>

//       <div className="content">{props.children[selected]}</div>
//     </div>
//   )
// }

// const TabsGroup = (props) => {
//   const { buildItems, buildItems2 } = props
//   return (
//     <Tabs selected={0}>
//       <TabsContent title="Popular">{buildItems()}</TabsContent>
//       <TabsContent title="Viral">{buildItems2()}</TabsContent>
//       <TabsContent title="Discovered">
//         {/* <div class="box">omasdasd</div> */}
//       </TabsContent>
//     </Tabs>
//   )
// }

// const TabsContent = (props) => {
//   return <div>{props.children}</div>
// }
