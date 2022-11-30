import { ALink } from "./ALink.jsx";
import { ListItem } from "./ListItem.js";
const { React } = window;
export class List extends React.Component {
    state;
    constructor(props) {
        super(props);
        this.state = {
            listItems: [
                { id: 1, href: "https://reactjs.org", text: "React", isExternal: true },
                {
                    id: 2,
                    href: "https://reactnative.dev",
                    text: "React Native",
                    isExternal: true,
                },
                {
                    id: 3,
                    href: "https://euid.dev",
                    text: "EUID",
                    isExternal: true,
                },
                {
                    id: 4,
                    href: "https://google.com",
                    text: "Google",
                    isExternal: true,
                },
            ],
        };
    }
    render() {
        return (React.createElement("ul", null, this.state.listItems.map(({ id, href, isExternal, text }) => (React.createElement(ListItem, { key: id },
            React.createElement(ALink, { href: href, isExternal: isExternal }, text))))));
    }
}
//# sourceMappingURL=List.js.map