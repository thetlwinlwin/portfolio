# Company Portfolio

The app is hosted in this [url](https://thetlwin-portfolio.web.app)

## What I have learnt
- React **useState** doesn't restart the animation and only texts were swapped unless there is different key. That's the reason why objects with key-value pairs were created in [constants.js](src/components/home/constants.js) and use those keys to restart animation in [text-animation.js](src/components/home/text_animation.jsx).
- There is 8px margin in body tag and it can be removed in [app.css](src/app.css)
- animation is heavily inspired by [this video](https://www.youtube.com/live/1rTaNzjGOek)
- Svg in div doesn't tend to follow justify-contents and align-items. It has be wrapped inside the div tag and use flex as [below](src/components/jump_to_btn/jump_to_btn.css).

        .jump-to-btn {
            display: inline-block;
            display: flex;
            justify-content: center;
            align-items: center;
        }

- if slow transition on hover is needed, instead of adding **transition** attribute to in the hover element, add to the main one (in this case, it is arrow2).

        .arrow2 {
            opacity: 0;
            ...
            transition: fill 1s;
        }
        .jump-to-btn:hover .arrow2 {
            fill: aqua;
        }


### home.css


        .home-text {
            opacity: 0;
            white-space: pre;
            animation-fill-mode: forwards;
            ...
        }

- **whitespace** is needed as span tag doesn't support that.
- **animation-fill-mode** is for preventing the text to return to ***0 opacity*** after animation as it is stated in home-text css. It is also in [jump_to_btn.css](src/components/jump_to_btn/jump_to_btn.css) to prevent the same scenario.

        .home-article {
            height: 100dvh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

- to take all the available height, [use **100dvh**](https://youtu.be/-sF5KsEo6gM) instead of **100vh** as it produces werid effect on mobile screen.

### portfolio_page.css

- Directly inject the className into the indicator dots to distinguish active indicator from the rest. The active indicator with transform into square and the rest will be circle. Also the transition properties were added to both "active and dot" classes. 

        transition: all 0.5s;

- The go-to-page btn was inspired by [this](https://youtu.be/iwoIuyRHy88). 