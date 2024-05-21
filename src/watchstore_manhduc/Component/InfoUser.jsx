import React, {useState, useEffect} from 'react'
import Header from "./Header";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import { useParams } from 'react-router-dom';
import axios from "axios";


function InfoUser() {
    const [values, setValues] = useState({
        password:'',
        newpassword:'',
        samenewpassword:'',
      })
    const handleSubmit = (event) =>{
        if(values.newpassword !== values.samenewpassword){
            alert('mật khẩu mới không giống nhau')
        }else{
          
        }
    }

    const { id } = useParams()
  const [user, setUser] = useState('');
  useEffect(() => {
    axios.get(`http://localhost:4000/infouser/${id}`)
    .then (res => {
      setUser(res.data)
    }
    )
},[]);
  return (
    <>
    <Header/>
        <div className='bodyinfousser'>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Thông Tin Người Dùng</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Đổi Mật Khẩu</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="three">Phòng đã đặt</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>

                    {/* tab 1*/}
                  <Tab.Pane eventKey="first">
                    <div className='imgbackgroudinfo'>
                        <Col xs={6} md={4}>
                            <Image src="https://i.imgur.com/MLyGKk7.jpeg" roundedCircle />
                        </Col>
                        {user && user.map(user => (
                          <div className= "nameuserifo">
                            <p>Xin chào {user.name}</p>
                          
                            <div className= "textfa">Member</div>
                          </div>
                          
                        ))}
                        
                    </div>
                    <div className='infoftext'>
                      {user && user.map(user => (
                        <div className='infothongitn'>
                          <h6>Thông tin người dùng</h6>
                          <p>Tên: {user.name}</p>
                          <p>Email: {user.email}</p>
                        </div>
                      ))}
                    </div>

                  </Tab.Pane>
                  {/* tab 3*/}
                  <Tab.Pane eventKey="three">
                    <div className='order-bill'>
                        <h6>Thông Tin Đặt Phòng</h6>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
      </div>
    </>
  )
}

export default InfoUser
