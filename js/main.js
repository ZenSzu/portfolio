  // mobile menu
  const menuBtn = document.getElementById('menuBtn');
  const links = document.querySelector('nav.links');
  menuBtn?.addEventListener('click', () => {
    const open = links.style.display === 'flex';
    links.style.display = open ? 'none' : 'flex';
    if(!open){
      links.style.cssText = 'display:flex;flex-direction:column;position:fixed;top:70px;left:0;right:0;background:#0b0b0a;padding:24px 32px;gap:20px;border-bottom:1px solid rgba(242,238,231,0.12);';
    }
    menuBtn.setAttribute('aria-expanded', String(!open));
  });
  document.querySelectorAll('nav.links a').forEach(a=>{
    a.addEventListener('click', ()=>{ if(window.innerWidth<=900){ links.style.display='none'; } });
  });

  // scroll reveal
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!reduceMotion && 'IntersectionObserver' in window){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in-view'); io.unobserve(e.target); } });
    }, {threshold:0.12});
    document.querySelectorAll('[data-reveal]').forEach(el=>io.observe(el));
  } else {
    document.querySelectorAll('[data-reveal]').forEach(el=>el.classList.add('in-view'));
  }

  // running timecode in hero frame
  const tcEl = document.getElementById('tc');
  if(tcEl && !reduceMotion){
    let frame = 0;
    const fps = 24;
    function pad(n){ return String(n).padStart(2,'0'); }
    function tick(){
      frame++;
      const ff = frame % fps;
      let totalSec = Math.floor(frame / fps);
      const ss = totalSec % 60;
      let totalMin = Math.floor(totalSec / 60);
      const mm = totalMin % 60;
      const hh = Math.floor(totalMin / 60);
      tcEl.textContent = `${pad(hh)}:${pad(mm)}:${pad(ss)}:${pad(ff)}`;
    }
    setInterval(tick, 1000/fps);
  }