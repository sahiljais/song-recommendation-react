import React, { useState } from "react";
import "./styles.css";

var songGenre = ["Pop", "Electronic", "Romantic"];

export default function App() {
  var [genreValue, setgenreValue] = useState(1);

  function genreclickHandler(genre) {
    var genreClicked = genre;
    console.log(genre);
    if (genreClicked === "Pop") {
      setgenreValue(1);
    } else if (genreClicked === "Electronic") {
      setgenreValue(2);
    } else setgenreValue(3);
  }

  return (
    <body>
      <div className="App">
        <div class="container-center">
          <h2>Song Recommendations</h2>

          <div class="text">
            {songGenre.map((genre) => {
              return (
                <span
                  style={{
                    backgroundColor: "red",
                    padding: "0.5rem",
                    margin: "0.2rem",
                    borderRadius: "0.5rem"
                  }}
                  onClick={() => genreclickHandler(genre)}
                  key={genre}
                >
                  {genre}
                </span>
              );
            })}
          </div>
          <hr></hr>
          {genreValue === 1 && (
            <div>
              <ol class="center list-non-bullet">
                <li class="center"> Without Me</li>
                <small>Halsey: 9.5/10</small>
                <hr></hr>
                <li class="center">2U</li>
                <small>Justin Bieber: 8/10</small>
                <hr></hr>
                <li class="center">Here with Me</li>
                <small>Marshmello: 8/10</small>
              </ol>
            </div>
          )}
          {genreValue === 2 && (
            <div>
              <ol class="center list-non-bullet">
                <li class="center"> Higher Ground</li>
                <small>ODESZA: 9/10</small>
                <hr></hr>
                <li class="center">Goodbye</li>
                <small>Apparat: 8/10</small>
                <hr></hr>
                <li class="center">Walls</li>
                <small>Apparat: 8/10</small>
              </ol>
            </div>
          )}
          {genreValue === 3 && (
            <div>
              <ol class="center list-non-bullet">
                <li class="center">A Thousand Years</li>
                <small>Christina Perri: 9.5/10</small>
                <hr></hr>
                <li class="center">Thinking Out Loud</li>
                <small>Ed Sheeran: 8.5/10</small>
                <hr></hr>
                <li class="center">Can't Help Falling In Love</li>
                <small>Elvis Presley: 8/10</small>
              </ol>
            </div>
          )}
        </div>
      </div>
    </body>
  );
}
