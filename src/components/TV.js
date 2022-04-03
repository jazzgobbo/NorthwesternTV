import React from "react";

function TV() {
  return (
    <div className="tv">
      <div class="container-fluid">
      <p class="m-2 text-center text-black">
            scroll for sexy content
          </p>
        <div class="row">
          <div class="col-lg-7">
            <h2 class="font-weight-light">dove</h2>
            <iframe width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/kbtMW1oZkjU" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
           </div>

          <div class="col-lg-4">
            <p class="text-center text-black">
                nice nice sketch so fun to watch hehe
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-7">    
            <h2 class="font-weight-light">b.f.r</h2>
            <iframe width="560" 
                height="315" 
                src="https://www.youtube.com/embed/SUwTAkHgwRI" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
           </div>

           <div class="col-lg-4">
            <p class="text-center text-black">
                even nicer nice sketch so fun to watch hehe
            </p>
          </div>
        </div>

         
          

      </div>
    </div>
  );
}

export default TV;