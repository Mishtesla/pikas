<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2299.7">
  <style type="text/css">
    p.p3 {margin: 0.0px 0.0px 12.0px 0.0px; font: 12.0px Times; -webkit-text-stroke: #000000; min-height: 14.0px}
    span.s1 {font-kerning: none}
  </style>
</head>
<body>
<h1 style="margin: 0.0px 0.0px 16.1px 0.0px; font: 24.0px Times; -webkit-text-stroke: #000000"><span class="s1"><b>function openBuilding(buildingId) {</b></span></h1>
<h1 style="margin: 0.0px 0.0px 16.1px 0.0px; font: 24.0px Times; -webkit-text-stroke: #000000"><span class="s1"><b><span class="Apple-converted-space">  </span>document.getElementById('building-id').innerText = buildingId;</b></span></h1>
<h1 style="margin: 0.0px 0.0px 16.1px 0.0px; font: 24.0px Times; -webkit-text-stroke: #000000"><span class="s1"><b><span class="Apple-converted-space">  </span>document.getElementById('floorplan').src = `images/floorplan${buildingId}.jpg`;</b></span></h1>
<h1 style="margin: 0.0px 0.0px 16.1px 0.0px; font: 24.0px Times; -webkit-text-stroke: #000000"><span class="s1"><b><span class="Apple-converted-space">  </span>document.getElementById('building-details').style.display = 'block';</b></span></h1>
<h1 style="margin: 0.0px 0.0px 16.1px 0.0px; font: 24.0px Times; -webkit-text-stroke: #000000; min-height: 29.0px"><span class="s1"><b></b></span><br></h1>
<h1 style="margin: 0.0px 0.0px 16.1px 0.0px; font: 24.0px Times; -webkit-text-stroke: #000000"><span class="s1"><b><span class="Apple-converted-space">  </span>// Example code for adding apartment links</b></span></h1>
<h1 style="margin: 0.0px 0.0px 16.1px 0.0px; font: 24.0px Times; -webkit-text-stroke: #000000"><span class="s1"><b><span class="Apple-converted-space">  </span>const apartmentLinks = document.getElementById('apartment-links');</b></span></h1>
<h1 style="margin: 0.0px 0.0px 16.1px 0.0px; font: 24.0px Times; -webkit-text-stroke: #000000"><span class="s1"><b><span class="Apple-converted-space">  </span>apartmentLinks.innerHTML = '';</b></span></h1>
<h1 style="margin: 0.0px 0.0px 16.1px 0.0px; font: 24.0px Times; -webkit-text-stroke: #000000"><span class="s1"><b><span class="Apple-converted-space">  </span>for (let i = 1; i &lt;= 6; i++) {</b></span></h1>
<h1 style="margin: 0.0px 0.0px 16.1px 0.0px; font: 24.0px Times; -webkit-text-stroke: #000000"><span class="s1"><b><span class="Apple-converted-space">    </span>const link = document.createElement('a');</b></span></h1>
<h1 style="margin: 0.0px 0.0px 16.1px 0.0px; font: 24.0px Times; -webkit-text-stroke: #000000"><span class="s1"><b><span class="Apple-converted-space">    </span>link.href = `#`;</b></span></h1>
<h1 style="margin: 0.0px 0.0px 16.1px 0.0px; font: 24.0px Times; -webkit-text-stroke: #000000"><span class="s1"><b><span class="Apple-converted-space">    </span>link.innerText = `Apartment ${i}`;</b></span></h1>
<h1 style="margin: 0.0px 0.0px 16.1px 0.0px; font: 24.0px Times; -webkit-text-stroke: #000000"><span class="s1"><b><span class="Apple-converted-space">    </span>link.onclick = () =&gt; openApartment(buildingId, i);</b></span></h1>
<h1 style="margin: 0.0px 0.0px 16.1px 0.0px; font: 24.0px Times; -webkit-text-stroke: #000000"><span class="s1"><b><span class="Apple-converted-space">    </span>apartmentLinks.appendChild(link);</b></span></h1>
<h1 style="margin: 0.0px 0.0px 16.1px 0.0px; font: 24.0px Times; -webkit-text-stroke: #000000"><span class="s1"><b><span class="Apple-converted-space">    </span>apartmentLinks.appendChild(document.createElement('br'));</b></span></h1>
<h1 style="margin: 0.0px 0.0px 16.1px 0.0px; font: 24.0px Times; -webkit-text-stroke: #000000"><span class="s1"><b><span class="Apple-converted-space">  </span>}</b></span></h1>
<h1 style="margin: 0.0px 0.0px 16.1px 0.0px; font: 24.0px Times; -webkit-text-stroke: #000000"><span class="s1"><b>}</b></span></h1>
<h1 style="margin: 0.0px 0.0px 16.1px 0.0px; font: 24.0px Times; -webkit-text-stroke: #000000; min-height: 29.0px"><span class="s1"><b></b></span><br></h1>
<h1 style="margin: 0.0px 0.0px 16.1px 0.0px; font: 24.0px Times; -webkit-text-stroke: #000000"><span class="s1"><b>function openApartment(buildingId, apartmentId) {</b></span></h1>
<h1 style="margin: 0.0px 0.0px 16.1px 0.0px; font: 24.0px Times; -webkit-text-stroke: #000000"><span class="s1"><b><span class="Apple-converted-space">  </span>alert(`Opening details for Apartment ${apartmentId} in Building ${buildingId}`);</b></span></h1>
<h1 style="margin: 0.0px 0.0px 16.1px 0.0px; font: 24.0px Times; -webkit-text-stroke: #000000"><span class="s1"><b><span class="Apple-converted-space">  </span>// Implement the function to display apartment details</b></span></h1>
<h1 style="margin: 0.0px 0.0px 16.1px 0.0px; font: 24.0px Times; -webkit-text-stroke: #000000"><span class="s1"><b>}</b></span></h1>
<p class="p3"><span class="s1"></span><br></p>
</body>
</html>
