import { ALink } from "./ALink.js";
import { ListItem } from "./ListItem.js";

const { React } = window;

interface ListProps {}

interface ListItem {
  id: number;
  href: string;
  text: string;
  isExternal: boolean;
}

interface ListState {
  listItems: ListItem[];
}

export class List extends React.Component {
  state: ListState;

  constructor(props: ListProps) {
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
          href: "https://www.electronjs.org",
          text: "React Electron",
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
    return (
      <ul>
        {this.state.listItems.map(({ id, href, isExternal, text }) => (
          <ListItem key={id}>
            <ALink href={href} isExternal={isExternal}>
              {text}
            </ALink>
          </ListItem>
        ))}
      </ul>
    );
  }
}
