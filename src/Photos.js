import React from "react";


export default function Photos(props) {
    if(props.photos){
    return (
        <section >
            <div className="row">
                {props.photos.map(function(images, index){
            return (
              <div className="col-4 photos" key={index}>
                <a href={images.src.landscape} target="_blank">
                  <img src={images.src.landscape} className="img-fluid" />
                </a>
              </div>
            );
                })}
            </div>
        </section>
            )  
    } else {
        return null
    }
}   