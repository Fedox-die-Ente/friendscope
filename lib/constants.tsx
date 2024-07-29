import GoogleSvg from "../components/svgs/GoogleSvg";
import AppleSvg from "../components/svgs/AppleSvg";
import DiscordSvg from "../components/svgs/DiscordSvg";
import GitHubSvg from "../components/svgs/GitHubSvg";

export const walkThroughSteps = [
    {
        id: 1,
        title: "Discover Meaningful Connections",
        desc: "Join FriendScope today and explore a world of meaningful connections. Swipe, match, and meet like-minded people.",
        images: {
            light: require('../assets/mockups/walkthrough-first-light.png'),
            dark: require('../assets/mockups/walkthrough-first-dark.png')
        }
    },
    {
        id: 2,
        title: "Be Yourself, Stand Out from the Crowd.",
        desc: "Tell your story. Share your interests, hobbies, and what you're looking for. Be authentic and make a lasting impression.",
        images: {
            light: require('../assets/mockups/walkthrough-second-light.png'),
            dark: require('../assets/mockups/walkthrough-second-dark.png')
        }
    },
    {
        id: 3,
        title: "Find Your Perfect Friend Today",
        desc: "Discover real connections with FriendScope's intelligent matchmaking. Start swiping to find your perfect match today.",
        images: {
            light: require('../assets/mockups/walkthrough-third-light.png'),
            dark: require('../assets/mockups/walkthrough-third-dark.png')
        }
    }
]

export const socialButtons = [
    {
        id: 1,
        title: "Continue with Google",
        svg: <GoogleSvg/>,
    },
    {
        id: 2,
        title: "Continue with Apple",
        svg: <AppleSvg/>,
    },
    {
        id: 3,
        title: "Continue with Discord",
        svg: <DiscordSvg width={20} height={25}/>,
    },
    {
        id: 4,
        title: "Continue with GitHub",
        svg: <GitHubSvg width={25} height={25}/>,
    }
]