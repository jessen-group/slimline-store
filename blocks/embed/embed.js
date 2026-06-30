export default function decorate(block) {
  const code = block.textContent.trim();
  block.innerHTML = `<div class="embed-content">${code}</div>`;
}