import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

const Header = () => {
  return (
    <Nav>
      <ul>
        <li>
          <Link href="/spinbutton">스핀버튼</Link>
        </li>
        <li>
          <Link href="/carousel">캐러셀</Link>
        </li>
        <li>
          <Link href="/navigation">네비게이션</Link>
        </li>
      </ul>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  width: 100%;
  margin: 2rem 0;

  ul {
    display: flex;
    justify-content: center;

    li {
      margin: 1rem;

      > a {
        padding: 0.8rem;

        border: 0.15rem solid #333333;
        border-radius: 0.5rem;
      }
    }
  }
`;
