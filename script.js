const $=id=>document.getElementById(id),v=id=>$(id).value.trim()||'-';let st=5;
function wa(m){window.open('https://wa.me/918918547087?text='+encodeURIComponent(m),'_blank')}
$('mb').onclick=()=>{const o=$('nav').classList.toggle('open');$('mb').setAttribute('aria-expanded',o)};
document.addEventListener('keydown',e=>{if(e.key==='Escape'){$('nav').classList.remove('open');$('mb').setAttribute('aria-expanded','false')}});
document.querySelectorAll('#nav a').forEach(a=>a.onclick=()=>$('nav').classList.remove('open'));
const sp=[...$('sp').children],paint=()=>sp.forEach((s,i)=>{s.classList.toggle('on',i<st);s.setAttribute('aria-checked',i<st?'true':'false')});
sp.forEach((s,i)=>{s.onclick=()=>{st=i+1;paint()};s.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();st=i+1;paint()}}});paint();
function markBad(id,bad){const el=$(id);el.style.borderColor=bad?'var(--red)':'';el.setAttribute('aria-invalid',bad?'true':'false');return !bad}
function membWa(){const a=markBad('mn',v('mn')==='-'),b=markBad('mp',v('mp')==='-');if(!a||!b){const e=$('membErr');e.style.display='block';e.focus();return}$('membErr').style.display='none';wa('Hi FIT DEN! Membership enquiry\nName: '+v('mn')+'\nPhone: '+v('mp')+'\nPlan: '+v('mpl')+'\nGoal: '+v('mg'))}
function contWa(){const a=markBad('cn',v('cn')==='-'),b=markBad('cp',v('cp')==='-');if(!a||!b){const e=$('contErr');e.style.display='block';e.focus();return}$('contErr').style.display='none';wa('Hi FIT DEN!\nName: '+v('cn')+'\nPhone: '+v('cp')+'\nMessage: '+v('cm'))}
['mn','mp','cn','cp'].forEach(id=>$(id).addEventListener('blur',()=>markBad(id,v(id)==='-')));
function bmi(){const h=+$('bh').value/100,w=+$('bw').value;if(!h||!w){$('bmiOut').textContent='Enter height and weight';return}
const b=w/(h*h),c=b<18.5?'Underweight':b<25?'Normal':b<30?'Overweight':'Obese';$('bmiOut').innerHTML=b.toFixed(1)+'<small>'+c+'. Ask our trainers for a plan.</small>'}
function status(){const t=new Date(new Date().toLocaleString('en-US',{timeZone:'Asia/Kolkata'})),d=t.getDay(),m=t.getHours()*60+t.getMinutes();
let on=d>0&&((m>=360&&m<720)||(m>=960&&m<1320)),msg;
if(d===0)msg='Closed today (Sunday)';else if(on)msg='Open now';else msg=m<360?'Closed. Opens 6 AM':m<960?'Closed. Opens 4 PM':'Closed. Opens '+(d===6?'Monday':'tomorrow')+' 6 AM';
['','2'].forEach(s=>{$('dot'+s).className='dot'+(on?' on':'');$('open'+s).textContent=msg})}
status();
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.rev').forEach(e=>io.observe(e));