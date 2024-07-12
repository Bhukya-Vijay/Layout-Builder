import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-navbar-menu-container">
              <h1 className="nav-heading">Left Navbar Menu</h1>
              <ul className="menu-items-container">
                <li className="left-menu-item">item 1</li>
                <li className="left-menu-item">item 2</li>
                <li className="left-menu-item">item 3</li>
                <li className="left-menu-item">item 4</li>
              </ul>
            </div>
          ) : null}

          {showContent ? (
            <div className="content-container">
              <h1 className="content-heading">Content</h1>
              <p className="content-para">
                Lorem ipsum dolor sit amet, Consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}

          {showRightNavbar ? (
            <div className="right-navbar-menu-container">
              <h1 className="nav-heading">Right Navbar</h1>
              <div className="menu-items-container">
                <p className="right-menu-item">Ad 1</p>
                <p className="right-menu-item">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
