function BfterNav() {
  return (
    <div className="includingPanel col-11 m-auto">
      <div className="allProjects ">
        <h2 className="mb-5 techs shadowed  bracketDiv">
          Technologies I've worked with:
        </h2>{" "}
        <div className="main1">
          <div>Languages</div>
          <div>HTML, CSS, JavaScript</div>
          <nav>
            <div className="div ">
              <img className=" btn" src="html.png" alt="" />
            </div>
            <div>
              <img className="btn" src="css3.png" alt="" />
            </div>
            <div>
              <img className="btn" src="javascript.png" alt="" />
            </div>
          </nav>
        </div>
        <div className="main1">
          <div>CSS Frameworks</div>
          <div>Bootstrap</div>
          <nav>
            <div>
              <img className="btn" src="bootstrap.png" alt="" />
            </div>
          </nav>
        </div>
        <div className="main1">
          <div>JS Frameworks</div>
          <div>React</div>
          <nav>
            {" "}
            <div>
              <img className="btn" src="react.png" alt="" />
            </div>
          </nav>
        </div>{" "}
        <div className="main1">
          <div>Backend Routing</div>
          <div>NextJS, NodeJS and ExpressJS</div>
          <nav>
            {" "}
            <div>
              <img className="btn" src="nextjs.png" alt="" />
            </div>{" "}
            <div>
              <img className="btn" src="node-js.png" alt="" />
            </div>
            <div>
              <img className="btn" src="express.png" alt="" />
            </div>
          </nav>
        </div>{" "}
        <div className="main1">
          <div>Databases</div>
          <div>Supabase and MongoDB</div>
          <nav>
            {" "}
            <div>
              <img className="btn" src="supabase.png" alt="" />
            </div>
            <div>
              <img className="btn" src="mongodb.png" alt="" />
            </div>
          </nav>
        </div>
        <div>
          <h2 className="mysteryh2 mt-5">
            <a
              // target for open link in new tab
              target="_blank"
              className="btn btn-success mb-5"
              type="button"
              href="https://github.com/alexxygg"
            >
              ***Check my GitHub profile out!***
            </a>
          </h2>
        </div>
        <div className="main2">
          <h2 className="mb-5 shadowed  bracketDiv">My projects </h2>
          <div className=" projectsDiv m-auto ">
            <div>
              <p className="text-center">Calculator</p>
              <a href="https://alexxyggcalculator.netlify.app/" target="_blank">
                {" "}
                <img className="shadowedLess" src="./calculatorDemoPic.png" />
              </a>
            </div>
            <div>
              <p className="text-center">Etch-a-Sketch</p>
              <a
                href="https://alexxygg-etch-a-sketch.netlify.app/"
                target="_blank"
              >
                <img className="shadowedLess" src="./etchAsketchDemoPic.png" />
              </a>
            </div>
            <div>
              <p className="text-center">Rock Paper Scissors</p>
              <a href="https://alexxygg-p-rock-z.netlify.app/" target="_blank">
                <img className="shadowedLess" src="./rpsDemoPic.png" />
              </a>
            </div>
            <div>
              <p className="text-center">yelpCamp Clone</p>
              <a
                href="https://alexxygg-yelpcamp.herokuapp.com/"
                target="_blank"
              >
                <img className="shadowedLess" src="./yelpCampDemoPic.png" />
              </a>
            </div>
            <div>
              <p>Counter</p>
              <a href="https://alexxygg-counter.netlify.app/" target="_blank">
                <img className="shadowedLess" src="./counterDemoPic.png" />
              </a>
            </div>
            <div>
              <p>CRUD Notes App</p>
              <a href="https://alexxygg-notes-app.netlify.app/" target="_blank">
                <img className="shadowedLess" src="./notesAppDemoPic.png" />
              </a>
            </div>
            <div>
              <p>Coin Machine!</p>
              <a
                href="https://alexxygg-coin-machine.netlify.app/"
                target="_blank"
              >
                <img className="shadowedLess" src="./coinMachineDemoPic.png" />
              </a>
            </div>
            <div>
              <p>In Progress</p>
              <a href="" target="_blank">
                <img className="shadowedLess" src="./workInProgress.jpg" />
              </a>
            </div>
            <div>
              <p>In Progress</p>
              <a href="" target="_blank">
                <img className="shadowedLess" src="./workInProgress.jpg" />
              </a>
            </div>{" "}
            <div>
              <p>In Progress</p>
              <a href="" target="_blank">
                <img className="shadowedLess" src="./workInProgress.jpg" />
              </a>
            </div>{" "}
            <div>
              <p>In Progress</p>
              <a href="" target="_blank">
                <img className="shadowedLess" src="./workInProgress.jpg" />
              </a>
            </div>{" "}
            <div>
              <p>In Progress</p>
              <a href="" target="_blank">
                <img className="shadowedLess" src="./workInProgress.jpg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BfterNav;
