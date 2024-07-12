import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }
      return (
        <div className="top-section">
          <h1 className="layout-text">Layout</h1>
          <div className="layouts-container">
            <div className="checkbox-container">
              <input
                checked={showContent}
                onChange={onChangeContent}
                type="checkbox"
                id="content"
                className="content-checkbox"
              />
              <label htmlFor="content">Content</label>
            </div>
            <div className="checkbox-container">
              <input
                checked={showLeftNavbar}
                onChange={onChangeLeftNavbar}
                type="checkbox"
                id="leftNavbar"
                className="left-navbar-checkbox"
              />
              <label htmlFor="leftNavbar">Left Navbar</label>
            </div>
            <div className="checkbox-container">
              <input
                checked={showRightNavbar}
                onChange={onChangeRightNavbar}
                type="checkbox"
                id="rightNavbar"
                className="right-navbar-checkbox"
              />
              <label htmlFor="rightNavbar">Right Navbar</label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
