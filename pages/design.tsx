import { FC } from "react";
import Link from "next/link";

import Page from "../components/page";
import Button from "../components/Button";

const ComponentTitle: FC = ({ children }) => (
  <h3>
    {children}
    <style jsx>{`
      h3 {
        margin: 3rem 0 2rem;
      }
    `}</style>
  </h3>
);

const ComponentModal: FC<{ title: string }> = ({ title, children }) => (
  <div>
    <style jsx>
      {`
        h4 {
          margin: 2rem 0 1rem;
          text-transform: uppercase;
          letter-spacing: 0.1rem;
          color: #666;
        }
      `}
    </style>
    <h4>{title}</h4>
    {children}
  </div>
);

export default () => (
  <Page title="Design | Web Wombats">
    <ComponentTitle>Typography</ComponentTitle>
    <ComponentModal title="Modular Scale">
      <h1 className="f0">XXXL - Heading 0</h1>
      <h1 className="f1">XXL - Heading 1</h1>
      <h2 className="f2">XL - Heading 2</h2>
      <h3 className="f3">LG - Heading 3</h3>
      <h3 className="f4">MD - Heading 4</h3>
      <h3 className="f5">SM - Heading 5</h3>
      <h3 className="f6">XS - Heading 6</h3>
      <p className="f-reset">BASE - This is a paragraph.</p>
    </ComponentModal>

    <ComponentTitle>Button & Link</ComponentTitle>
    <ComponentModal title="Normal Button">
      <Button href="#">Learn Next.js</Button>
    </ComponentModal>
    <ComponentModal title="Small Button">
      <Button href="#" small>
        Learn Next.js
      </Button>
    </ComponentModal>
    <ComponentModal title="Inverted Button">
      <Button href="#" invert>
        Learn Next.js
      </Button>
    </ComponentModal>
    <ComponentModal title="Inverted Small Button">
      <Button href="#" invert small>
        Learn Next.js
      </Button>
    </ComponentModal>
    <ComponentModal title="Loading Button">
      <Button type="submit" loading>
        Loading
      </Button>
    </ComponentModal>
    <ComponentModal title="External Link">
      <Link href="https://mynameisyuri.com">
        <a>https://mynameisyuri.com</a>
      </Link>
    </ComponentModal>
  </Page>
);
