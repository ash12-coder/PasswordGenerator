import React from 'react';

const About = () =>{
return(
    <>
    <section className="about">
        <div className="about1">
            <h1>#About Our Password Generator Tool</h1>
            <p>For purpose of security on the internet, we devlop a<br/> password generator, which generates totally random<br/> passwords. we don't save IP address or use already<br/> generated password, so you can feel totally safe on our site</p>
            <br/>
            <p>it's a good idea to have at least two or three password for<br/> different type of sites. and using our password generator, you can create password<br/> for different type of sites. while you can use weaker password<br/> for blogs, strong passord are necessary for email account and online banking syatem.</p>
        </div>
        <div className="about2">
        <h1>#Strong Password Generator</h1>
            <p>Strong password can help prevent attackers from accessing your site and private information</p>
            <br/>
            <p>Though many authentication systems exist today, the<br/> majority of users sign into their computers and online sites<br/> with a username and password.</p>
            <br/>
            <p>However, a lot of people choose the same password for multiple sites<br/>and they select a simple, easy to access and remember password <br/> such as their birthday,name,family, pets etc.</p>
            <br/>
            <p>This can make it easy for people to guess your password and access your account and personal details</p>
        </div>
    </section>
    </>
)
}
export default About;