import Typewriter from 'typewriter-effect';

//Doc: https://github.com/tameemsafi/typewriterjs
const HomeTypewriter = () => {
    return (
        <>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .changeDelay(50)
                        .typeString("<span class='highlightText'>High Quality</span> Hand Tools since 1941")
                        .pauseFor(2500)
                        .deleteAll(1)
                        .typeString("Extremely <span class='highlightText'>Strong</span><br/><span class='highlightText'>Precise</span><br/>and<br/><span class='highlightText'>Dependable</span>")
                        .pauseFor(2500)
                        .deleteAll(1)
                        .typeString("Built to Last<br/>Crafted with <span class='highlightText'>Experience</span>")
                        .pauseFor(2500)
                        .deleteAll(1)
                        .typeString("Your Partner for <br/>Every Job<br/>Every Time<br/><br/><span class='highlightText'>Ferrolink Industries Co.</span>")
                        .pauseFor(2500)
                        .start();
                }}
                options={{
                    autoStart: true,
                    loop: false,
                    skipAddStyles: false,
                    cursor: ""
                }}
            />
        </>
    )
}

export default HomeTypewriter