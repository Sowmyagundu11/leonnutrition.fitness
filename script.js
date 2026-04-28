// ── FLAVOR SELECTION ──────────────────────────
let selectedFlavor = "Orange Flavor 🍊";

function selectFlavor(btn, name, emoji) {
  document.querySelectorAll('.flavor-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  selectedFlavor = name;
  const display = emoji + " " + name.toUpperCase();
  const heroDisp = document.getElementById('hero-flavor-display');
  const sectDisp = document.getElementById('section-flavor-display');
  if (heroDisp) heroDisp.textContent = display;
  if (sectDisp) sectDisp.textContent = display;
  const sel = document.getElementById('buyer-flavor');
  if (sel) sel.value = name + " " + emoji;
}

// ── MODAL ──────────────────────────────────────
function openOrderModal() {
  document.getElementById('orderModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeOrderModal() {
  document.getElementById('orderModal').classList.remove('active');
  document.body.style.overflow = '';
}

// Close modal when clicking outside
document.getElementById('orderModal').addEventListener('click', function(e) {
  if (e.target === this) closeOrderModal();
});

// ── WHATSAPP ORDER ─────────────────────────────
function sendWhatsAppOrder() {
  const name    = document.getElementById('buyer-name').value.trim();
  const phone   = document.getElementById('buyer-phone').value.trim();
  const address = document.getElementById('buyer-address').value.trim();
  const pincode = document.getElementById('buyer-pincode').value.trim();
  const flavor  = document.getElementById('buyer-flavor').value;
  const qty     = document.getElementById('buyer-qty').value;

  // Validation
  if (!name) { alert('Please enter your full name.'); return; }
  if (!phone) { alert('Please enter your phone number.'); return; }
  if (!address) { alert('Please enter your delivery address.'); return; }
  if (pincode.length !== 6) { alert('Please enter a valid 6-digit pincode.'); return; }

  const total = 2399 * parseInt(qty);

  // Build WhatsApp message
  const message =
`🛒 *NEW ORDER – Leon Nutrition KillSet*

*Product:* KillSet Pre-Workout (250g)
*Flavor:* ${flavor}
*Quantity:* ${qty} Jar(s)
*Total Amount:* ₹${total}

─────────────────
*Customer Details:*
👤 Name: ${name}
📞 Phone: ${phone}
🏠 Address: ${address}
📍 Pincode: ${pincode}
─────────────────

Please confirm this order! ✅`;

  const yourNumber = "917976009052"; // ← YOUR WhatsApp number
  const url = "https://wa.me/" + yourNumber +
              "?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
  closeOrderModal();
}

// ── SMOOTH NAV OFFSET ──────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  });
});