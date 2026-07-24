import React from 'react';
import clsx from 'clsx';
import {
  NavbarSecondaryMenuFiller,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import DocSidebarItems from '@theme/DocSidebarItems';

// Keep the mobile navigation drawer open while a document is selected. The
// default Docusaurus implementation closes it after every internal link click,
// which makes navigation feel like a refresh and forces users to reopen it.
const DocSidebarMobileSecondaryMenu = ({sidebar, path}) => (
  <ul className={clsx(ThemeClassNames.docs.docSidebarMenu, 'menu__list')}>
    <DocSidebarItems items={sidebar} activePath={path} level={1} />
  </ul>
);

function DocSidebarMobile(props) {
  return (
    <NavbarSecondaryMenuFiller
      component={DocSidebarMobileSecondaryMenu}
      props={props}
    />
  );
}

export default React.memo(DocSidebarMobile);
