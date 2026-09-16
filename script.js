/* Price + your SuperProfile checkout */
window.OFFER = {
  price: 199,
  oldPrice: 1999,
  checkout:
    "https://superprofile.bio/vp/massagecarejs",
};

function formatInr(n) {
  return "₹" + n.toLocaleString("en-IN");
}

function applyOffer() {
  const { price, oldPrice, checkout } = window.OFFER;
  const off = Math.round((1 - price / oldPrice) * 100);
  const href = encodeURI(checkout);
  document.querySelectorAll("[data-price]").forEach((el) => {
    el.textContent = formatInr(price);
  });
  document.querySelectorAll("[data-old-price]").forEach((el) => {
    el.textContent = formatInr(oldPrice);
  });
  document.querySelectorAll("[data-off]").forEach((el) => {
    el.textContent = off + "% off";
  });
  document.querySelectorAll("a[data-checkout]").forEach((el) => {
    el.setAttribute("href", href);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });
}

function startCountdown() {
  const root = document.querySelector("[data-countdown]");
  if (!root) return;
  const hoursEl = root.querySelector("[data-h]");
  const minEl = root.querySelector("[data-m]");
  const secEl = root.querySelector("[data-s]");
  let left = 3 * 3600 + 25 * 60 + 12;
  const tick = () => {
    if (left < 0) left = 3 * 3600;
    const h = Math.floor(left / 3600);
    const m = Math.floor((left % 3600) / 60);
    const s = left % 60;
    hoursEl.textContent = String(h).padStart(2, "0");
    minEl.textContent = String(m).padStart(2, "0");
    secEl.textContent = String(s).padStart(2, "0");
    left -= 1;
  };
  tick();
  setInterval(tick, 1000);
}

document.querySelectorAll(".faq-item button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq-item");
    const open = item.classList.contains("open");
    document.querySelectorAll(".faq-item").forEach((el) => el.classList.remove("open"));
    if (!open) item.classList.add("open");
  });
});

applyOffer();
startCountdown();
