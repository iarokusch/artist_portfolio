import React from 'react'

const About = () => {
    return (
        <div className='about'>
            {/* Дві основні секції: CV та фото */}
            <div className='cv'>
                <p>Yaroslav Kusch – born in 1989 in Ukraine. I am a post-graffiti and multimedia artist, working primarily with recycled materials to create conceptual art. My artistic practice focuses on developing an abstract style of drawing, often working in series. Over the past few years, I have specialized in the tufting technique, creating unique textile works. Collaboration with other artists is a key aspect of my process, allowing for innovative and diverse projects.</p>

                <p>My education includes a degree in criticism and curatorial studies of contemporary art from UNIC University (2013) and art management from the Lviv National Academy of Arts (2016). Since 2016, I have been living and working in Berlin, where I continue to create new works and participate in international exhibitions.</p>

                <h3>Experience</h3>
                {/* Список дат та подій у вигляді термінів та їх описів */}
                <dl>
                    <dt>2014</dt>
                    <dd>Group exhibition "Urban Exploration Lviv lest", Ukraine.</dd>

                    <dt>2014</dt>
                    <dd>"Art4change", Chernivtsi, social project, StreetArt, Ukraine.</dd>

                    <dt>2015</dt>
                    <dd>“Project No. 1”, Lviv, social project, StreetArt, Ukraine.</dd>

                    <dt>2017</dt>
                    <dd>"Newwaveexhibition", Lviv, group exhibition, Ukraine.</dd>

                    <dt>2017</dt>
                    <dd>"Root Project Exhibition", Berlin, group exhibition, Germany.</dd>

                    <dt>2019</dt>
                    <dd>"Passenger", Chernivtsi, exhibition meeting with the artist, Ukraine.</dd>

                    <dt>2020</dt>
                    <dd>"Dialogs", La Spezia, group exhibition, Italy.</dd>

                    <dt>2020</dt>
                    <dd>"Zukunft Visionen", Görlitz, group exhibition, installation, Germany.</dd>

                    <dt>2021</dt>
                    <dd>Erika Walther Residence, Klotzsche, screen printing, mural, Germany.</dd>

                    <dt>2021</dt>
                    <dd>“Raum vollreinigung” Residence, Berlin, tufting, Germany.</dd>

                    <dt>2022</dt>
                    <dd>MANTISSSA exhibition, Dresden, screen printing, mural, Germany.</dd>

                    <dt>2022</dt>
                    <dd>Culterim Residence, Berlin, tufting, painting, Germany.</dd>

                    <dt>2022</dt>
                    <dd>Culterim Gallery, Berlin, group exhibition, Germany.</dd>

                    <dt>2022</dt>
                    <dd>CCCCComa Cllab Brickboat, “See the World Lying in Ruins”, Berlin, group exhibition, Germany.</dd>

                    <dt>2022</dt>
                    <dd>48 Hours Neukölln, group exhibition, Germany.</dd>

                    <dt>2023</dt>
                    <dd>Culterim | Showcase, Berlin, group exhibition, Germany.</dd>

                    <dt>2023</dt>
                    <dd>Al Dente, “Bötzow”, Berlin, group exhibition, Germany.</dd>

                    <dt>2023</dt>
                    <dd>“Schau Fenster”, Berlin, group exhibition, Germany.</dd>

                    <dt>2023</dt>
                    <dd>Initiative, “Raum Vollreinigung”, Berlin, group exhibition, Germany.</dd>
                </dl>
            </div>

            {/* Секція з фото */}
            <div className='foto'>
                <div>
                    <h2>Contacts</h2>
                    <p>kusch.artist@gmail.com</p>
                    <p> <a href="https://www.instagram.com/yaroslav.kusch/" target="_blank" rel="noopener noreferrer">
                        Instagram
                    </a></p>
                </div>
                <img src="/IMG_8263.jpg" alt="studio" />
            </div>
        </div>
    )
}

export default About

