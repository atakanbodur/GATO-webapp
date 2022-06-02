import React from "react";
import Cards from "./Cards";
import team from "../team";

class About extends React.Component {
    render() {
        return (
            <div>
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet, per ne falli tincidunt neglegentur, viderer vituperata vituperatoribus has et. In vivendo noluisse complectitur sea, per ne adipisci mediocritatem. At usu modo definitiones, veritus delectus ea pro. Solum indoctum intellegat no sit.
                    Est porro ocurreret te, at eam graeci urbanitas. Pro ut quot consul iriure, est lorem vituperata ad, cu enim inimicus cum. Sed dicant intellegebat an. No suas omnium latine has. Periculis complectitur an vis, eam vidit commodo intellegam ei, ea mei solum appareat detraxit.</p>

                <h1>Our Company</h1>
                <img src="https://cronopiosidiomas.com/wp-content/uploads/2019/07/gato-de-espaldas-animales-gatos-11477797.jpg.png" alt="Our company logo"></img>
                <p>Lorem ipsum dolor sit amet, per ne falli tincidunt neglegentur, viderer vituperata vituperatoribus has et. In vivendo noluisse complectitur sea, per ne adipisci mediocritatem. At usu modo definitiones, veritus delectus ea pro. Solum indoctum intellegat no sit.
                 Est porro ocurreret te, at eam graeci urbanitas. Pro ut quot consul iriure, est lorem vituperata ad, cu enim inimicus cum. Sed dicant intellegebat an. No suas omnium latine has. Periculis complectitur an vis, eam vidit commodo intellegam ei, ea mei solum appareat detraxit.</p>
                <h1>Our Business Plan</h1>
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdZ5gyy-J7yWrlQ4YKKogzhccLA2KQg-Gatg&usqp=CAU" alt="graph"></img>
                 <p>Lorem ipsum dolor sit amet, per ne falli tincidunt neglegentur, viderer vituperata vituperatoribus has et. In vivendo noluisse complectitur sea, per ne adipisci mediocritatem. At usu modo definitiones, veritus delectus ea pro. Solum indoctum intellegat no sit.Est porro ocurreret te, at eam graeci urbanitas. Pro ut quot consul iriure, est lorem vituperata ad, cu enim inimicus cum. Sed dicant intellegebat an. No suas omnium latine has. Periculis complectitur an vis, eam vidit commodo intellegam ei, ea mei solum appareat detraxit.</p>
                 <h1>Our Team</h1>
                 <Cards
                    name = {team[0].name}
                    surname = {team[0].surname}
                    img = {team[0].img}
                    parag = {team[0].paragraph}
                 />
                <Cards
                    name = {team[1].name}
                    surname = {team[1].surname}
                    img = {team[1].img}
                    parag = {team[1].paragraph}
                 />
                <Cards
                    name = {team[2].name}
                    surname = {team[2].surname}
                    img = {team[2].img}
                    parag = {team[2].paragraph}
                 />
            </div>
        );
    }
}

export default About;