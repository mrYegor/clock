const loadHandler = () => {
    const hr = document.querySelector('#hr');
    const mn = document.querySelector('#mn');
    const sc = document.querySelector('#sc');

    setInterval(() => {
        let hh = new Date().getHours() * 30;
        let mm = new Date().getMinutes() * 6;
        let ss = new Date().getSeconds() * 6;

        hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
        mn.style.transform = `rotateZ(${(mm)}deg)`;
        sc.style.transform = `rotateZ(${(ss)}deg)`;

        const hour = document.querySelector('#hour');
        const minutes = document.querySelector('#minutes');
        const seconds = document.querySelector('#seconds');
        const ampm = document.querySelector('#ampm');

        let h = new Date().getHours();
        let m = new Date().getMinutes();
        let s = new Date().getSeconds();

        h = (h < 10) ? '0' + h : h;
        m = (m < 10) ? `0${m}` : m;
        s = (s < 10) ? `0${s}` : s;

        hour.innerHTML = h;
        minutes.innerHTML = m;
        seconds.innerHTML = s;
        ampm.innerHTML = h <= 12 ? 'AM' : 'PM'
        
    })

    

    setInterval(() => {
        
    })
}
window.addEventListener('load', loadHandler)
