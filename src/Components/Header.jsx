import "../assets/css/header.css"
import "../assets/css/workpage.css"

function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="headercontainer">
            <span className="name">ANANT VIKRAM SINGH</span>
            <div >
              <ul className="menubar"  data-animation="to-top">
                <li>
                  <a href="http://localhost:3000/">
                    <span>Home</span>
                    <span>
                      <i class="fa-solid fa-house" aria-hidden="true"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="http://localhost:3000/about">
                    <span>About</span>
                    <span>
                      <i class="fa-solid fa-address-card" aria-hidden="true"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="http://localhost:3000/workpage">
                    <span>Work</span>
                    <span>
                      <i class="fa-solid fa-list-check" aria-hidden="true"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="http://localhost:3000/contactpage">
                    <span>Contact</span>
                    <span>
                      <i class="fa-solid fa-phone" aria-hidden="true"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>


      </header>

    </>
  )
}
export default Header