function openBuilding(buildingId) {
  document.getElementById('building-id').innerText = buildingId;
  document.getElementById('floorplan').src = `images/floorplan${buildingId}.jpg`;
  document.getElementById('building-details').style.display = 'block';

  const apartmentLinks = document.getElementById('apartment-links');
  apartmentLinks.innerHTML = '';
  for (let i = 1; i <= 6; i++) {
      const link = document.createElement('a');
      link.href = `#`;
      link.innerText = `Apartment ${i}`;
      link.onclick = () => openApartment(buildingId, i);
      apartmentLinks.appendChild(link);
      apartmentLinks.appendChild(document.createElement('br'));
  }
}

function openApartment(buildingId, apartmentId) {
  alert(`Opening details for Apartment ${apartmentId} in Building ${buildingId}`);
}
