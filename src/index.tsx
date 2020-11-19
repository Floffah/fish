import {render} from "react-dom";
import * as React from "react";
import {css, StyleSheet} from "aphrodite";
import "antd/dist/antd.min.css"
import YTPlayer from "yt-player"

let styles = StyleSheet.create({
    main_image: {
        backgroundImage: "url(\"https://s3-us-west-1.amazonaws.com/soupmemes/1596896109993.jpg\")",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "fixed",
        left: 0,
        top: 0,
        height: "100%",
        width: "100%",
        pointerEvents: "none",
    },
    nothing_happens: {
        position: "fixed",
        bottom: 2,
        right: 2
    }
});

document.addEventListener("readystatechange", () => {
    render(<div>
        <iframe id="themusiclol"
                src="https://www.youtube.com/embed/blY5aYXVnC4?loop=1&controls=0&disablekb=1&enablejsapi=1"/>
        <div className={css(styles.main_image)}>
            <p className={css(styles.nothing_happens)}>You may need to click the top left if nothing happens</p>
        </div>
    </div>, document.getElementById("root"), () => {
        const player = new YTPlayer('#themusiclol', {
            captions: false,
            controls: false,
            fullscreen: false,
            annotations: false,
            modestBranding: true,
        });
        player.load("blY5aYXVnC4", true);
        player.on("cued", () => {
            // player.seek(1);
            player.play();
            player.pause();
            player.play();
        })
        player.on("ended", () => {
            player.seek(0);
            player.play();
        })
    });
});
//https://www.youtube.com/embed/8IJzYAda1wA?loop=1&autoplay=1
