function showModal(party) {
  document.getElementById('modal-text').textContent = `${party} Manifesto Summary`;
  document.getElementById('modal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}
