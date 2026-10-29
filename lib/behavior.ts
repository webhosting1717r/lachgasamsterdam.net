/* Het enige eigen script (±0,6 KB): start de achtergrondvideo kort na het eerste beeld,
   niet bij reduced-motion of databesparing (dan blijft de poster staan). De tweede, gespiegelde laag
   start pas zodra de eerste speelt, zodat het bestand maar één keer wordt opgehaald. */
export const VIDEO_DELAY_MS = 0;

export const behaviorScript = `(function(){var b=document.querySelector('.bg');if(!b)return;var c=navigator.connection;if(matchMedia('(prefers-reduced-motion: reduce)').matches||(c&&(c.saveData||/2g/.test(c.effectiveType||''))))return;var v=b.querySelectorAll('video'),a=v[0],z=v[1];function q(e){var p=e.play();if(p&&p.catch)p.catch(function(){})}function go(){a.addEventListener('playing',function(){z.src=z.getAttribute('data-src');z.muted=true;try{z.currentTime=a.currentTime}catch(e){}q(z);b.classList.add('on')},{once:true});a.src=a.getAttribute('data-src');a.muted=true;q(a)}setTimeout(go,${VIDEO_DELAY_MS});addEventListener('pointerdown',function(){if(a.paused&&a.src)q(a)},{once:true,passive:true});addEventListener('keydown',function(e){if(e.key=='Escape'&&location.hash=='#bp-zoom')location.hash='top-bp'})})();`;
