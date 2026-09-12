const $=s=>document.querySelector(s),esc=s=>String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const WEBCMD_LABEL='Webcmd job research layer';
$('#status').textContent=`${WEBCMD_LABEL} is ready to verify direct company listings.`;
$('#f').onsubmit=async e=>{e.preventDefault();$('#results').innerHTML='';$('#status').textContent=`${WEBCMD_LABEL}: searching public job sources…`;try{
 const payload={resume:$('#resume').value,preferences:{titles:$('#titles').value,location:$('#location').value,remote:$('#remote').checked}};
 const r=await fetch('/api/search',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(payload)});
 const d=await r.json();if(!r.ok)throw Error(d.error);
 $('#status').textContent=d.warnings.length?`${WEBCMD_LABEL}: search finished; ${d.warnings.join(', ')}.`:`${WEBCMD_LABEL}: search complete.`;
 $('#summary').innerHTML=`<b>${d.total}</b> results for <b>${esc(d.query)}</b> · detected skills: ${esc(d.profile.skills.join(', ')||'none')} · <em>Use Webcmd to verify a direct-company page before applying.</em>`;
 $('#results').innerHTML=d.jobs.map(j=>`<article><div><span>${j.fit}% fit</span><h2>${esc(j.title)}</h2><p><b>${esc(j.company)}</b> · ${esc(j.location)}</p><p>${esc(j.reason)}</p><small>Salary: <b>${esc(j.salary)}</b> · ${esc(j.source)}</small></div><a href="${esc(j.url)}" target="_blank" rel="noopener">Review with Webcmd ↗</a></article>`).join('')||'<p>No matches. Broaden target roles or remove remote-only.</p>'
 }catch(x){$('#status').textContent=`Search failed: ${x.message}`}};
