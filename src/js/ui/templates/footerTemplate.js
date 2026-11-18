export const createFooterLinkListTemplate = (links) => {
  return links.map(col => `
    <div class="footer__col">
      <h5 class="footer__heading">${col.heading}</h5>
      <ul>
        ${col.items.map(item => `<li><a href="${item.href}">${item.title}</a></li>`).join("")}
      </ul>
    </div>
  `).join("");
};

export const footerTemplate = (data) => {
  return `
    <div class="footer__top">
      <div class="footer__brand">
        <img src="${data.logo}" alt="logo" class="footer__logo" />
        <p class="footer__desc">${data.brandDesc}</p>
      </div>
      <div class="footer__links">
        ${createFooterLinkListTemplate(data.links)}
      </div>
    </div>
    <p class="footer__copyright">${data.copyright}</p>
  `;
};