import { ALink } from "./ALink.js";
import { ListItem } from "./ListItem.js";

const { React } = window;

interface Listitem {
  id: number;
  href: string;
  text: string;
  isExternal: boolean;
}

interface Props {}

interface State {
  listItems: Listitem[];
}

export class List extends React.Component<Props, State> {
  state: State;

  constructor(props: Props) {
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
          href: "https://naver.com",
          text: "Naver",
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
