import Link from "next/link";
import styles from "/styles/Home.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  const [showBuyerLinks, setShowBuyerLinks] = useState(false);
  const [showDealerLinks, setShowDealerLinks] = useState(false);

  const router = useRouter();

  const renderIndexLink = () => {
    if (router.pathname !== "/") {
      return (
        <li>
          <Link href="/">Home</Link>
        </li>
      );
    }
  };
  const renderAboutLink = () => {
    if (router.pathname !== "/about") {
      return (
        <li>
          <Link href="/about">About</Link>
        </li>
      );
    }
  };

  return (
    <div className={styles.container}>
      <nav>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            listStyle: "none",
            justifyContent: "space-between",
          }}
        >
          {renderAboutLink()}
          <li>
            <div
              onMouseEnter={() => setShowBuyerLinks(true)}
              onMouseLeave={() => setShowBuyerLinks(false)}
            >
              <Link href="/buyers">Buyers</Link>
              {showBuyerLinks && (
                <ul>
                  <li>
                    <Link href="/buyers/login">Buyer Log In</Link>
                  </li>
                  <li>
                    <Link href="/buyers/create-account">
                      Create Buyer Account
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <div
              onMouseEnter={() => setShowDealerLinks(true)}
              onMouseLeave={() => setShowDealerLinks(false)}
            >
              <Link href="/dealers">Dealers</Link>
              {showDealerLinks && (
                <ul>
                  <li>
                    <Link href="/dealers/login">Dealer Log In</Link>
                  </li>
                  <li>
                    <Link href="/dealers/create-account">
                      Create Dealer Account
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </li>
          {renderIndexLink()}
        </ul>
      </nav>
    </div>
  );
}
