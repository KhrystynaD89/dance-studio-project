import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="video-section">
        <h2>Our Mission</h2>
        <div className="video-container-1">
          <iframe
            width="365"
            height="250"
            src="https://www.youtube.com/embed/iiMIc-yCQwA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, architecto? A fugiat, doloremque officia dolore eligendi magnam nostrum, nihil maxime soluta animi aspernatur esse, excepturi molestias obcaecati voluptates ab sunt iure? Dolorum officia repellendus rerum incidunt beatae nesciunt maxime voluptate aliquid error hic sapiente, perspiciatis obcaecati nulla quia pariatur quod.</p>

          <div className="video-section-2">
          <iframe
            width="365"
            height="250"
            src="https://www.youtube.com/embed/azlXrl_z3To"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <button> button</button>
        
      </div>


      <div className="about-content">
        <h2>Our Mentor</h2>
        <img src="/images/teacher.png" alt="About" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
          nulla quam officia facere eos. Asperiores pariatur repellendus
          corrupti hic quod? Illum corrupti soluta, a veritatis accusantium
          quam, numquam, cupiditate provident adipisci fugit eos minima mollitia
          et porro cum sed doloribus labore? Labore minima aut recusandae
          aliquam molestiae enim deserunt pariatur, maxime facilis ad officiis
          esse repellendus rem voluptate dolor possimus odit quae harum suscipit
          officia id voluptas. Cupiditate amet cum id officiis assumenda fugiat
          aspernatur, dolorem dicta dignissimos ea est, laboriosam dolorum harum
          molestiae iusto? Nulla facere est rem explicabo vitae modi laborum
          harum ab iste quibusdam sunt molestiae dicta vero nesciunt optio
          libero totam dolorum nam asperiores distinctio voluptatibus
          consequatur, reprehenderit reiciendis. Sequi blanditiis nam rerum, id
          ducimus saepe necessitatibus possimus suscipit eaque reprehenderit
          dolorum, atque nisi voluptate unde reiciendis ipsa dignissimos,
          praesentium distinctio numquam rem? Natus cum, ipsum illum sint dolor
          aliquid nobis quibusdam corporis atque eligendi voluptatibus optio
          numquam qu.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
