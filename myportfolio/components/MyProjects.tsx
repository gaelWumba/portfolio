import React from "react";

type Props = {};

function MyProjects({}: Props) {
  return (
    <div className="container w-scree h-screen flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full mt-6">
			<section className="w-full">
      <h2 id="work" className="secondary-title">My work</h2>
				<p className="section-paragraph">Donner vie à une idée est une des misions principal d'un développeur front-end.</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-6">
          <a href="https://github.com/EpitechWebAcademiePromo2023/W-WEB-090-PAR-1-2-spotify-veronique.dang">
            <img src="spotify.png" className="w-full bg-nav h-32 lg:h-72 object-cover"/>
          </a>
					<a href="https://github.com/prism404/my_irc">
            <img src="myIrc.png" className="w-full bg-nav h-32 lg:h-72 object-cover"/>
          </a>
          <a href="https://github.com/EpitechWebAcademiePromo2023/W-JSC-501-PAR-1-2-puissance4-gael.wumba-buatu">
            <img src="puissance4.png" className="w-full hidden md:block bg-nav h-32 lg:h-72 object-cover"/>
          </a>
          <div>
            <a href="https://github.com/EpitechWebAcademiePromo2023/W-WEB-090-PAR-1-2-wysiwyg-gael.wumba-buatu">
              <img src="wysiwyg.png" className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover"/>
            </a>
          </div>
					
				</div>
			</section>
		</div>
  );
}

export default MyProjects;
