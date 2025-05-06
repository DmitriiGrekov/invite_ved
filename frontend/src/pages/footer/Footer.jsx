import React from 'react';
import './style.scss';


function Footer() {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <h2><a href='https://drive.google.com/drive/folders/1zkW44HjIpE2mJhRqj33Gn3TR5uwmXrj4?usp=drive_link' target="_blank">ФОТОАЛЬБОМ СО СВАДЬБЫ</a>  </h2>
                <div style={{ position: 'relative', overflow: 'hidden', marginTop: '0' }}>
                    <a
                        href="https://yandex.ru/maps/org/la_cafe/200353738695/?utm_medium=mapframe&utm_source=maps"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '10px' }}>
                        La cafe
                    </a>
                    <a
                        href="https://yandex.ru/maps/11115/salavat/category/cafe/184106390/?utm_medium=mapframe&utm_source=maps"
                        style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '10px' }}>
                        Кафе в Салавате
                    </a>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?ll=55.927044%2C53.351397&mode=search&oid=200353738695&ol=biz&z=17.06"
                        width="100%"
                        height="455"
                        allowFullScreen={true}
                        title="Карта La cafe"
                        style={{ position: 'relative' }}>
                    </iframe>
                </div>
                <h1>by Ruslan Temirbulatov</h1>
            </div>
        </div>
    )
}


export default Footer
