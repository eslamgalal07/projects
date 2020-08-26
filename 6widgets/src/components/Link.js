import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    //open in new tab when press command or ctrl
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    // show href in address bar
    window.history.pushState({}, "", href);
    // update history object with href
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
