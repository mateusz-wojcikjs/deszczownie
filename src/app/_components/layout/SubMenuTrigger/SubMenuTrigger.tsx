import React, { FC, PropsWithChildren, useRef } from 'react'

// import { useDetectOutsideClick } from '../../../hooks/useDetectOutsideClick'

const SubMenuTrigger: FC<PropsWithChildren> = ({ children }) => {
  const dropdownRef = useRef(null)
  // const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false)
  // const data = useStaticQuery(graphql`
  //   {
  //     allContentfulProdukt {
  //       nodes {
  //         productName
  //         category
  //         id
  //       }
  //     }
  //   }
  // `);

  // const groupBy = (list, key) => {
  //   return list.reduce(function (rv, x) {
  //     (rv[x[key]] = rv[x[key]] || []).push(x);
  //     return rv;
  //   }, {});
  // };

  const onClick = () => {
    // e.preventDefault();
    setIsActive(!isActive)
  }

  // const items = data.allContentfulProdukt.nodes;
  // const categories = groupBy(items, "category");
  //
  // const createStructure = () => {
  //   let items = [];
  //   for (const [key, value] of Object.entries(categories)) {
  //     items.push({ [key]: value });
  //   }
  //   return items;
  // };

  // const getLink = (array, slug, name) => {
  //   if (array.length === 1) {
  //     return (
  //       <StyledNavLink activeClassName="nav--active" to={`/oferta/${slug}`}>
  //         {name}
  //       </StyledNavLink>
  //     );
  //   } else {
  //     return (
  //       <StyledNavLink to={"/"} activeClassName="nav--active">
  //         {name}
  //       </StyledNavLink>
  //     );
  //   }
  // };
  // const renderMenuSubItem = (product, parent) => {
  //   if (product.productName.toLowerCase() !== parent.toLowerCase()) {
  //     const slug = slugify(product.productName, {
  //       replacement: "-",
  //       lower: true,
  //     });
  //     return (
  //       <li key={product.id} className="second-level">
  //         <Link to={`/oferta/${slug}`}>{product.productName}</Link>
  //       </li>
  //     );
  //   }
  // };
  //
  // const renderMenuItem = (name, children) => {
  //   const slug = slugify(name, {
  //     replacement: "-",
  //     lower: true,
  //   });
  //   return (
  //     <li key={name} className="top-level">
  //       {getLink(children, slug, name)}
  //     </li>
  //   );
  // };

  return (
    <details open={isActive} onClick={e => onClick()}>
      <summary ref={dropdownRef}>{children}</summary>
      <ul className="submenu">
        <li>Test 1</li>
        <li>Test 2</li>
        <li>Test 3</li>
        <li>Test 4</li>
      </ul>
    </details>
  )
}

export default SubMenuTrigger
