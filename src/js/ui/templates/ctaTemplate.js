export const ctaTemplate = (data) => {
  return `
    <div class="cta_section__content">
      <p class="cta_section__text">${data.text}</p>
      <h2 class="cta_section__header">${data.header}</h2>
    </div>
    <button class="btn primary-btn cta_section__btn">${data.buttonText}</button>
  `;
};