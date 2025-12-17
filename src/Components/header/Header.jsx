import "./Header.css"
import Button from "../Button/Button.jsx"

export function FirstHeader (){
    
    return (
        <>
            <div className="headerContainer">
                <div>
                    
                    <img src="src/assets/Icons/Clock-icon.svg" alt="" />
                    <a href="#working">Working:Monday-Friday.9am-5pm </a>
                    
                </div>

                <div>
                    <img src="src/assets/Icons/location-icon.svg" alt="" />
                    <h4>Housdon.Wisconsin(WI), 54016</h4>
                </div>

                <div>
                    <img src="src/assets/Icons/user-icon.svg" alt="" />
                    <a href="#login">Login/Register</a>
                </div>

                <div>
                    <a href="#facebook"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
                    <a href="#x"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" stroke="currentColor" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.89 7.34c-0.09 0.33 -0.49 1.16 -1.17 1.95c-0.45 8.68 -8.87 11.5 -14.64 8.59c-0.79 -1.05 2.85 -0.62 4.18 -2.63c-5.03 -2.57 -4.63 -9.44 -3.62 -9.16c2.37 3.19 6.19 3.48 6.81 3.19c0 -0.73 -0.31 -2.32 1.41 -3.65c0.99 -0.71 3.06 -1.34 4.93 0.69c0.32 0.21 0.78 0.3 1.47 0.15c0.41 -0.21 0.95 -0.07 0.67 0.66Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/></path></svg></a>
                    <a href="#sype"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M13.005 18.423a2 2 0 0 1 1.237.207a3.25 3.25 0 0 0 4.389-4.389a2 2 0 0 1-.207-1.237q.077-.495.077-1.004a6.5 6.5 0 0 0-7.504-6.423A2 2 0 0 1 9.76 5.37a3.25 3.25 0 0 0-4.389 4.39a2 2 0 0 1 .207 1.237Q5.5 11.49 5.5 12a6.5 6.5 0 0 0 7.504 6.423M12.001 20.5a8.5 8.5 0 0 1-8.4-9.81a5.25 5.25 0 0 1 7.09-7.09q.642-.1 1.31-.1a8.5 8.5 0 0 1 8.4 9.81a5.25 5.25 0 0 1-7.09 7.09q-.642.1-1.31.1m.053-3.5C9.252 17 8 15.62 8 14.586c0-.532.39-.902.928-.902c1.2 0 .887 1.725 3.125 1.725c1.143 0 1.776-.624 1.776-1.261c0-.384-.188-.808-.943-.995l-2.49-.624c-2.006-.504-2.37-1.592-2.37-2.612C8.027 7.797 10.019 7 11.89 7c1.72 0 3.755.956 3.755 2.228c0 .545-.479.863-1.011.863c-1.023 0-.835-1.418-2.9-1.418c-1.023 0-1.596.462-1.596 1.126s.803.876 1.502 1.035l1.836.409C15.49 11.695 16 12.876 16 13.989C16 15.713 14.675 17 12.015 17z"/></svg></a>
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="white"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="white" d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm0 2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1M8 10a1 1 0 0 1 .993.883L9 11v5a1 1 0 0 1-1.993.117L7 16v-5a1 1 0 0 1 1-1m3-1a1 1 0 0 1 .984.821a6 6 0 0 1 .623-.313c.667-.285 1.666-.442 2.568-.159c.473.15.948.43 1.3.907c.315.425.485.942.519 1.523L17 12v4a1 1 0 0 1-1.993.117L15 16v-4c0-.33-.08-.484-.132-.555a.55.55 0 0 0-.293-.188c-.348-.11-.849-.052-1.182.09c-.5.214-.958.55-1.27.861L12 12.34V16a1 1 0 0 1-1.993.117L10 16v-6a1 1 0 0 1 1-1M8 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2"/></g></svg></a>
                    
                </div>
            </div>

            <div className="secondHeaderContainer">
                <div>
                    <img src="/edunity-logo.png" alt="logo" />
                </div>
                <div className="homeContactArea">
                    <a href="#home">Home</a>
                    <a href="#AboutUs">About Us</a>
                    <a href="#Courses">Courses</a>
                    <a href="#pages">Pages</a>
                    <a href="#blogs">Blogs</a>
                    <a href="#contact">Contact</a>
                </div>

                <div>
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"/></svg>
                </div>

                <Button text="Contact Us"/>
               


            </div>
                


        </>
    )
}

export default FirstHeader;