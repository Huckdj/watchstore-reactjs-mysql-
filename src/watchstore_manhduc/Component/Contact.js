import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { faRoad,faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Contact() {
  return (
    <>
        <Header/>
            <div className='bodycontact'>
                <div class="container2">
                <div class="wrapper">
                    <div class="company-info">
                        <h3>Trụ sở chính</h3>

                        <ul>
                            <li><FontAwesomeIcon icon={faRoad}/> 61 Quang Trung, P10, Gò Vấp, HCM </li>
                            <li><FontAwesomeIcon icon={faPhone}/> 0987712456</li>
                            <li><FontAwesomeIcon icon={faEnvelope}/> info@watchstoretanbang.vn </li>
                        </ul>
                    </div>
                    <div class="contact">
                        <h3>Liên hệ với chúng tôi</h3>

                        <form id="contact-form">

                            <p>
                                <label>Tên</label>
                                <input type="text" name="name" id="name" required/>
                            </p>

                            <p>
                                <label>E-mail</label>
                                <input type="email" name="email" id="email" required/>
                            </p>

                            <p>
                                <label>Số Điện Thoại</label>
                                <input type="text" name="phone" id="phone"/>
                            </p>

                            <p class="full">
                                <label>Tin Nhắn</label>
                                <textarea name="message" rows="5" id="message"></textarea>
                            </p>

                            <p class="full">
                                <button type="submit">Gửi</button>
                            </p>

                        </form>
                    </div>
                </div>
                </div>
                            </div>
        <Footer/>
    </>
  )
}

export default Contact
