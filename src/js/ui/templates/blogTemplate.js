export const createBlogCardTemplate = ({ img, date, title, link }) => {
  return `
    <div class="blog__card">
      <img src="${img}" alt="blog image" class="blog__img" />
      <div class="blog__content">
        <p class="blog__date">${date}</p>
        <h4 class="blog__title">${title}</h4>
        <a href="${link}" class="blog__link">Читать полностью</a>
      </div>
    </div>
  `;
};

export const blogTemplate = (data) => {
  const cardsTemplate = data
    .map((item) => createBlogCardTemplate(item))
    .join("");

  return `
    <div class="blog__container">
      ${cardsTemplate}
    </div>
  `;
};