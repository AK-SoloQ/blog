import React from "react";
function NotFound() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="jumbotron pager">
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div className="error-details">
              Sorry, an error has occured, Requested page not found!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
